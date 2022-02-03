import { NavLink } from "react-router-dom";

export default function TheHeader() {
  return (
    <header className=" mt-1 pl-2 mb-12 text-4xl font-bold text-slate-200 ... lg:mt-8">
      <h1>

      <NavLink to='/'>
        Rick and Morty
      </NavLink>
      </h1>
    </header>
  );
}
