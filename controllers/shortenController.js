const { exists } = require('../models/shorten');
const Shorten = require('../models/shorten');

exports.shorten_url = (req, res) => {
    getAllCodes().then( (result) => {
        addNewDoc(req.body.url, result).then((msg) => {
            res.send(msg);
        })
    }).catch((err) => {
        console.log("error_code_1   :" + err);
        res.send({message: "Unexpected error occurred: error code 1"});
    });
};

exports.get_url = (req, res) => {
    if (req.params.short_code != null || req.params.short_code != undefined){
        Shorten.findOne({shorten_code: req.params.short_code}).select('url -_id').then((obj) => {
            console.log(obj.url);
            res.redirect(obj.url);
            // res.send(obj)
        });
    }
}

function shortenCode(shorten_url_length) {
    let result = '';
    let queryString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < shorten_url_length; i++ ) {
        result += queryString.charAt(Math.floor(Math.random() * queryString.length));
    }
    return result;
}

function addNewDoc(newUrl, all_data) {
    const newAddDocPromise = new Promise((resolve, reject) => {
        let existsVar = true;
        console.log("newURL:" + newUrl);
        while(existsVar) {
            let new_code = shortenCode(6);
            if (all_data.find(o => o.name === new_code)) {
                //continue
            } else {
                let shorten_url = new Shorten({
                    url: newUrl,
                    shorten_code: new_code
                });
                
                try {
                    shorten_url.save();
                    msg = {message: "success", code: new_code};
                    resolve(msg);
                } catch(err) {
                    console.log(err);
                    msg = msg = {message: "error", code: err};
                    reject(msg);
                }
                existsVar = false;
            }
            
        }
    }).catch((err) => {
        console.log(err);
    })
    return newAddDocPromise;
}

function getAllCodes() {
    const allCodesPromise = new Promise ((resolve, reject) => {
        Shorten.find({ shorten_code: {$exists: true}}).then((data) => {
            if (data != null){
                resolve(data)
            } else {
                reject(null)
            }
        });
    }).catch(err => {
        console.log(err);
    });
    return allCodesPromise;
}

function checkCodeExist(checkCode) {
    return Shorten.find({ shorten_code: checkCode}).count() > 0;
}