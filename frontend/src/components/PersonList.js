import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";



class PersonList extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    const apiUrl = "http://127.0.0.1:8000/user/";
    axios.get(apiUrl)
      .then(
        (response) => {
          const users = response.data.results
          this.setState({ users })
          console.log(users, 365487)
        }
      )
      .catch(
        (error) => console.log(error)
      );

  }
  render() {
    return (
      <div className="list-group">
        <li href="/" className="list-group-item list-group-item-action py-2" aria-current="true">
          <Row className="align-item-center">
            <Col className="col-md-11 px-4">
              Beneficiaries
            </Col>
            <Col className="col-md-1 text-center p-1">

              <button className="btn btn-danger p-1"></button>

            </Col>
          </Row>
        </li>
        {/* <ul></ul> */}

        <ul id="person-ul">
          {this.state.users.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`} className="text-decoration-none text dark">

              <li className="list-group-item list-group-item p-0 clickable" id="person-li">

                <div className="row m-0 align-items-center">
                  <div className="col">
                    <Row className="align-items-center" >
                      {/* image column */}
                      <Col className="col-md-2 m-0 px-3 py-2" >
                        <img src={`${user.profile_pic}`} alt="" height="50px" id="person-img" className="rounded-circle" />
                      </Col>

                      {/* name and title of person column */}
                      <Col className="col-md-9">

                        <Row className="lign-items-start small list-inline">
                          {user.first_name} {user.last_name}
                        </Row>
                        <Row className="lign-items-start">
                          {user.positon}
                        </Row>
                      </Col>
                      <Col className="col-md-1">
                        <div className="col col-2 " data-toggle="tooltip" data-placement="top" title={user.primary_phone}>
                          <FaPhone />
                        </div>
                      </Col>
                    </Row>
                  </div>

                </div>


              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

export default PersonList;