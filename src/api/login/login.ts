import { post } from '../shared/methods';
import { LoginResponse, LoginAuthorization } from './types';

export async function postLogin(authorization: LoginAuthorization): Promise<LoginResponse> {
  const { data } = await post<LoginAuthorization, LoginResponse>('login', authorization);
  return data;
}
