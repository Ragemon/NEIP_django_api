import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import numbro from "numbro";
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types";


 



class ProjectList extends  React.Component{
 state ={
    projects: []
  };
   static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
    componentDidMount(){
        const apiUrl = "http://127.0.0.1:8000/api/projects";
        axios.get(apiUrl)
        .then(
          (response) => {
            const projects = response.data.results
            this.setState({ projects })
            console.log(projects ,2)
          }
        )
        .catch(
          (error) => console.log(error)
          );
          
    }
    render() {
      const { history } = this.props;
    
      
      const handleRowClck = (pathStart="",row,pathEnd="") => {
        history.push(`/${pathStart}${row.id}${pathEnd}`)
        // console.log(match,7)
      };
        return (
            <ul id="project-ul">
                <li className="list-group-item list-group-item">
              <div className="list-group">                  
                <Row>
                    <Col className="col-10">Project info</Col>
                    <Col className="align-right col-1 offset-md-1">
                        <button type="button" className="btn btn-danger p-1">
                            
                        </button>
                    </Col>
                </Row>
                <ul></ul>
               
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col">Project name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Region</th>
                    <th scope="col" className="text-end">Funding received</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.projects.map((project) =>  (
                    // dynamic url path
                    <tr className="clickable " key={project.id} onClick=
                      {
                        () => { handleRowClck("project/",project,"") }
                      }
                    >
                        <th scope="row" >{ project.project_name }</th>
                        <td colSpan="2">{ project.category }</td>
                        <td className="text-capitalize">{ (project.status).toLowerCase() }</td>
                        <td className="text-capitalize">{ (project.region).toLowerCase() }</td>
                        <td style= {{textAlign: "right"}} className="">{ (numbro(project.loan_amount).formatCurrency({mantissa:2,  thousandSeparated: true})).toString()}</td>
                    </tr>
                    
                    )
                  )}                
                </tbody>
              </table>                
              </div>
              </li>
              </ul>
        )
    }
}

export default withRouter(ProjectList);