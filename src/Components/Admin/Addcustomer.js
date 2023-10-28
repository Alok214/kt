import React, { Component } from 'react';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', this.state);
  }

  render() {
    const formStyle = {
      maxWidth: '300px',
      margin: '0 auto',
      padding: '20px 40px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    const inputStyle = {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px'
    };

    return (
      <div>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <h2>Add customer</h2>
          <input
            type="text"
            name="id"
            placeholder="ID"
            style={inputStyle}
            value={this.state.id}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            style={inputStyle}
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={inputStyle}
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Customer;
