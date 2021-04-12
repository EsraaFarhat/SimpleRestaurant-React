import React, { Component } from "react";

import  Joi  from "joi-browser";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  // username = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.username.current.value;
    // console.log("submit", username);
    const errors = this.validate();

    if(errors) return;

    console.log("submit");
  };

  validate = () => {
    let errors = {};

    // if (this.state.username.trim() === "")
    //   errors.username = "Username is required";
    // if (this.state.password.trim() === "")
    //   errors.password = "Password is required";

    // this.setState({ errors });

    // return Object.keys(errors).length === 0 ? null : errors;
    const state = {...this.state};
    delete state.errors;
    const res = Joi.validate(state, this.schema, {abortEarly: false});

    if(res.error === null){
        this.setState({errors : {}});
        return null;
    }

    for (const error of res.error.details){
      errors[error.path] = error.message;
    }
    this.setState({errors});
    // console.log(res);
  };

  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            {/* <input ref={this.username} type="text" className="form-control" id="username"/> */}
            <input
              name="username"
              type="text"
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
              className="form-control"
              id="username"
            />
            { this.state.errors.username && <div className="alert alert-danger">{this.state.errors.username}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
              id="password"
            />
            { this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
