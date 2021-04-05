import { UserModelState } from './user';
import { CartModelState } from './cart';
import { Location, Dispatch } from 'umi';
export interface ConnectProps {
  location: Location & { state: { from: string } };
  dispatch: Dispatch;
}

export interface ConnectState {
  user: UserModelState;
  cart: CartModelState;
}
export { UserModelState };
