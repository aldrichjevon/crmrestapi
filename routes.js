'use strict';

module.exports = function(app) {
    var json = require('./controller');

    app.route('/')
        .get(json.index);

    app.route('/get')
        .get(json.getdata);
    
    app.route('/get/:id')
        .get(json.getdataid);

    app.route('/post')
        .post(json.postdata);
}