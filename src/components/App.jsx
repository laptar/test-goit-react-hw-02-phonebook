import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  render() {
    return (
      <div>
        <ContactForm />
        <Filter />
      </div>
    );
  }
}
