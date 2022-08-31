import React from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
const caseStyle = {
    textTransform: "CAPITALIZE",
        
}

class TableRowProject extends React.Component {
   
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    render(){
        const { history } = this.props;
        const handleRowClick = (pathStart="", row, pathEnd="") => {
            history.push(`/${ pathStart }${ row.id }${ pathEnd }`)
        }
        return(
            <tr className="clickable "
                onClick=
                {
                    () => { handleRowClick("project/",this.props.value, "") }
                }
                >
                <th scope="row" >{ this.props.value.project_name }</th>
                <td colSpan="2">{ this.props.value.category }</td>
                <td style= {caseStyle}>{ (this.props.value.status).toLowerCase() }</td>
            </tr>
        )
    }
}
export default withRouter(TableRowProject);