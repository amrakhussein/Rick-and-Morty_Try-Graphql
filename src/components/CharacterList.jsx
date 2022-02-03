import { useCharacters } from '../hooks/useCharacters';
import { NavLink } from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  if (error) return <div>Seems like something unusual has happend. You can notify me!</div>;
  if (loading) return <h3>loading...</h3>;

  return (
    <>
      <div className="px-4 pr-6 space-y-6  mx-auto grid grid-cols-1 ... sm:w-[80vw] sm:grid sm:grid-cols-2 sm:gap-4 ... lg:grid lg:grid-cols-4 lg:gap-6 lg:px-20">
        {data?.characters?.results.map((char) => (
          <NavLink key={char.id} to={`/${char.id}`}>
            <CharacterCard char={char} />
          </NavLink>
        ))}
      </div>
    </>
  );
}
