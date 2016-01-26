'use strict';
module.exports = function(app, upload, File) {
    app.post('/profile', upload.single('avatar'), function (req, res, next) {
        // req.file is the `avatar` file 
        // req.body will hold the text fields, if there were any 
    });


};