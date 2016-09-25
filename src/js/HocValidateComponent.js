import React, { Component, PropTypes } from 'react';
import isEmpty from 'lodash/isEmpty';
import { isRequired } from './validator';
import { selection } from './util';

export default function HocValidateComponent(WrapedComponent) {
  return class ValidateComponent extends Component {
    static get contextTypes() {
      return {
        setValidateChildren: PropTypes.func.isRequired,
      };
    }

    static getDefValue({ props }) {
      if (props.defaultValue) {
        return props.defaultValue;
      } else if (props.value) {
        return props.value;
      } else {
        return null;
      }
    }

    constructor(props, context) {
      super(props, context);
      this.state = {
        valid: true,
        value: ValidateComponent.getDefValue(props.children),
        messages: [],
      };
      this.required = this.props.validators.some(validator => validator === isRequired);
      this.checkValidate = this.checkValidate.bind(this);
      this.context.setValidateChildren(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return nextState.valid !== this.state.valid;
    }

    checkValidate(event) {
      const { value } = event ? event.target : this.state;

      if (!this.required && isEmpty(value)) {
        this.setState({ valid: true, value, messages });
        return true;
      }

      const messages = selection(this.props.validators, (validator) => {
        const validate = validator(value);
        return validate.result ? null : validate.message;
      });

      const valid = messages.length === 0;
      this.setState({ valid, value, messages });

      return valid;
    }

    render() {
      return (
        <WrapedComponent
          {...this.props}
          checkValidate={this.checkValidate}
        />
      );
    }
  }
}
