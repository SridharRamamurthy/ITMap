import React from 'react';

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      error: ''
    }
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value })
  }

  onSubmit = (e) => {
    let { history } = this.props

    let olddata = localStorage.getItem('formdata')
    let oldArr = JSON.parse(olddata)
    let error = false
    oldArr.map(arr => {
      if (this.state.email.length > 0 && this.state.password.length > 0) {
        if (arr.email == this.state.email && (arr.password == this.state.password)) {

          history.push({ pathname: "/welcome", user: this.state.email });
          error = false
        } else {
          error = true
        }
      }
    }
    )
    if (error === true) {
      this.setState({ error: 'Please check your email or password' })
    }
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }


  render() {

    return (

      <div className="p-4 ">
       
        <form onSubmit={this.onSubmit}>
          <p className="error">
            {this.state.error}
          </p>
          <div className="form-group">

            <input type="radio" checked id="customer" name="customer" value="Customer" />
            <label className="me-4 p-2">Customer</label>
            <input type="radio" id="applicant" name="customer" value="Applicant" />
            <label className="me-4 p-2">Applicant</label>

          </div>

          <div className="form-group mt-2">
            <label>EMail</label>
            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
          </div>
          <div className="form-group mt-2">
            <label>Password</label>
            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block m-4" onClick={this.onSubmit}>Signin</button>
          <button type="submit" className="btn btn-primary btn-block m-4" onClick={this.onRegister}>Cancel</button>
        </form>
      </div>

    )
  }
}

export default Login
