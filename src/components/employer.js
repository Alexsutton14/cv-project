import React from 'react';

class Employer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            startDate: this.props.details.startDate,
            endDate: this.props.details.endDate,
            current: this.props.details.current,
            employerName: this.props.details.employerName,
            jobTitle: this.props.details.jobTitle,
            jobDescription: this.props.details.jobDescription
        }
    }

    render(){
        if (this.props.locked){
            let endDateString = "Present"
            if (!this.state.current){
                if (this.state.endDate instanceof Date){
                    endDateString = new Intl.DateTimeFormat('en-GB', {month: 'long', year: 'numeric'}).format(this.state.endDate);
                } else {
                    endDateString = "";
                }
            }
            return <div className="employer">
                <h3>{this.state.jobTitle} - {this.state.employerName}</h3>
                <span>{new Intl.DateTimeFormat('en-GB', {month: 'long', year: 'numeric'}).format(this.state.startDate)} - {endDateString}</span>
            </div>
        } else {
            return <form key={this.props.index}>
                <span>{this.state.jobTitle} - {this.state.employerName}</span>
            </form>
        }
    }
}

export default Employer;