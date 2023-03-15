import { post } from '../shared/methods';
import { MovieSaveMovie, MovieSaveResponse } from './types';

export async function postMovieSave(movie: MovieSaveMovie): Promise<MovieSaveResponse> {
  const token = localStorage.getItem('TOKEN');
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const { data } = await post<MovieSaveMovie, MovieSaveResponse>('personal-movies', movie, config);
  return data;
}
