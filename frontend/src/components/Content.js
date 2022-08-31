import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';

import CardPageOne  from "./contentComponent/CardsPageOne";
import ContentProjectList from './contentComponent/ContentProjectList';
import ContentPersonList from './contentComponent/ContentPersonList';



class Content extends React.Component {
  state = {
    project: [],

  }
  componentDidMount() {
  
  }

  render() {
    return (
      <Container fluid className="content">
        
          <CardPageOne />
        
          <Row>
            <Col sm={8}>
              <ContentProjectList />
            </Col>
            <Col sm={4}>
              <ContentPersonList/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Content;