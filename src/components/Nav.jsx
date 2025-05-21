import codeButton from '../assets/figma/button-simple.png';

const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 bg-white relative z-10">

        <div className="flex items-center gap-2">
            <span className='text-xs font-semibold text-black tracking-tight cursor-pointer'>SKINSTRIC</span>
            <span className="text-xs font-semibold text-gray-400 tracking-tight">[ INTRO ]</span>
        </div>

            <img src={codeButton} alt="Button" className='h-7 mr-4' />
    </nav>
  )
}

export default Nav
