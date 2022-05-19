import React, { Component } from "react";

class Form extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        name: "",
        phoneNumber: "",
        email: "",
        gender: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex != this.props.currentIndex ||
      prevProps.list != this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          name="name"
          placeholder="Name"
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <br />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={this.handleInputChange}
          value={this.state.phoneNumber}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <br />
        <input
          name="gender"
          placeholder="Gender"
          onChange={this.handleInputChange}
          value={this.state.gender}
        />

        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
