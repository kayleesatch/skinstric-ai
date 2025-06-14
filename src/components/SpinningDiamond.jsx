import React from "react";
import { motion } from 'framer-motion';

const DiamondLoad = () => (
    <div className="w-full h-full aspect-square border border-dotted border-[#A4A0AB] rotate-45 flex items-center justify-center">
        <div className="w-[85%] h-[85%] aspect-square border border-dotted border-[#A4A0AB]" />
    </div>
);

const SpinningDiamond = () => {
    return (
            <div className="min-h-screen w-full flex items-center justify-center bg-white overflow-visible -mt-65">
    
                    <div className="relative w-48 h-48 ">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            >
                                <DiamondLoad />
                        </motion.div>
    
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-full"
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'linear'}}
                            >
                                <DiamondLoad />
                        </motion.div>
                    </div>
                </div>
        );
};

export default SpinningDiamond;