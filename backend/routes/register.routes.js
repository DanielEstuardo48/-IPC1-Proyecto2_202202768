const express = require('express');
const AppData = require('../AppData');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

//*Agregar usuario
router.post('/cargarUsuario',(req, res)=>{
    const {nombrecompleto} = req.body;
    const { nombre } = req.body;
    const { correo } = req.body;
    const {contrasenia} = req.body;
    const{fechanacimiento} = req.body;

    if(nombrecompleto === ""){
        return res.status(400).json({error: `Debe llenar el campo nombre de completo`})
    }else{
        if(nombre === ""){
            return res.status(400).json({error: `Debe llenar el campo nombre de usuario`})
        }else{
            if(correo === ""){
                return res.status(400).json({error: `Debe llenar el campo de correo`})
            }else{
                if(contrasenia === ""){
                    return res.status(400).json({error: `Debe llenar el apartado de contraseña`})
                }else{
                    if(fechanacimiento === ""){
                        return res.status(400).json({error: `Debe llenar el apartado de fecha de nacimiento`})
                    }else{
                        //if(contrasenia === mini){
                            //return res.status(400).json({error: `La contraseñia debe ser mayor a 8 caracteres`})
                        //}else{
                            for(let usuario of AppData.usuarios){
                                if (usuario.nombre === nombre){
                                    return res.status(400).json({error: `El nombre de usuario \`${nombre}\` ya existe`});
                                }
                            }
                    
                            const idUsuario = uuidv4();
                            const tipoUsuario = 'PACIENTE';
                    
                            AppData.usuarios.push({
                                idUsuario,
                                ...req.body,
                                tipoUsuario
                            })
                       // return res.status(400).json({error: 'Usuario registrado con exito'});
                    
                            return res.status(200).json({usuarios: AppData.usuarios})
                        //}
                    }
                }
            }
        }
    }
})


module.exports = router;