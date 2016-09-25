import React, { Component, PropTypes } from 'react';
import isEmpty from 'lodash/isEmpty';
import { isRequired } from './validator';
import { selection } from './util';
import HocValidateComponent from './HocValidateComponent';

// function getDefValue({props}) {
//   if (props.defaultValue) {
//     return props.defaultValue;
//   } else if (props.value) {
//     return props.value;
//   } else {
//     return null;
//   }
// }

// export default class ValidateField extends Component {
//   static get contextTypes() {
//     return {
//       setValidateChildren: PropTypes.func.isRequired,
//     };
//   }
//
//   constructor(props, context) {
//     super(props, context);
//     this.required = this.props.validators.some(validator => validator === isRequired);
//     this.state = {
//       valid: true,
//       value: getDefValue(props.children),
//       messages: [],
//     };
//     this.check = this.check.bind(this);
//     this.context.setValidateChildren(this);
//     console.log(this.state.value);
//   }
//
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.valid !== this.state.valid;
//   }
//
//   check(event) {
//     const { value } = event ? event.target : this.state;
//
//     if (!this.required && isEmpty(value)) {
//       this.setState({ valid: true, value, messages });
//       return true;
//     }
//
//     const messages = selection(this.props.validators, (validator) => {
//       const validate = validator(value);
//       return validate.result ? null : validate.message;
//     });
//
//     const valid = messages.length === 0;
//     this.setState({ valid, value, messages });
//
//     return valid;
//   }
//
//   render() {
//     const style = this.state.valid ? { border: '1px solid #ccc' } : { border: '1px solid #ff0000' };
//     return React.cloneElement(this.props.children, { ref: 'trg', onBlur: this.check, style })
//   }
// }

const ValidateField = props => {
  return React.cloneElement(props.children, { onBlur: props.checkValidate })
}

export default HocValidateComponent(ValidateField);
