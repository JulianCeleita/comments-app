function Header() {
  return (
    <div className="sticky w-full top-0 left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
        <h1 className="text-3xl sm:text-6xl select-none"> LOGO </h1>
        <i className="fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"></i>
    </div>
  )
}

export default Header;