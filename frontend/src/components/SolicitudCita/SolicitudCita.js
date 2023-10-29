import { useEffect,useState } from 'react';
import styles from './SolicitudCita.module.css'
    //!Editar datos video del 19 1:12:24
    //! Value es para definir una actualizacion de datos junto con onchange ( lo que se escbriba se guarda en fechacita, horacita...)
    //! con esto se genera el valor de los datos pedidos

function SolicitudCita(){
    const [citas, setCitas] = useState ([]);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [motivo, setMotivo] = useState ("");

    //!Agregar cita
    const handleCargarCitas = async e => {
        e.preventDefault();

        const URL = 'http://localhost:4000/enfermera/cargarCita';
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fecha,
                hora,
                motivo
            })
        })
        const data = await response.json();

        if (response.status === 400){
            return alert(data.error)
        }

        setCitas(data.citas);
    }

    return(
        <form onSubmit={handleCargarCitas} className={styles.form}>
            <div className={styles.divtitulo}>Solicitar una Cita</div>
            <div>
                <label htmlFor='fecha' className={styles.label}> Fecha </label>
                <input type='text' id='fecha' name='fecha' placeholder='Ingrese la fecha para su cita' 
                className={styles.input} autoComplete='off' value={fecha} onChange={e =>  setFecha (e.target.value) }></input>
            </div>
            <div>
                <label htmlFor='hora' className={styles.label}> Hora </label>
                <input type='text' id='hora' name='hora' placeholder='Ingrese la hora para su cita' 
                className={styles.input} autoComplete='off' value={hora} onChange={e =>  setHora (e.target.value) }></input>
            </div>
            <div>
                <label htmlFor='motivo' className={styles.label}> Motivo </label>
                <textarea type='text' id='motivo' name='motivo' placeholder='Ingrese el motivo de su cita' 
                className={styles.inputmotivo} rows ='5' colums='40' autoComplete='off' 
                value={motivo} onChange={e =>  setMotivo (e.target.value) }></textarea>
            </div>
            <div>
                <button  size ="35" type ="submit" className={styles.button}>Solicitar</button>
            </div>
        </form>
        
    )
}

export default SolicitudCita;