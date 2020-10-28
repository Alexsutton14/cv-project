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

    handleUpdate = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        console.log(value)

        if (name === "startDate" || name === "endDate"){
            value = new Date.parse(value);
        }
    
        this.setState({
            [name]: value
          }
        );
    }

    DateForInput(date){
        if (date === undefined){
            return "1970-01-01";
        }
        let output = "";
        output = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDay();
        console.log(output);
        return output;
    }

    render(){
        if (this.props.locked){
            let endDateString;
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
            
            let startDateString = this.DateForInput(this.state.startDate);
            let endDateString = this.DateForInput(this.state.endDate);

            return <form>
                <h3>Employment {this.props.index + 1}</h3>
                <div className="form-element">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input name="jobTitle" type="text" value={this.state.jobTitle} onChange={this.handleUpdate}></input>
                </div>
                <div className="form-element">
                    <label htmlFor="employerName">Employer</label>
                    <input name="employerName" type="text" value={this.state.employerName} onChange={this.handleUpdate}></input>
                </div>
                <div className="form-element">
                    <label htmlFor="start-date">Start Date</label>
                    <input name="startDate" type="date" value={startDateString} onChange={this.handleUpdate}></input>
                </div>
            </form>
        }
    }
}

export default Employer;