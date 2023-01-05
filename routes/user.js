
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuarioDelete, usuarioPatch, usuarioPost, } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuarioPost );

router.delete('/', usuarioDelete );

router.patch('/', usuarioPatch );








module.exports = router;

