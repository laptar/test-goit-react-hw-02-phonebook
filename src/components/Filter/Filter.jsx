import React, { Component } from 'react';

export class Filter extends Component {
  state = {
    serchName: '',
  };
  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.onFilter(e.target.value);
  };
  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="serchName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.serchName}
          onChange={this.handleChangeInput}
        />
      </label>
    );
  }
}
