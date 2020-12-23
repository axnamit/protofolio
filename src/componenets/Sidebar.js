import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

export default class Sidebar extends React.Component {
  render() {
    return <SideNav></SideNav>;
  }
}
class SideNav extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <div class="cust">
          <Nav className="ml-auto">
            <a href="#home">
              <Nav.Item>
                <Link to="/">
                  <i class="fa fa-fw fa-home"></i>
                </Link>
              </Nav.Item>
            </a>
            <a href="#services">
              <Nav.Item>
                <Link to="/about">
                  <i class="fa fa-fw fa-user" />
                </Link>
              </Nav.Item>
            </a>
          </Nav>
        </div>
      </div>
    );
  }
}
