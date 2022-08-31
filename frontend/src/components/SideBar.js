import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

 const headerColor = {
    backgroundColor: `#dc3545`,
  }
class SideBar extends React.Component {
  state = {
        project_no: "",
        beneficiary_no: "",
        loan_sum: "",
    }
    componentDidMount() {
        const projectListApiUrl = "http://127.0.0.1:8000/api/projects/1";
        axios.get(projectListApiUrl)
        .then(
            (response) => {
                this.setState({project_no: response.data.total_projects.project_no, beneficiary_no: response.data.total_projects.beneficiary_no, loan_sum: response.data.total_projects.loan_sum})})
        .catch(
            (error) => (console.log(error))
        )
    }

    render() {
    return (
          <Container fluid className="sidebar mb-4">
              <ul className="list-group">
                
                <li className="list-group-item justify-content-between text-white align-items-center" style={headerColor}>
                  Dashboard                
                </li>
                
               <Link to="/projects" style={{ textDecoration:"none", color:"black" }}>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Projects                    
                    <span className="badge rounded-pill" style={{ backgroundColor: "blue", color: "white" }}>
                      {this.state.project_no}
                    </span>
                  </li>
                </Link>

                <Link to="/users" style={{ textDecoration:"none", color:"black" }}> 
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Beneficiaries                    
                    <span className="badge rounded-pill" style={{ backgroundColor: "blue", color: "white" }}>
                      {this.state.beneficiary_no}
                    </span>
                  </li>
                </Link>                
                
                <Link to="/users" style={{ textDecoration:"none", color:"black" }}> 
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Account
                  </li>
                </Link>
                  
              </ul>
          </Container>
    );
};
}
export default  SideBar;