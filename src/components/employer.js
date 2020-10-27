import React from 'react';

class Employer extends React.Component{
    render(){
        if (this.props.locked){
            let endDateString = "Present"
            if (!this.props.details.current){
                endDateString = this.props.details.endDate.toLocaleDateString();
            }
            return <div className="employer">
                <h3>{this.props.details.jobTitle} - {this.props.details.employerName}</h3>
                <span>{this.props.details.startDate.toLocaleDateString()} - {endDateString}</span>
            </div>
        } else {
            return <form key={this.props.index}>
                <span>{this.props.details.jobTitle} - {this.props.details.employerName}</span>
            </form>
        }
    }
}

export default Employer;