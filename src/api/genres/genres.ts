import { get } from '../shared/methods';

export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[];
}

export async function fetchGenres(): Promise<Genres> {
  const { data } = await get<Genres>('genres');
  return data;
}
