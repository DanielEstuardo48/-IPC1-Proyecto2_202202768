import { useState, useEffect } from "react";
import styles from './ListaMedicinas.module.css'

function ListaMedicinas(){
    const [medicinas, setMedicinas] = useState([]);
    const getMedicinas = async () => {
        const response = await fetch('http://localhost:4000/paciente/stockMedicinas');
        const data = await response.json();

        setMedicinas(data.medicinas);
    }

    useEffect(() => {
        //! lo que se quiere hacer al crear el componente
        //! fetch para peticiones al backend
        getMedicinas();
    }, [])

    return(
        <div>
            <h1 className= {styles.divtitulo}>Medicinas Disponibles</h1>
            
        {  
            medicinas.map(medicinas => {
                return(
                    <div key={medicinas.idMedicina} className={styles.divnombres}> <h3>{medicinas.nombre}</h3> 
                    <p className={styles.pjustify}>{medicinas.descripcion}</p> <button className={styles.button}>{medicinas.precio}</button></div>
                    
                )
            })
            
        }
        </div>
    )
}

export default ListaMedicinas;