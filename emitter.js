const server = require('http').createServer((req, res) => {
    const headers = {
      'Access-Control-Allow-Origin': 'http://localhost:8080/', /* @dev First, read about security */
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': 2592000, // 30 days
      /** add other headers as per requirement */
    };
  
    if (req.method === 'OPTIONS') {
      res.writeHead(204, headers);
      res.end();
      return;
    }
  
    if (['GET', 'POST'].indexOf(req.method) > -1) {
      res.writeHead(200, headers);
      res.end('Hello World');
      return;
    }
  
    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`)

    })


const io = require('socket.io')(server, {
   cors: {
    origin: '*',
  }
});
// io.on('connection', client => {
    // console.log('conntected',client);
    // 
    // let long1 = 118
    // let long2 = 120
    // let mmsi = 1111
    // setInterval(() => {
// 
        // console.log('sending');
        // let long
        // if (mmsi % 2 !== 0){
          // mmsi+=1 
          // long1+=0.1
          // long = long1
          // 
        // } 
        // else {
          // long2+=0.1
          // long = long2
          // mmsi-=1
        // }
// 
        // console.log('mssi sended = ',mmsi);
        // const shipdata = {
            // mmsi: String(mmsi),
            // lat : -1,
            // long : long
        // }
        // client.emit('ship-position', shipdata);
// 
    // }, 1000);

    // client.on('disconnect', () => { console.log('disconected!!!!');});
// });
// server.listen(3000);

module.exports = {server,io}