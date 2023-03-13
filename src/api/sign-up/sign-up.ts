import { post } from '../shared/methods';
import { SignUpResponse, SingUpAuthorization } from './types';

export async function postSignUp(authorization: SingUpAuthorization): Promise<SignUpResponse> {
  const { data } = await post<SingUpAuthorization, SignUpResponse>('sign-up', authorization);
  return data;
}
