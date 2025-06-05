import React, { useState } from "react";
import Diamond from "@/HeroSection/Diamond";
import { useNavigate } from "react-router-dom";
import { reverseIconButton } from "../assets/figma";

const Introduction = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    return (
        <section className='relative w-full h-screen bg-white overflow-hidden'>

            <Diamond  alwaysVisible />

            <div className='absolute top-5 left-6 text-xs uppercase text-gray-500 z-30'>
                To Start Analysis
            </div>

            <div className='absolute inset-0 flex flex-col  items-center justify-center z-20'>
                <div className='relative w-[320px] flex flex-col items-center -mt-30'>

                    <label
                        className={`absolute top-0 uppercase text-gray-400 text-xs transition-all duration-300 pointer-events-none
                            ${inputValue ? 'opacity-0 translate-y-2' : 'opacity-100'}
                        `}    
                    >
                        Click To Type
                    </label>
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && inputValue.trim()){
                                localStorage.setItem('name', inputValue);
                                navigate('/location');
                            }
                        }}
                        className='w-full px-3 pt-6 pb-2 border-b-2 border-gray-800 text-center text-4xl outline-none bg-transparent placeholder-gray-800'
                        placeholder='Introduce Yourself'
                    />
                </div>
            </div>

            <button
                className='fixed bottom-6 left-6 flex items-center gap-2 text-sm uppercase z-90'
                onClick={() => navigate(-1)}
            >
                <img 
                    src={reverseIconButton} 
                    alt="Back"
                    className='w-6 h-6 hover:scale-180 transition-transform duration-300'
                />
                <span>Back</span>
            </button>
        </section>
    )
}

export default Introduction