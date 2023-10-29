import styles from './Login.module.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Login(props){
    const navigate = useNavigate(); 

    const handleIngresar = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data',
            },
            body: formData
        })
        const data = await response.json();

        if (response.status !== 200) {
            alert(data.error);
            return;
        }

        props.setUsuario(data.usuario);
        switch (data.usuario.tipoUsuario) {
            case "PACIENTE":              
                navigate('/paciente')
                break;
            case "ENFERMERA":
                navigate('/enfermera')
                break;
        }
    }
    return(
        <div>
            <form onSubmit={handleIngresar} className={styles.formContainer} encType='multipart/form-data'>
                    <h1 className = {styles.h1}>UHospital - Inicie sesión</h1>
                    <div>
                        <label htmlFor='nombreUsuario' className = {styles.label}>Nombre de usuario </label>
                        <input type = "text" id = "nombreUsuario" name = "nombre" placeholder = "Ingrese su Nombre de Usuario" className = {styles.input}></input>
                    </div>
                    <div className = {styles.div}>
                        <label htmlFor='contrasenia'  className = {styles.label}> Contraseña </label>
                        <input type = "password" id = "contrasenia" name = "contrasenia" placeholder = "Ingrese su Contraseña" className = {styles.input}></input>
                    </div>
                    <div>
                        <button size ="35" type ="submit" className = {styles.button}>Iniciar Seción</button>
                    </div>
            </form>
            <div className={styles.div2}>No tines cuenta? <button className={styles.register} 
            onClick={()=>navigate('/Register')}> Registrarse</button></div>
        </div>
    )
}

export default Login;