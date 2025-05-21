import React from "react";
import { motion } from "framer-motion";

const RightTriangle = ({ hidden, onHover }) => {
    if (hidden) return null

    return (
        <div 
            className="relative lg:block hidden"
            onMouseEnter={() => onHover && onHover('right')}
            onMouseLeave={() => onHover && onHover(null)}
        >

        <div className="absolute pointer-events-none w-120 h-120 right-[-250px] top-[45%] transform -translate-y-1/2 border-b-[1px] border-l-[1px] border-[#A0A4AB] rotate-45 z-20"></div>
            
            <motion.button className="flex items-center gap-2 bg-transparent border-none cursor-pointer mr-6 z-30 uppercase text-sm w-50 h-10 hover:scale-105 transition-transform duration-300 transform-gpu">
                <span>Take Test</span>
                <img 
                    src="src/assets/figma/iconButton.png" 
                    alt="Right Button"
                    className="w-6 h-6" 
                />
            </motion.button>
        </div>
  )
}
export default RightTriangle;