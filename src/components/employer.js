import React from 'react';

class Employer extends React.Component{
    constructor(props){
        super(props)

        console.log("Employer index:");
        console.log(props.index);

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
            return <form>
                <h3>Employment {this.props.index + 1}</h3>
                <div class="form-element">
                    <label htmlFor="job-title">Job Title</label>
                    <input id="job-title" type="text" value={this.state.jobTitle} onChange={this.props.changeEvent}></input>
                </div>
                <div class="form-element">
                    <label htmlFor="employer-name">Employer</label>
                    <input id="employer-name" type="text" value={this.state.employerName}></input>
                </div>
                <div class="form-element">
                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" value={this.state.startDate}></input>
                </div>
            </form>
        }
    }
}

export default Employer;