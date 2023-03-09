import { get } from '../shared/methods';

interface SortOption {
  code: string;
  name: string;
}

export async function fetchSortOptions(): Promise<SortOption[]> {
  const { data } = await get<SortOption[]>('sort-options');
  return data;
}
