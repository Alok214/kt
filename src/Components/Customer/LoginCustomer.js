import React, { Component } from 'react';
import NavbarMenu from '../NavbarMenu';
class CustomerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/cutomer-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });
      if (response.ok) {
        alert('Data saved to MongoDB!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    const formStyle = {
      maxWidth: '300px',
      margin: '2% auto',
      padding: '20px 40px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
    };

    return (
      <div>
      <NavbarMenu/>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <h2>Customer login</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={inputStyle}
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            style={inputStyle}
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default CustomerLogin;
