import './App.css';
import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import UserLayout from './components/UserLayout/UserLayout';
import ListaMedicinas from './components/ListaMedicinas/ListaMedicinas';
import SolicitudCita from './components/SolicitudCita/SolicitudCita';
import VerSoliCita from './components/VerSoliCita/VerSoliCita';
import EditarDatos from './components/EditarDatos/EditarDatos';

export const UserContext = React.createContext();
//? Video de la clase 1h 14min
function App() {
  //! Despues regresar a null el useState
  const [usuario, setUsuario] = useState(null);

  
  return (
    <UserContext.Provider value={usuario}>
      <Routes>
        //! Rutas del login
        <Route path="/" element={ <Login setUsuario = {setUsuario}/>} />
        <Route path="/login" element={ <Login setUsuario = {setUsuario}/>}/>
          
        //!Ruta Register
        <Route path='/Register' element={<Register/>}/>

        //! Ruta tipo pasiente 
        <Route path='/paciente' element={ <UserLayout/> } >
          <Route path='Vermedicamentos' element={ <ListaMedicinas/> }/>
          <Route path='SolicitudCita' element={ <SolicitudCita/> }/>
          <Route path='EditarDatos' element={<EditarDatos/>}/>
          <Route index element ={<SolicitudCita/>}/>
        </Route>

        //!Ruta Enfermera
        <Route path='/enfermera' element={ <UserLayout/> } >
          <Route index element = {<VerSoliCita/>}/>
          <Route path='VerSolicita' element = {<VerSoliCita/>}/>
        </Route>

      </Routes>
    </UserContext.Provider>
    
  );
}

export default App;
