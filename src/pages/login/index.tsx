import React from 'react';
import { connect } from 'umi';

// 样式
import styles from './index.less';

// 组件
import LoginFrom from './LoginForm';

// 类型声明
import { ConnectProps, UserModelState, ConnectState } from '@/models/connect';
import { LoginParams } from '@/services/login';
interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ dispatch }) => {
  const handleSubmit = (value: LoginParams) => {
    // 提交登录操作
    dispatch({
      type: 'user/login',
      payload: value,
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginFrom handleSubmit={handleSubmit} />
    </div>
  );
};
export default connect(({ user }: ConnectState) => ({ user }))(Login);
