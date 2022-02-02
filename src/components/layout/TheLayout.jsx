export default function Layout({ children }) {
  return (
    <main className="p-5 bg-slate-700 text-white overflow-y-auto h-screen  ... scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-300">
      {children}
    </main>
  );
}
