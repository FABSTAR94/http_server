//Here we used the fs core module to interact with the file systems.
const fs = require('fs');

//we use module.exports to be able to export this function to another file.
module.exports = {
    /* Here we created a respond req function in which reads the html file and checks to see if an error
    exists. If not it will show the content. */
    requestListener: (req, res) => {
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`${err}`);
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })
    }
}
