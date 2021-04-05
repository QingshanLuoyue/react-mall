import React from 'react';
import styles from './index.less';

// 组件
import SearchInput from './SearchInput';
import Carousel from './Carousel';
import NavTable from './NavTable';
import Arc from '@/components/Arc';
import Recommend from './Recommend';
export default () => {
  return (
    <div className={styles.main}>
      <SearchInput></SearchInput>
      <Carousel></Carousel>
      <Arc></Arc>
      <NavTable></NavTable>
      <Recommend></Recommend>
    </div>
  );
};
