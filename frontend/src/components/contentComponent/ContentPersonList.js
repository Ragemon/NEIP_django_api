import React from "react";
import TableRowPerson from "./TableRow/TableRowPerson";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class ContentPersonList extends React.Component {
    state ={
    users: []
  }
    componentDidMount(){
        const apiUrl = "http://127.0.0.1:8000/user/";
        axios.get(apiUrl)
        .then(
          (response) => {
            const users = response.data.results
            this.setState({ users })
            console.log(users,3)
          }
        )
        .catch(
          (error) => console.log(error)
          );
          
    }
    render(){
        return(
            <div className="list-group">
                <li href="/" className="list-group-item list-group-item-action py-2" aria-current="true">
                  <Row className="align-item-center">
                    <Col className="col-md-8 px-4">
                      Beneficiaries
                    </Col>
                    <Col className="col-sm-3 p-0 offset-md-1">
                     
                        <button className="btn btn-danger p-1">
                          <Link to="/users" style={{ textDecoration:"none", color:"white" }}> see all 
                          </Link>
                        </button>
                    </Col>
                  </Row>
                  
                </li>
                {/* <ul></ul> */}
                { this.state.users.map((user) =>(
                    <TableRowPerson key = { user.id } valuePerson = { user } />
                ))}
                
                               
             
              </div>
        )
    }
}

export default ContentPersonList;