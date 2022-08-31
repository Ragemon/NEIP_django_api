import React from "react";
import { Col, Row} from 'react-bootstrap';
import axios from "axios";
import TableRow from "./TableRow/TableRowProject";
import {Link} from "react-router-dom"


class ContentProjectList extends  React.Component {
  state ={
    projects: []
  }
    componentDidMount(){
        const apiUrl = "http://127.0.0.1:8000/api/projects";
        axios.get(apiUrl)
        .then(
          (response) => {
            const projects = response.data.results
            this.setState({ projects })
            console.log(projects,2)
          }
        )
        .catch(
          (error) => console.log(error)
          );
          
    }
    render() {
        return (
            <ul id="project-ul">
              <div className="list-group"> 
                <li className="list-group-item list-group-item-action">
                               
                <Row>
                      <Col className="col-9">Project info</Col>
                      <Col className="align-right col-2 offset-md-1">
                        <button type="button" className="btn btn-danger p-1">
                           <Link to="/projects"  style={{textDecoration:"none", color:"white"}}> see all </Link>
                        </button>
                    </Col>
                </Row>
              </li>
                <ul></ul>
               
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">Project name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.projects.map((project) =>  (
                    <TableRow key={ project.id } value = { project } />
                    )
                  )}                
                </tbody>
              </table>                
              </div>
              
              </ul>
        )
    }
}

export default ContentProjectList;