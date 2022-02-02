import { useCharacters } from '../hooks/useCharacters';
import { NavLink } from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  if (error) return <h3>err</h3>;
  if (loading) return <h3>loading...</h3>;

  return (
    <>
      <div className="px-20 mx-auto grid grid-cols-1 gap-4 ... sm:w-[80vw] sm:grid sm:grid-cols-2 sm:gap-2 ... lg:grid lg:grid-cols-4 lg:gap-2">
        {data?.characters?.results.map((char) => (
          <NavLink to={`/${char.id}`}>
            <CharacterCard char={char} />
          </NavLink>
        ))}
      </div>
    </>
  );
}
