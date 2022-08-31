import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import DetailPageProjectCard from "./detailPageComponents/DetailPageProjectCard";


class ProjectDetail extends React.Component {
    render() {
        return(
            
                <Container fluid className="content">
        
                    <DetailPageProjectCard />
                    
                    <Row>
                        <Col sm={8}>
                        
                        </Col>
                        <Col sm={4}>
                        
                        </Col>
                    </Row>
                </Container>
            

        )
    }
}


export default ProjectDetail;