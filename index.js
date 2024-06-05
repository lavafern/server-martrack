require('dotenv').config()
const receiverSocket = require('./receiver')
const {server,io} = require('./emitter')
const data = []

receiverSocket.onmessage = async function (event) {
    let aisMessage = JSON.parse(event.data)
    const shipData = aisMessage.MetaData
    // console.log('AISMESSAGE: ',MMSI)
    data.push(shipData)
}

io.on('connection', client => {
    console.log('conntected',client);
    setInterval(() => {

        if (data.length > 0) {
            
            const {MMSI,latitude,longitude} = data[0]
            data.shift()
    
            console.log('data >>',data.length);
            client.emit('ship-position', {mmsi:String(MMSI),lat:latitude,long:longitude});
        } else {
            console.log('EMPTY');
        }

    }, 1000);

    client.on('disconnect', () => { console.log('disconected!!!!');});
});


server.listen(3000);
