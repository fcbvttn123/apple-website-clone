import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

export function NavBar() {
  return (
    // Nav Bar Wrapper
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      {/* Nav Bar component */}
      <nav className="flex justify-between w-full screen-max-width">
        {/* Nav Bar Child: apple icon*/}
        <img src={appleImg} alt="Apple" width={14} height={18} />
        {/* Nav Bar Child: navigation items*/}
        <div className="hidden sm:flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>
        {/* Nav Bar Child: search and bar icons*/}
        <div className="flex items-center gap-7">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}
