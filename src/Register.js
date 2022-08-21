import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: ''
    }
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  onChangeSurName = (e) => {
    this.setState({ surname: e.target.value })
  }


  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value })
  }

  onChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  onSubmit = (e) => {
    let ob = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    }
    let olddata = localStorage.getItem('formdata');
    if (olddata == null) {
      olddata = []
      olddata.push(ob)
      localStorage.setItem('formdata', JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata)
      oldArr.push(ob)
      localStorage.setItem("formdata", JSON.stringify(oldArr))
      console.log(oldArr, 'hhg')
    }
  }

  render() {
    return (
      <div className="p-1 px-4 ">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <input type="radio" checked id="customer" name="customer" value="Customer" />
            <label className="me-4 p-2">Customer</label>
            <input type="radio" id="applicant" name="customer" value="Applicant" />
            <label className="me-4 p-2">Applicant</label>

          </div>

          <div className="form-group mt-2">
            <label>Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required />
          </div>
          <div className="form-group mt-2">
            <label>Sur Name</label>
            <input type="text" className="form-control" value={this.state.surname} onChange={this.onChangeSurName} required />
          </div>
          <div className="form-group mt-2">
            <label>Phone</label>
            <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} required />
          </div>
          <div className="form-group mt-2">
            <label>Email</label>
            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required />
          </div>

          <div className="form-group mt-2">
            <label>Password</label>
            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} required />
          </div>
                    <button type="submit" className="btn btn-primary btn-block m-2" onClick={this.props.onRegister}>Register</button>
                    <button type="submit" className="btn btn-primary btn-block m-2" onClick={this.props.onRegister}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default Register;