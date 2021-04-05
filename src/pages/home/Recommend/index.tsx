import React, { useEffect, useState } from 'react';

import styles from './index.less';

import { queryRecommend } from '@/services/home';

import { WingBlank, Card, Grid } from 'antd-mobile';
import { Link } from 'umi';
import { DataItem } from 'antd-mobile/lib/grid/PropsType';

function node({ id, title, img }: DataItem) {
  return (
    <Link to={'/product/' + id}>
      <div className="oneRow">{title}</div>
      <img src={img} alt="" className={styles.nodeImg} />
    </Link>
  );
}

export default () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    queryRecommend().then((res) => {
      setList(res.list.data);
    });
  }, []);
  return (
    <>
      <WingBlank size="lg" className={styles.main}>
        <Card>
          <Card.Header title="好货推荐"></Card.Header>
          <Grid
            data={list.slice(0, 6)}
            columnNum={3}
            renderItem={(data) => node({ ...data })}
          ></Grid>
        </Card>
      </WingBlank>
      <WingBlank size="lg" className={styles.main2}>
        <Card>
          <Card.Header title="猜你喜欢"></Card.Header>
          <Grid
            data={list.slice(6)}
            columnNum={2}
            renderItem={(data) => node({ ...data })}
          ></Grid>
        </Card>
      </WingBlank>
    </>
  );
};
