import React from 'react';

class TextField extends React.Component{

    render(){
        return <form class="text-field">
            <label for="field">{this.props.label}:</label>
            <span id="field">{this.props.value}</span>
        </form>
    }
}

export default TextField;