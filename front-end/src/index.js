import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import MenuPrincipal from './components/menuPrincipal';
import Container from "react-bootstrap/Container";

ReactDOM.render(
  <React.StrictMode>
    <Container fluid="md">
    <img src={"http://quercuwebsite.azurewebsites.net/wp-content/uploads/2019/09/logo-quercu.png"} alt="" />
    <h1>Bienvenidos!</h1>
    <h5>Seleccione el menu al que desea accesar</h5>
    <MenuPrincipal />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
