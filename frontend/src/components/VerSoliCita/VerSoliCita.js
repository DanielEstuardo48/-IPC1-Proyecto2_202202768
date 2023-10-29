import { useEffect,useState } from "react";
import styles from './VerSoliCita.module.css'

function VerSoliCita(){
    const [citas, setCitas] = useState ([]);
    const getCitas = async() =>{
        const response = await fetch('http://localhost:4000/enfermera/stockCitas');
        const data = await response.json();
        setCitas(data.citas)
    }

    useEffect (()=> {
        getCitas();
    }, [])

    const eliminarCita = async (idcita) => {
        const URL = `http://localhost:4000/enfermera/eliminarCita/${idcita}`;
        const response = await fetch(URL, {
            method: 'DELETE'
        })

        const data = await response.json();
        setCitas(data.citas);
    }

    return(
        <div className={styles.contenedorRaiz}>
            <table className= {styles.tableCitas}>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Motivo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            citas.map(cita => (
                                <tr key={cita.idcita}>
                                    <td>{cita.fecha}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.motivo}</td>
                                    <td>
                                        <button className={`${styles.boton} ${styles.modificar}`}>Aceptar</button>
                                        <button className={`${styles.boton} ${styles.eliminar}`}
                                        onClick={() => eliminarCita(cita.idcita)}>Rechazar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default VerSoliCita;