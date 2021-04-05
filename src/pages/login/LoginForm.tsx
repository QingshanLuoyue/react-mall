import React from 'react';
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
const LoginForm = ({ form, handleSubmit }) => {
  const { getFieldProps, getFieldsValue } = form;
  const submit = () => {
    // 设置了 getFieldProps ，才能使用 getFieldsValue 获取值
    let value = getFieldsValue();
    // console.log('value :>> ', value);
    handleSubmit(value);
  };
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('name')}
        type="text"
        placeholder="请输入账号"
        clear
      >
        账号
      </InputItem>
      <InputItem
        {...getFieldProps('password')}
        type="password"
        placeholder="请输入密码"
        clear
        autoComplete="new-password"
      >
        密码
      </InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={submit}>
        登录
      </Button>
    </WingBlank>
  );
};
// 传递 form 属性到 props 中
export default createForm()(LoginForm);
