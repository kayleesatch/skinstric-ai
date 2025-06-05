import React, { useState } from "react";
import Diamond from "@/components/HeroSection/Diamond";
import { useNavigate } from "react-router-dom";
import { reverseIconButton } from "@/assets/figma";

const Location = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async () => {
        const name = localStorage.getItem('name');
        const location = inputValue;
        try{
            const response = await fetch('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ name, location })
            });

            if (!response.ok) {
                throw new Error('Failed to submit location');
            }
            
            console.log({ Success: `${name} from ${location} has been added.`});

            navigate('/photo-select');
        } catch (err) {
            console.error('Error submitting location:', err);
        }
    };

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
                            if (e.key === 'Enter' && inputValue.trim()) { 
                                handleSubmit();
                            }
                        }}
                        className='w-full pt-6 pb-2 border-b-2 border-gray-800 text-center tracking-tighter text-4xl outline-none bg-transparent placeholder-gray-800'
                        placeholder='Where are you from?'
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

export default Location;