import "bootstrap/dist/css/bootstrap.min.css"


import NavOfNav from "./components/NavOfNav";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import NavBarMenu from "./components/NavBarMenu";
import ProjectList from "./components/ProjectList";
import PersonList from "./components/PersonList";
import ProjectDetail from "./components/detailPages/ProjectDetail";
import MapViewSideBar from "./components/MapViewSideBar";
import { Fragment } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <Fragment>
        <NavOfNav/>   
        <NavBarMenu/>     
        <Container fluid id="content">
        <Row>
          <Col lg={3}>
            <Row>
              <SideBar />
            </Row>   
            <Row>            
              <MapViewSideBar />                
            </Row>           
          </Col>
          <Switch>
            <Route exact path="/">
              <Col lg={9}>
                
                <Content />
              </Col>
            </Route>
            <Route exact path="/projects">
              <Col lg={9}>
                <ProjectList />
              </Col>
            </Route>
            <Route exact path="/users">
              <Col lg={9}>
                <PersonList />
              </Col>
            </Route>
            <Route exact path="/project/:id">
              <Col lg={9}>
                <ProjectDetail />
              </Col>
            </Route>
          </Switch>
        </Row>
      </Container>
       
    </Fragment>
      
    </Router>

  );
}

export default App;
