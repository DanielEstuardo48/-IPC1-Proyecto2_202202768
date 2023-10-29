import styles from './Register.module.css'
import{useState} from'react';
import { useNavigate } from 'react-router-dom';

function Registrar(){
    const[usuarrios, setUsuarios] = useState ([]);
    const navigate = useNavigate();

    //*Datos para crear un usuario
    const[nombrecompleto, setNombrecompleto] = useState("");
    const[nombre, setNombre] = useState("");
    const[correo, setCorreo] = useState("");
    const[contrasenia, setContrasenia] = useState("");
    const[fechanacimiento, setFechanacimiento] = useState("");
    const[numerocell, setNumerocell]= useState("");

    //*Agregar usuario
    const handleCargarUsuarios = async e =>{
        e.preventDefault();

        const URL = 'http://localhost:4000/Register/cargarUsuario';
        const response = await fetch (URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombrecompleto,
                nombre,
                correo,
                contrasenia,
                fechanacimiento,
                numerocell
            })
        })
        const data = await response.json();

        if (response.status === 400){
            return alert(data.error)
        }

        setUsuarios(data.usuarios);
    }


    return(
        <div>
        <form onSubmit={handleCargarUsuarios} className={styles.formContainer}>
            <h3>UHospital - Registro de paciente</h3>
            <div>
                <label htmlFor='nombrecompleto' className = {styles.label}>Nombre Completo</label>
                <input type='text' id='nombrecompleto' name='nombrecompleto' placeholder='Ingrese un nombre completo' 
                autoComplete='off' className = {styles.input} value={nombrecompleto} onChange={e => setNombrecompleto (e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='nombre' className = {styles.label}>Nombre de usuario</label>
                <input type='text' id='nombre' name='nombre' placeholder='Ingrese un nombre de usuario' 
                autoComplete='off' className = {styles.input} value={nombre} onChange={e => setNombre (e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='correo' className = {styles.label}>Correo</label>
                <input type='text' id='correo' name='correo' placeholder='Ingrese su correo electronico' autoComplete='off' 
                className = {styles.input} value={correo} onChange={e => setCorreo (e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='contrasenia' className = {styles.label}>Contraseña</label>
                <input size= '58' type='text' id ='contrasenia' name='contrasenia' placeholder='Ingrese una contraseña' 
                autoComplete='off' className = {styles.input2} value={contrasenia} minLength="8" 
                onChange={e => setContrasenia (e.target.value)}></input> <span class="validity"></span>
            </div>
            <div>
                <label htmlFor='fechanacimiento' className = {styles.label}>Fecha de Nacimiento</label>
                <input type='text' id='fechanacimiento' name='fechanacimiento' placeholder='Ingrese su fecha de nacimiento 04/02/2000' 
                autoComplete='off' className = {styles.input} value={fechanacimiento} onChange={e => setFechanacimiento (e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='numerocell' className = {styles.label}>Ingrese su numero de telefono</label>
                <input type='text' id='numerocell' name='numerocell' placeholder='Ingrese su numero de telefono (opcional)' 
                autoComplete='off' className = {styles.input} value={numerocell} onChange={e => setNumerocell (e.target.value)}></input>
            </div>
            <div>
            <button  size ="35" type ="submit" className={styles.button}>Registrarse</button>
            </div>
            
        </form>
        <div className={styles.div2}>Ya tienes cuenta? <button className={styles.register} 
            onClick={()=>navigate('/login')}> Iniciar sesión</button></div>
        </div>
    )
}

export default Registrar;