import React from 'react';
import Employer from './employer.js'

class Employment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            employments: []
        }
        this.AddEmployer(new Date(2019, 11), undefined, true, "ITV Studios", "Camera Operator");
        this.AddEmployer(new Date(2018, 11), new Date(2019, 9), false, "ITV Studios", "Camera Assistant");
    }

    AddEmployer = function(startDate, endDate, current, employerName, jobTitle, jobDescription = undefined){
        this.setState({
            employments: this.state.employments.push(this.CreateEmployment(startDate, endDate, current, employerName, jobTitle, jobDescription))
        })
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
        return (
        <div className="employment-container container">
            {this.state.employments.forEach((element) => {
                return <Employer details={element} locked={true} />;
            })}
        </div>
        );
    }
}

export default Employment;