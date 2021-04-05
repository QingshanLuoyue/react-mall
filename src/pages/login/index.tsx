import React from 'react';
import { connect, Redirect } from 'umi';

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

const Login: React.FC<LoginProps> = ({ user, dispatch, location }) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (isLogin) {
    // 从哪里跳转过来登录，登录完成后，跳转回去
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }
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
