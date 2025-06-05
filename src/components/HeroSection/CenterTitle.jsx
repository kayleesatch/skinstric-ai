import React from "react";
import { motion } from 'framer-motion';
import HeroPara from "@/components/HeroSection/HeroPara";
import { useNavigate } from "react-router-dom";
import { iconButton } from "@/assets/figma";

const CenterTitle = ({ slideDirection }) => {
    const navigate = useNavigate();

    const variants = {
        center: {
            x: 0,
            alignItems: 'center',
            textAlign: 'center',
            transition: { duration: 0.6 },
        },
        left: {
            x: -420,
            alignItems: 'flex-start',
            textAlign: 'left',
            transition: { duration: 0.6 },
        },
        right: {
            x: 420,
            alignItems: 'flex-end',
            textAlign: 'right',
            transition: { duration: 0.6 },
        },
    };

    const currentVariant =
        slideDirection === 'left'
        ? 'right'
        : slideDirection === 'right'
        ? 'left'
        : 'center';

    return (
        <motion.div
            className='absolute inset-0 flex flex-col top-[-12%] items-center justify-center text-center px-4 z-10'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut'}}
        >
            <motion.div
                variants={variants}
                animate={currentVariant}
                className="text-4xl md:text-6xl lg:text-8xl lg:text-bold leading-tight bg-transparent">
            Sophisticated <br /> skincare                
        </motion.div>

        <div className='lg:hidden mt-4'>
            <HeroPara />
        </div>
        
        <button
            onClick={() => navigate('/introduction')} 
            className="mt-4 text-sm font-bold flex items-center gap-2 uppercase tracking-wide lg:hidden bg-white hover:scale-105 transition-transform duration-300"
        >
            Enter Experience
            <img 
                src={iconButton} 
                alt="enter" 
                className="w-6 h-6 hover:scale-180 transition-transform duration-300" />
        </button>
    </motion.div>
        
    )
}

export default CenterTitle;