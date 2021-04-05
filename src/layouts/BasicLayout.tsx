import React, { useEffect } from 'react';
import { connect } from 'umi';

import styles from './BasicLayout.less';
import '@/static/iconfont/iconfont.css';

import BottomNav from '@/components/BottomNav';

// 类型声明
import { ConnectProps, UserModelState } from '@/models/connect';
interface BasicLayoutProps extends ConnectProps {
  user: UserModelState;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { dispatch, children, location } = props;
  // 加载时候，获取一遍用户信息
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  const { pathname } = location;
  const showBottomNav = pathname !== '/login';
  return (
    <div className={styles.main}>
      <article>{children}</article>
      {showBottomNav && <BottomNav pathname={pathname} />}
    </div>
  );
};

export default connect()(BasicLayout);
