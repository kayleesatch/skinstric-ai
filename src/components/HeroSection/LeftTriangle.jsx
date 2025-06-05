import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { reverseIconButton } from "@/assets/figma";

const LeftTriangle= ({ hidden, onHover }) => {
    const [ripple, setRipple] = useState(false);

    if (hidden) return null;

    const triggerRipple = () => {
        setRipple(true);
        setTimeout(() => setRipple(false), 600);
    }

    return (
        <div 
            className="relative lg:block hidden"
            onMouseEnter={() => {
                onHover && onHover('left');
                triggerRipple();
            }}
            onMouseLeave={() => onHover && onHover(null)}    
        >

        <div className="absolute pointer-events-none w-120 h-120 left-[-265px] transform -translate-y-1/2 rotate-45 z-20">
            <div className="w-full h-full absolute border-t-[1px] border-r-[1px] border-[#A0A4AB]"></div>

            <AnimatePresence>
                {ripple && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute w-full h-full border-t-[1px] border-r-[1px] border-[rgba(160, 164, 171, 1)] rotate-0"
                    />    
                )}
            </AnimatePresence>
        </div>
        
            
            <motion.button 
                className="group flex items-center gap-2 bg-transparent -translate-y-[52%] border-none cursor-pointer ml-6 mb-10 z-30 uppercase text-sm w-50 h-10">
                <img 
                    src={reverseIconButton} 
                    alt="Left Button"
                    className="w-6 h-6 hover:scale-180 transition-transform duration-300" 
                />
                <span>Discover A.I.</span>
            </motion.button>
        </div>
    )
}

export default LeftTriangle 