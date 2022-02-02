import { useQuery } from '@apollo/client';
import { FETCH_CHARACTERS } from '../GraphQL/Queries';

export const useCharacters = () => {
  const { data, loading, error } = useQuery(FETCH_CHARACTERS);

  return { data, loading, error };
};
