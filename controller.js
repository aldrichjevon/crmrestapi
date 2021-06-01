'use strict';
require('dotenv').config()
var response = require('./res');
var connection = require('./connection');

exports.index = function(req,res){
    response.ok("Running well", res)
};

//Get data
exports.getdata = function(req, res){
    connection.query('SELECT * FROM reports', 
        function(error, rows, fields){
            if(error){
                connection.log(error);
            }else {
                response.ok(rows, res)
            }
        });
};

//Get data using Id
exports.getdataid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM reports WHERE id_laporan = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//Filter data report jalan
exports.getdatajalan = function(req, res){
    connection.query("SELECT * FROM reports WHERE kategori = 'Jalan';",
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//Filter data report pohon
exports.getdatapohon = function(req, res){
    connection.query("SELECT * FROM reports WHERE kategori = 'Pohon';", 
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//Filter data report sampah
exports.getdatasampah = function(req, res){
    connection.query("SELECT * FROM reports WHERE kategori = 'Sampah';",
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//Post data report
exports.postdata = function(req, res){
    var id_laporan = req.body.id_laporan;
    var kategori = req.body.kategori;
    var sub_kategori = req.body.sub_kategori;
    var deskripsi = req.body.deskripsi;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var foto = req.body.foto;
    var vote = req.body.vote;
    var id_kecamatan = req.body.id_kecamatan;
    var createdat = req.body.createdat;

    connection.query('INSERT INTO reports (kategori, sub_kategori, deskripsi, latitude, longitude, foto, id_kecamatan) VALUES(?,?,?,?,?,?,?)',
        [kategori, sub_kategori, deskripsi, latitude, longitude, foto, id_kecamatan],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok("Data berhasil ditambahkan", res)
            }
        });
};

// Update vote
exports.updatevote = function(req, res){
    let id = req.params.id;
    connection.query(`UPDATE reports SET vote = vote + 1 WHERE id_laporan = ?`, [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};