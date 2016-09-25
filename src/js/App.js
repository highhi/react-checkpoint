import React, { Component } from 'react';
import ValidateGroup from './ValidateGroup';
import ValidateField from './ValidateField';
import ValidateCheckBox from './ValidateCheckBox';
import { isRequired, isEmail } from './validator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <ValidateGroup onSubmit={this.handleOnSubmit}>
        <div>
          名前<br />
          <ValidateField validators={[isRequired]}>
            <input type="text" name="input_text" />
          </ValidateField>
        </div>
        <div>
          メール<br />
          <ValidateField validators={[isEmail]}>
            <input type="text" name="input_email" />
          </ValidateField>
        </div>
        <div>
          性別<br />
          <ValidateField validators={[isRequired]}>
            <select name="input_sex" defaultValue="女">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </ValidateField>
        </div>
        <button type="submit">送信</button>
      </ValidateGroup>
    );
  }
}
