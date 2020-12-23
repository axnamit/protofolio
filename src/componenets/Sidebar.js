import React from "react";
import styled from "styled-components";
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
                <Nav.Link href="/">
                  <i class="fa fa-fw fa-home"></i>
                </Nav.Link>
              </Nav.Item>
            </a>
            <a href="#services">
              <Nav.Item>
                <Nav.Link href="/about">
                  <i class="fa fa-fw fa-user" />
                </Nav.Link>
              </Nav.Item>
            </a>
          </Nav>
        </div>
      </div>
    );
  }
}
