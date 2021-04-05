import React, { useEffect, useState } from 'react';
import List from './List';
import SearchInput from './SearchInput';

import { query } from '@/services/search';

import { PaginationType } from '@/@types/list';
import { ProductType } from '@/@types/product';
interface ListState {
  data: ProductType[];
  pagination: PaginationType;
}

const Search: React.FC<ListState> = () => {
  const [state, setState] = useState({
    data: [],
    pagination: {
      totalPage: 0,
      pageNo: 0,
      pageSize: 10,
      searchKey: '',
    },
  });
  const queryList = (pagination: PaginationType) => {
    let pageNo = state.pagination.pageNo;
    let pageSize = state.pagination.pageSize;
    let searchKey = state.pagination.searchKey;
    if (pagination) {
      if (pagination.pageNo !== undefined) {
        pageNo = pagination.pageNo;
      }
      pageSize = pagination.pageSize || pageSize;
      searchKey = pagination.searchKey || searchKey;
    }
    query({
      pageNo,
      pageSize,
      searchKey,
    }).then((res) => {
      const { list } = res;
      saveState(list);
    });
  };
  const saveState = (partialState: {
    data?: ProductType[];
    pagination: PaginationType;
  }) => {
    let data = [...state.data, ...(partialState.data || [])];
    let pagination = {
      ...state.pagination,
      ...partialState.pagination,
    };
    if (pagination.pageNo === 0) {
      data = partialState.data || [];
    }
    setState({ data, pagination });
  };
  return (
    <div>
      <SearchInput queryList={queryList} />
      <List
        data={state.data}
        pagination={state.pagination}
        queryList={queryList}
      />
    </div>
  );
};
export default Search;
