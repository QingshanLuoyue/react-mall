// import { Effect, Reducer } from 'umi'
import { Effect, Reducer } from 'umi';
import { fakeAccountLogin } from '@/services/login';

import { Toast } from 'antd-mobile';
interface CurrentUser {
  name?: string;
  icon?: string;
  userid?: string;
}

interface DetailUser {
  name: string;
  icon: string;
  userid: string;
  email: string;
  phone: string;
  address: string;
  signature?: string;
  title?: string;
  tags?: {
    key: string;
    label: string;
  };
  country: string;
}
export interface UserModelState {
  currentUser: CurrentUser;
  detail:
    | DetailUser
    | {
        name: string;
        icon: string;
      };
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    // fetchCurrent: Effect
    login: Effect;
    // queryDetail: Effect
    // logout: Effect
  };
  reducers: {
    saveUser: Reducer<UserModelState>;
    // clearUser: Reducer<UserModelState>
  };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
    detail: {
      name: '',
      icon: '',
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(fakeAccountLogin, payload);
      // console.log('res :>> ', res);
      if (res.status === 1) {
        yield put({
          type: 'saveUser',
          payload: {
            currentUser: {
              ...res,
            },
          },
        });
      } else {
        Toast.fail(res.msg || '系统开小差，请稍后!');
      }
    },
  },
  reducers: {
    saveUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default UserModel;
