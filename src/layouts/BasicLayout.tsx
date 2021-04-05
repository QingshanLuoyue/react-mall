import React, { useEffect } from 'react';
import styles from './BasicLayout.less';
import { connect } from 'umi';
const BasicLayout = (props) => {
  // console.log('this.props :>> ', props);
  const { dispatch, children } = props;
  return <div>{children}</div>;
};

export default connect()(BasicLayout);
