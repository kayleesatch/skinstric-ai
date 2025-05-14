const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-black">
        <div className="text-xl font-semibold">
            Skinstric <span className="text-gray-500">[INTRO]</span>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">
            Menu
        </button>
    </nav>
  )
}

export default Nav
