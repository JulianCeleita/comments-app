function Main() {
  return (
    <div className="mt-28 flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl">LOGIN</h1>
      <input
        type="text"
        placeholder="Username / Email"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-orange-600
         text-slate-900 px-2 py-1 w-full max-w-[40ch]"
      />
      <input
        type="password"
        placeholder="Password"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:border-orange-600
         text-slate-900 px-2 py-1 w-full max-w-[40ch]"
      />
      <button
        className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative
         after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full 
         overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900 font-bold hover:border-orange-600"
      >
        <h2 className="relative z-20">Submit</h2>
      </button>
    </div>
  );
}
export default Main;
