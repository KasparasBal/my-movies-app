import { get } from '../shared/methods';
import { MoviesResponse } from './types';

export async function fetchPersonalMovies(): Promise<MoviesResponse> {
  const token = localStorage.getItem('TOKEN');
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const { data } = await get<MoviesResponse>('personal-movies', config);
  return data;
}
