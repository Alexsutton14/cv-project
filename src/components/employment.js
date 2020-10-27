import React from 'react';
import Employer from './employer.js'

class Employment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            employments: []
        }
        this.AddEmployer("November 2019", undefined, true, "Business Inc.", "Vice President");
        this.AddEmployer("August 2018", "September 2019", false, "Money Corp.", "Assistant to the Vice President");

        this.AddBlankEmployer = this.AddBlankEmployer.bind(this);
    }

    AddEmployer = (startDate, endDate, current, employerName, jobTitle, jobDescription = undefined) => {
        if (startDate !== undefined){
            startDate = new Date(Date.parse(startDate));
        }
        if (endDate !== undefined){
            endDate = new Date(Date.parse(endDate));
        }

        let newArray = this.state.employments;
        newArray.push(this.CreateEmployment(startDate, endDate, current, employerName, jobTitle, jobDescription));

        this.setState({
            employments: newArray
        })
    }

    UpdateField = (e) => {
        console.log(e);
        
    }

    AddBlankEmployer = () => {
        this.AddEmployer(undefined, undefined, false, undefined, undefined);
    }

    CreateEmployment(startDate, endDate, current, employerName, jobTitle, jobDescription){
        let output = {
            startDate: startDate,
            endDate: endDate,
            current: current,
            employerName: employerName,
            jobTitle: jobTitle,
            jobDescription: jobDescription
        }
        return output;
    }

    render(){
        let addButton;
        if (this.state.employments.length < 1 && !this.props.locked){
            addButton = <button onClick={this.AddBlankEmployer}>Add an employer</button>
        } else {
            addButton = <button onClick={this.AddBlankEmployer}>Add another employer</button>
        }

        let lockButtonString;
        if (this.props.locked){
            lockButtonString = "Edit";
        } else {
            lockButtonString = "Save";
        }

        return (
        <div className="employment-container container">
            {this.state.employments.map((element, index) => {
                return <Employer 
                    details={element}
                    key={index}
                    index={index}
                    locked={this.props.locked} 
                    changeEvent={this.UpdateField}
                />;
            })}
            {addButton}
        <button onClick={this.props.submit}>{lockButtonString}</button>
        </div>
        );
    }
}

export default Employment;