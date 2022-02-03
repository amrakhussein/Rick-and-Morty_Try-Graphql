import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';

export default function CharacterDetail() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);
  //   console.log('data:character::', data);

  if (error)
    return (
      <div>Seems like something unusual has happend. You can notify me!</div>
    );
  if (loading) return <div>loading...</div>;

  return (
    <div className="flex justify-center">
      <main className="w-full px-2 mr-2 py-6 bg-slate-800 rounded-xl shadow-lg ... sm:px-5 sm:mx-10 ... lg:max-w-2xl lg:p-6">
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
            className="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-pink-600 
            focus:ring-opacity-50 hover:ring-1 hover:ring-pink-600 float-right bg-slate-800 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full"
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
    </div>
  );
}
