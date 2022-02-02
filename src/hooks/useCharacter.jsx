import { useQuery } from '@apollo/client';
import { FETCH_CHARACTER } from '../GraphQL/Queries';

export const useCharacter = (id) => {
  const options = {
    variables: {
      id,
    },
  };
  const { data, loading, error } = useQuery(FETCH_CHARACTER, options);
  
  


  return { data, loading, error };
};
