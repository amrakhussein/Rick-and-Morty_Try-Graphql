import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';

export default function CharacterDetail() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);
  //   console.log('data:character::', data);

  if (error) return <div>err..</div>;
  if (loading) return <div>loading...</div>;

  return (
    <main className=" p-6 mx-4 bg-slate-700 rounded-lg shadow-lg">
      <figure className="flex flex-col  items-center">
        <img
          className=" rounded-full border-4 border-pink-400"
          src={data?.character?.image}
          alt="rick and morty character details"
        />
      </figure>
      <span className="block border border-pink-900 my-10 opacity-70"></span>
      <section className=" flex-row ">
        <h2 className="text-4xl">{data.character.name}</h2>
        <NavLink
          to="/"
          className="float-right bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Take me home
        </NavLink>
        <div className="bg-slate-600 bg-opacity-40  rounded-lg mt-3">
          <article className="p-3 shadow-lg">
            <h2 className="appHeading">The species of the character</h2>
            <p className="appText">{data?.character?.species}</p>
            <h2 className="appHeading">The status of the character</h2>
            <p className="appText">{data?.character?.status}</p>
            <h2 className="appHeading">The character's origin location</h2>
            <h3 className="pl-3 text-lg">
              The name of the location:{' '}
              <span className="block appText">
                {data?.character?.origin.name}
              </span>
            </h3>
            <h2 className="appHeading">Time created in the database</h2>
            <p className="appText">{data?.character?.created}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
