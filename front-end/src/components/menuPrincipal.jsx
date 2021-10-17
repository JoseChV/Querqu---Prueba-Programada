import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class MenuPrincipal extends React.Component {
  state = {
    imageUrl:
      "http://quercuwebsite.azurewebsites.net/wp-content/uploads/2019/09/logo-quercu.png",
  };

  handleButton = () => {};

  render() {
    return (
      <div>
        <Container fluid="md">
          <Button onClick={this.handleButton} variant="primary">
            Propiedades
          </Button>
          {"  "}
          <Button onClick={this.handleButton} variant="succes">
            Dueños
          </Button>
          {"  "}
          <Button onClick={this.handleButton} variant="warning">
            Tipos de Propiedades
          </Button>
        </Container>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default MenuPrincipal;
