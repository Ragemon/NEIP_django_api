import React from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import axios from "axios";
// import {Row, Col, Container} from "react-bootstrap"
// import { BsGear, BsBarChart, BsCreditCard, BsPersonLinesFill } from "react-icons/bs"
// import numbro from "numbro";

class DetailPageProjectCard extends React.Component {
    state = {
        project: []
    };
   static propTypes = {
       match: PropTypes.object.isRequired,
  
   }

    componentDidMount(){
        const { match } = this.props;
        const apiUrl = `http://127.0.0.1:8000/api/projects/${match.params.id}`;
        axios.get(apiUrl)
        .then(
          (response) => {
            const project = response.data
            this.setState({ project })
            console.log(response.data, match, " detail")
          }
        )
        .catch(
          (error) => console.log(error)
          );

          
    }

    render(){
       
        
        return(
            <div>
                <p>
                    { this.state.project.project_name }
                </p>
                {/* { this.state.project.reports.map() } */}
            </div>
            
        );
    }
}

export default withRouter(DetailPageProjectCard);