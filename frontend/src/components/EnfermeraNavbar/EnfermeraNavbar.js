import { Link } from "react-router-dom";
import styles from './EnfermeraNavbar.module.css'

function EnfermeraNavbar(){
    return(
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/enfermera/VerSolicita">Solicitudes de Citas</Link>
                </li>
                <li>
                    <Link to="/login">Salir</Link>
                </li>
            </ul>
        </nav>
    )
}

export default EnfermeraNavbar;