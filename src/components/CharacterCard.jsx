export default function CharacterCard({ char }) {
  return (
    <>
      <div className="relative bg-slate-500 flex justify-center rounded-3xl p-3 font-bold h-full w-full ... sm:rounded-lg">
        <section className="mb-6 my-auto">
          <div className="absolute inset-0 opacity-0 hover:opacity-90 hover:bg-slate-500 flex justify-center items-center text-center  rounded-3xl ... sm-rounded-lg">
            <span className="p-2 rounded-2xl text-3xl font-bold text-white bg-slate-800 ... sm:rounded-none">
              Click me for details
            </span>
          </div>
          <img
            className="rounded-lg"
            src={char.image}
            alt="Rick and Morty cartoon list"
          />
          <h3 className="appHeading bg-slate-700 rounded-lg mt-3 p-2 bg-opacity-80">
            {char.name}
          </h3>
        </section>
      </div>
    </>
  );
}
