import { gql } from '@apollo/client';

export const FETCH_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const FETCH_CHARACTER = gql`
  query FetchCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      origin {
        name
      }
      created
    }
  }
`;
