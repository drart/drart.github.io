(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', event => {
        let connectButton = document.querySelector("#connect");
        let statusDisplay = document.querySelector('#status');
        let port = null;

        let slider = document.getElementById("slider");

        let encoder = new TextEncoder()

        function connect() {
            port.connect().then(() => {
                statusDisplay.textContent = '';
                connectButton.textContent = 'Disconnect';

                //let encoder = new TextEncoder()

                // send some bytes to the arduino
                /*
                port.send(encoder.encode("H"));
                setTimeout(function(){
                    port.send(encoder.encode("H"));
                    console.log('kjfl');
                }, 1000);
                */

                port.onReceive = data => {
                    let textDecoder = new TextDecoder();
                    console.log(data.getUint8());
                    console.log(textDecoder.decode(data));
                }
                port.onReceiveError = error => {
                    console.error(error);
                };
            }, error => {
                statusDisplay.textContent = error;
            });
        }

        connectButton.addEventListener('click', function() {
            if (port !== null) {
                port.disconnect();
                connectButton.textContent = 'Connect';
                statusDisplay.textContent = '';
                port = null; // why set this to null? 
            } else {
                serial.requestPort().then(selectedPort => {
                    port = selectedPort;
                    connect();
                }).catch(error => {
                    statusDisplay.textContent = error;
                });
            }
        });


        slider.addEventListener('change', function() {
            var mystring = parseInt(this.value);
            console.log(mystring);
            if (port !== null){
                port.send(encoder.encode(mystring));
            }
        });

        serial.getPorts().then(ports => {
            if (ports.length == 0) {
                statusDisplay.textContent = 'No device found.';
            } else {
                statusDisplay.textContent = 'Connecting...';
                port = ports[0];
                connect();
            }
        });
    });
})();
