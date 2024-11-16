import http from 'http';
import fs from 'fs';
import os from 'os';
  function getSystemInfo(){
    return{
        osType: os.type(),
        Platform: os.platform(),
        Ram: os.totalmem(),
        usedRam: os.totalmem() - os.freemem(),
        cpu: os.cpus()
    }
  }
http.createServer((req, res) => {
    let info = getSystemInfo();
    let responseText = JSON.stringify(info, null, 2);
    fs.writeFile('D:\\homeework\\src\\server.txt', responseText, (err) => {
        if (err) {
          console.error('err khi ghi file:', err);
          return;
        }
        console.log('Compled task!!');
      });
      res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(responseText);
}).listen(8080, () => {
    console.log('Server is running on port http://localhost:8080');
});
