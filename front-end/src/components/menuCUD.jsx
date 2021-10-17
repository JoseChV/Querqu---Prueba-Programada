import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class MenuCUD extends React.Component {
  state = {};

  handleButton = () => {};

  render() {
    return (
      <div>
        <Container fluid="md">
          <Button onClick={this.handleButton} variant="primary">
            Registrar
          </Button>
          {"  "}
          <Button onClick={this.handleButton} variant="warning">
            Editar
          </Button>
          {"  "}
          <Button onClick={this.handleButton} variant="danger">
            Eliminar
          </Button>
        </Container>
      </div>
    );
  }
}

export default MenuCUD;
