import { get } from '../shared/methods';
import { SortOption } from './types';

export async function fetchSortOptions(): Promise<SortOption[]> {
  const { data } = await get<SortOption[]>('sort-options');
  return data;
}
