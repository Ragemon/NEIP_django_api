import React from "react";
import {Row, Col} from "react-bootstrap"
import { FaPhone} from "react-icons/fa";
import { Link } from "react-router-dom";



class TableRowPerson extends React.Component {
    render(){
        return(
             <Link to={`/user/${ this.props.valuePerson.id}`} className="text-decoration-none text-dark">
            <li className="list-group-item list-group-item">

                
                  <div className="row align-items-center">
                    <div className="col">
                        <Row className ="align-items-center lign-items-start">
                            {/* image column */}
                            <Col className="4">
                                <img src={`${ this.props.valuePerson.profile_pic }`} alt="" className="card-img-top p-2 rounded-circle"/>
                            </Col>

                            {/* name and title of person column */}
                            <Col className="col-6">

                                <Row className="lign-items-start small list-inline">
                                    { this.props.valuePerson.first_name } { this.props.valuePerson.last_name }
                                </Row>
                                <Row className="lign-items-start">
                                    { this.props.valuePerson.position }
                                </Row>
                            </Col>
                            <Col className="col-2">
                            <div className="col col-2 " data-toggle="tooltip" data-placement="top" title={this.props.valuePerson.primary_phone }>
                                <FaPhone />
                            </div>  
                            </Col>
                        </Row>
                    </div>
                     
                  </div>
                
            </li>
            </Link>                   
             
              
        )
    }
}

export default TableRowPerson;