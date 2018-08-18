const server = require('http').createServer();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const io = require('socket.io')(server, {
    path: '/',
    serveClient: false,
    pingTimeOut: 60000,
    pingInterval: 25000,
    cookie: false
});

const serialPort = process.env.serialPort ? process.env.serialPort : '/dev/ttyACM0';

const serialPort = new SerialPort(serialPort, {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1
});

const parser = serialPort.pipe(new Readline('/n'));

const port = process.env.port ? process.env.port : 3000; 
server.listen(port, function () {
    console.log('server is listening on port '+ port);
});


io.on('connection', function (socket) {
    console.log('socket is open');
}, port);


serialPort.on('open', function () {
    console.log('open');
});

parser.on('data', function (dataString) {

    const formattedData =
        dataString.split('//')
            .reduce((accumulator, currentValue) => {
                const targetData =
                    currentValue.split('-');
                if (targetData.length !== 2) {
                    throw `A target data should have only two parameters
                     representing a key: value of an object`
                }
                return accumulator[targetData[0]] = targetData[1];
            }, {})
    io.emit(
        'iotData',
        formattedData);
});



function onSerial(msg) {
    console.log(' sending message', msg);
    io.emit('iotData', { msg: msg });
};
