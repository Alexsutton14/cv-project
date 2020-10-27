import React from 'react';

class Employer extends React.Component{
    render(){
        if (this.props.locked){
            return <div className="employer">
                <h3>{this.props.details.jobTitle} - {this.props.details.employerName}</h3>
            </div>
        }
    }
}

export default Employer;