import axios from "axios";
import React from "react";
import {Row, Col, Container} from "react-bootstrap"
import { BsGear, BsBarChart, BsCreditCard, BsPersonLinesFill } from "react-icons/bs"
import numbro from "numbro";


class CardPageOne extends React.Component {
    

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
    return(
        
        <Row className="mb-3 text-center">
        {/* first content card column */}
            <Col sm={3}>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <Col sm={8} id="card-top">
                                <Container>
                                    <div className="card-text"> 
                                        <Row className="h4">
                                            {
                                            this.state.beneficiary_no ? this.state.beneficiary_no : "0+"
                                            }
                                        </Row> 
                                        <Row>Beneficiaries</Row> 
                                    </div>
                                </Container>
                            </Col> 
                            <Col sm={4}>
                                <p className="card-title"> 
                                    <BsPersonLinesFill size={40}/> 
                                </p>
                            </Col> 
                        </Row>
                    </div>
                </div>
            </Col>
    {/* second content card column */}
            <Col sm={3}>
                <div className="card pl-0">
                    <div className="card-body">
                        <Row>
                            <Col sm={8}  id="card-top">
                                <Container fluid>
                                    <div className="card-text"> 
                                        <Row className="h4">
                                            {                                        
                                                this.state.project_no ? this.state.project_no : "0+"
                                            }
                                        </Row> 
                                        <Row>Projects</Row> 
                                    </div>
                                </Container>
                            </Col> 
                            <Col sm={4}>
                                <p className="card-title"> 
                                    <BsGear size={40}/> 
                                </p>
                            </Col> 
                        </Row>
                    </div>
                </div>
            </Col>
                {/* third content card column */}
            <Col sm={3}>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <Col className="container container-fluid" sm={8} id="card-top">
                                <Container>
                                    <div className="card-text"> 
                                        <Row className="h4">
                                            {
                                                this.state.loan_sum.loan_amount__sum ? (numbro(this.state.loan_sum.loan_amount__sum).formatCurrency({mantissa:2, average:true,})).toString()  : "0+"
                                            }
                                        </Row> 
                                        <Row>
                                            Loaned
                                        </Row> 
                                    </div>
                                </Container>
                            </Col> 
                            <Col sm={4}>
                                <p className="card-title"> 
                                    <BsCreditCard size={40}/> 
                                </p>
                            </Col> 
                        </Row>
                    </div>
                </div>
            </Col>
            {/* fourth content card column */}
            <Col sm={3}>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <Col sm={8} id="card-top">
                                <Container>
                                    <div className="card-text"> 
                                        <Row className="h4">
                                            {numbro(13100000).formatCurrency({mantissa:2, average:true,})}
                                        </Row> 
                                        <Row>
                                            Income
                                        </Row> 
                                    </div>
                                </Container>
                            </Col> 
                            <Col sm={4}>
                                <p className="card-title"> 
                                    <BsBarChart size={40}/> 
                                </p>
                            </Col> 
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
         
            
        )}
}

export default CardPageOne;