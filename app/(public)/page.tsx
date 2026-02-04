
export default function Home() {
  return (
    <>
      <header className="h-22 border-1 border-zinc-950 w-full bg-black">
        <h1 className="text-green-600 font-black font-sans text-center">header</h1>
        
      </header>
        <div className="flex items-center justify-center w-full">
          <div className="bg-gradient-to-r from-slate-900 to-green-400 w-300 h-0.5"></div>
          <div className="bg-green-400 w-300 h-0.5"></div>
          <div className="bg-gradient-to-r from-green-400 to-slate-900 w-300 h-0.5"></div>
        </div>
      <main className="flex items-center justify-center  h-120 w-full bg-black">
        <h1>home page</h1>
        
      </main>

      <footer className="h-25 border-1 border-zinc-950 bg-black">
        <h1 className="text-green-600 font-black font-sans">footer</h1>
        
      </footer>
    </>

  );
}
