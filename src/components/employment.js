import React from 'react';
import Employer from './employer.js'

class Employment extends React.Component{
    constructor(props){
        super(props);

        this.state.employments = [];
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
        return <div className="employment-container container">
                {this.state.employments.array.forEach((element, index) => {
                    return <Employer details={element} index={index} locked={this.props.locked} />
                })}
        </div>
    }
}

export default Employment;