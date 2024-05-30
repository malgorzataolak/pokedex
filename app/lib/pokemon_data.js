const fs = require('fs');
function readFileAsync(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFileAsync(process.cwd() + '/app/lib/pokemonDB_dataset.json', 'utf-8')
    .then(data => {
        let obj = JSON.parse(data);
        console.log(obj);
    })
    .catch(err => {
        console.error(err);
    });

