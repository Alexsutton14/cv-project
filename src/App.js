import './app.css';
import React, {Component} from 'react';
import Personal from './components/personal.js';
import Employment from './components/employment.js';

class App extends Component {
  constructor() {
    super();



    this.state = {
      personal: 
      {
        locked: false,
        name: undefined,
        email: undefined,
        phone: undefined
      },
      employment:
      {
        locked: false
      },
      education:
      {
        locked: false,
        history: undefined
      }
    };
  }

  submitPersonal = (e) => {
    e.preventDefault();
    console.log(e);
    if (this.state.personal.locked){
      this.setState({
        personal: {
          locked: false,
          name: this.state.personal.name,
          email: this.state.personal.email,
          phone: this.state.personal.phone
        }
      });
    } else {
      this.setState({
        personal:
        {
          locked: true,
          name: e.target.form[0].value,
          email: e.target.form[1].value,
          phone: e.target.form[2].value
        }
      });
    }    
  };

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Personal 
            personal={this.state.personal}
            submitPersonal={this.submitPersonal}
          />
          <Employment
            locked={this.state.employment.locked}
          />
          {/* Education */}
        </div>
      </div>
    );
  }
}

export default App;
