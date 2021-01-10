import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="accueil"
          active={activeItem === "accueil"}
          onClick={this.handleItemClick}
        >
          <Link to="/">Accueil</Link>
        </Menu.Item>

        <Menu.Item
          name="ratp"
          active={activeItem === "ratp"}
          onClick={this.handleItemClick}
        >
          <Link to="/ratp">RATP</Link>
        </Menu.Item>

        <Menu.Item
          name="ratp"
          active={activeItem === "iq_air"}
          onClick={this.handleItemClick}
        >
          <Link to="/iq-air">IqAir</Link>
        </Menu.Item>

        <Menu.Item
          name="exemple"
          active={activeItem === "exemple"}
          onClick={this.handleItemClick}
        >
          <Link to="/exemple">Exemple</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
