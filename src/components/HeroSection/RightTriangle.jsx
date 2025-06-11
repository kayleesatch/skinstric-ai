import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { iconButton } from "@/assets/figma";

const RightTriangle = ({ hidden, onHover }) => {
    const [ripple, setRipple] = useState(false);
    const navigate = useNavigate();

    if (hidden) return null

    const triggerRipple = () => {
        setRipple(true);
        setTimeout(() => setRipple(false), 600);
    }

    const handleClick = () => {
        navigate('/introduction');
    };

    return (
        <div 
            className="relative lg:block hidden"
            onMouseEnter={() => {
                onHover && onHover('right');
                triggerRipple();
            }}
            onMouseLeave={() => onHover && onHover(null)}
        >

        <div className="absolute pointer-events-none w-120 h-120 right-[-265px] transform -translate-y-1/2 rotate-45 z-20">
            <div className="w-full h-full absolute border-b-[1px] border-l-[1px] border-[#A0A4AB]"></div>
        
            <AnimatePresence>
                {ripple && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute w-full h-full border-b-[1px] border-l-[1px] border-[rgba(160, 164, 171, 1)] rotate-0"
                    />    
                )}
            </AnimatePresence>
        </div>

            <motion.button 
                onClick={handleClick}
                className="group flex items-center gap-2 bg-transparent -translate-y-[48%] border-none cursor-pointer mr-6 mb-10 z-30 uppercase text-sm w-50 h-10">
                <span className="font-sans">Take Test</span>
                <img 
                    src={iconButton} 
                    alt="Right Button"
                    className="w-6 h-6 hover:scale-180 transition-transform duration-300" 
                />
            </motion.button>
        </div>
  )
}
export default RightTriangle;