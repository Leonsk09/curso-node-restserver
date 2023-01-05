const { response, request  } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
 }

const usuarioPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador',
    });
}

const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - contorlador'
    });
}

module.exports = {
    usuariosGet, usuarioPost, usuariosPut, usuarioDelete, usuarioPatch
}