import classNames from 'classnames';
import React from 'react';
import styles from './index.less';

interface ArcProps {
  classname?: string;
}

const Arc: React.FC<ArcProps> = ({ classname }) => {
  return (
    <div className={classNames(classname, styles.main)}>
      <div className={styles.kGYGSu}></div>
    </div>
  );
};

export default Arc;
