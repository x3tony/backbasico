const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        apikey
    });
}

const userPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const userPost = (req, res = response) => {
    const {nombre} = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete

}