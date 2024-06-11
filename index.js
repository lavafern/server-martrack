require('dotenv').config()
const receiverSocket = require('./receiver')
const {server,io,app} = require('./emitter')
const vesselRoutes = require('./routes/vessel.routes')
const data = []

receiverSocket.onmessage = async function (event) {
    let aisMessage = JSON.parse(event.data)
    const shipData = aisMessage.MetaData
    // console.log('AISMESSAGE: ',shipData)
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

app.use('/vessel',vesselRoutes)

server.listen(3000, () => console.log('server listening to port 3000'));
