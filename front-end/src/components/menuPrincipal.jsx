import React, { Component } from "react";

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
          <form action="../createProperty/post" method="post" className="form">
            <Container>
              <label>
                Tipo de Propiedad:
                <input type="number" name="idPropType" />
              </label>
              <label>
                Dueño:
                <input type="number" name="owner" />
              </label>
              <label>
                Numero:
                <input type="text" name="number" />
              </label>
              <label>
                Direccion:
                <input type="text" name="address" />
              </label>
              <label>
                Area:
                <input type="number" name="area" />
              </label>
              <label>
                Area de construcción:
                <input type="number" name="constructionArea" />
              </label>
              <button type="primary">Registrar Propiedad</button>
            </Container>
          </form>
          {"  "}

          <form action="../createOwner/post" method="post" className="form">
            <button type="submit">Registrar Dueño</button>
          </form>

          <form
            action="../createPropertyType/post"
            method="post"
            className="form"
          >
            <button type="submit">Registrar Tipo de Propiedad</button>
          </form>
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
