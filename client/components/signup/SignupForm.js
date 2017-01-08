import React from 'react';
import FormGroup from './FormGroup';
import axios from 'axios';

export default class SignupForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      form: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange (e) {

    const newForm = this.state.form;
    newForm[e.target.name] = e.target.value;

    this.setState({
      form: newForm
    });
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state.form);
  }

  render () {
    const { username, email, password, passwordConfirmation } = this.state.form;
    const { handleChange, onSubmit } = this;
    let id = 0;

    return (
      <form onSubmit={onSubmit} >
        <h1>Join our community!</h1>

        {
          Object.keys(this.state.form).map(formSection => {
            return (
              <FormGroup 
                key={id++}
                labelName={formSection} 
                value={this.state.form[formSection]} 
                onChange={handleChange}
              />
            );
          })
        }

        <div className="form-group">
          <button 
            className="btn btn-primary btn-lg"
            type="submit">
              Submit
          </button>
        </div>
      </form>
    );
  }
}

const { PropTypes } = React;

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};