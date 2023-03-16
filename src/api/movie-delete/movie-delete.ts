import { del } from '../shared/methods';
import { MovieDeleteResponse } from './types';

export async function deleteMovie(id: string): Promise<MovieDeleteResponse> {
  const token = localStorage.getItem('TOKEN');
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const { data } = await del<MovieDeleteResponse>(`personal-movies/${id}`, config);
  return data;
}
