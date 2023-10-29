import { Link } from "react-router-dom";
import styles from './PacienteNavbar.module.css'

function PacienteNavbar(){
    return(
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/paciente/SolicitudCita">Solicitar Cita</Link>
                </li>
                <li>
                    <Link to="/paciente/vermedicamentos">Ver Recetas</Link>
                </li>
                <li>
                    <Link to="/paciente/vermedicamentos">Comprar Medicamentos</Link>
                </li>
                <li>
                    <Link to="/paciente/EditarDatos">Editar Datos</Link>
                </li>
                <li>
                    <Link to="/login">Salir</Link>
                </li>
            </ul>
        </nav>
    )
}

export default PacienteNavbar;