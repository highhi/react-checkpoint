import isEmpty from 'lodash/isEmpty';

export function isRequired(val) {
  return {
    result: !isEmpty(val),
    message: '入力が必要な項目です',
  };
}

export function isEmail(val) {
  return {
    result: (/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i).test(val),
    message: 'メールアドレスが正しくありません',
  };
}
