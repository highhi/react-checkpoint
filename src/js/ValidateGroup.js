import React, { Component, PropTypes } from 'react';
import ValidateField from './ValidateField';
import isEqual from 'lodash/isEqual';
import uniqueId from 'lodash/uniqueId';

export default class ValidateGroup extends Component {
  static get childContextTypes() {
    return {
      setValidateChildren: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = { valid: true };
    this.validateChildren = [];
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getChildContext() {
    return {
      setValidateChildren: this.setValidateChildren.bind(this),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.valid !== this.state.valid;
  }

  allValidate() {
    const results = this.validateChildren.map(child => {
      return child.checkValidate();
    });

    return results.every(result => result);
  }

  setValidateChildren(child) {
    this.validateChildren.push(child);
  }

  handleSubmit(event) {
    event.preventDefault();
    const valid = this.allValidate();

    if (valid) {
      this.props.onSubmit(event);
    }

    this.setState({ valid });
  }

  render() {

    return <form onSubmit={this.handleSubmit}>{ this.props.children }</form>;
  }
}
