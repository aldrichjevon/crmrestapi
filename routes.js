'use strict';

module.exports = function(app) {
    var json = require('./controller');

    app.route('/')
        .get(json.index);

    app.route('/get')
        .get(json.getdata);
    
    app.route('/get/:id')
        .get(json.getdataid);

    app.route('/jalan')
        .get(json.getdatajalan);

    app.route('/pohon')
        .get(json.getdatapohon);
    
    app.route('/sampah')
        .get(json.getdatasampah);

    app.route('/post')
        .post(json.postdata);

    app.route('/:id/update')
        .put(json.updatevote);
}