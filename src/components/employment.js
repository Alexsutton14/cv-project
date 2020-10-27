import React from 'react';
import Employer from './employer.js'

class Employment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            employments: []
        }
        this.AddEmployer("November 2019", undefined, true, "ITV Studios", "Camera Operator");
        this.AddEmployer("August 2018", "September 2019", false, "ITV Studios", "Camera Assistant");

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
        console.log(this.state);

        let addButton;

        if (this.state.employments.length < 1 && !this.props.locked){
            addButton = <button onClick={this.AddBlankEmployer}>Add an employer</button>
        } else {
            addButton = <button onClick={this.AddBlankEmployer}>Add another employer</button>
        }

        return (
        <div className="employment-container container">
            {this.state.employments.map((element, index) => {
                return <Employer details={element} key={index} locked={true} />;
            })}
            {addButton}
        </div>
        );
    }
}

export default Employment;