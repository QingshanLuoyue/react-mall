import React, { useEffect } from 'react';
import styles from './BasicLayout.less';
import { connect } from 'umi';
const BasicLayout = (props) => {
  console.log('this.props :>> ', props);
  const { dispatch } = props;
  // useEffect(() => {
  //   if (condition) {

  //   }
  // })
  return <div> </div>;
};

export default connect()(BasicLayout);
