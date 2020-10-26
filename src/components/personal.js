import React from 'react';

class Personal extends React.Component{

    render(){
        if (this.props.personal.locked){
            return <div className="personal-container">
            <h2>Personal Details</h2>
            <form className="personal-details">
                <div className="form-element">
                    <label htmlFor="name">Name: </label>
                    <span>{this.props.personal.name}</span>
                </div>  
                <div className="form-element">
                    <label htmlFor="email">Email: </label>
                    <span>{this.props.personal.email}</span>
                </div>
                <div className="form-element">
                    <label htmlFor="phone">Phone: </label>
                    <span>{this.props.personal.phone}</span>
                </div>                
                <button type="submit" onClick={this.props.submitPersonal}>Edit</button>
            </form>
        </div>
        } else {
            return <div className="personal-container">
                <h2>Personal Details</h2>
                <form className="personal-details">
                    <div className="form-element">
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" defaultValue={this.props.personal.name}></input>
                    </div>  
                    <div className="form-element">
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="text" defaultValue={this.props.personal.email}></input>
                    </div>
                    <div className="form-element">
                        <label htmlFor="phone">Phone: </label>
                        <input id="phone" type="text" defaultValue={this.props.personal.phone}></input>
                    </div>                
                    <button type="submit" onClick={this.props.submitPersonal}>Save</button>
                </form>
            </div>
        }
    }
}

export default Personal;