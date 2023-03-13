import { get } from '../shared/methods';
import { Genres } from './types';

export async function fetchGenres(): Promise<Genres> {
  const { data } = await get<Genres>('genres');
  return data;
}
