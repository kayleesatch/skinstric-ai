import React, { useState, useEffect } from "react";

export default function CenterDisplay({ actualValue, selectedPrediction }) {
    const actual = actualValue;

    const percentage = parseFloat(selectedPrediction?.[actual]) * 100 || 0;
    const radius = 170;
    const stroke = 6;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative w-full h-full bg-white px-6 py-4 flex flex-col lg:flex-row justify-between items-center lg:items-start">

            <div className="w-full lg:w-[60%] relative mb-8 lg:mb-0">

                {actual && (
                    <div className="absolute top-4 left-6 text-xl font-semibold text-gray-700">
                        {actual.charAt(0).toUpperCase() + actual.slice(1)}
                    </div>
                )}

                    <div className="flex-1 hidden lg:block"></div>
            </div>

                <div className="absolute top-[45%] transform -translate-x-1/2 -translate-y-1/2 left-1/2 lg:left-auto lg:right-10 lg:translate-x-0">
                    <div className="relative" style={{ width: radius * 2, height: radius * 2 }}>
                    <svg
                        height={radius * 2}
                        width={radius * 2}
                        >
                        <circle
                            stroke="#e5e7eb"
                            fill='transparent'
                            strokeWidth={stroke}
                            r={normalizedRadius}
                            cx={radius}
                            cy={radius}
                            />
                        <circle
                            stroke='#4b5563'
                            fill='transparent'
                            strokeWidth={stroke}
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap='round'
                            r={normalizedRadius}
                            cx={radius}
                            cy={radius}
                            style={{
                                transition: 'stroke-dashoffset 1s ease-out',
                                transform: 'rotate(-90deg)',
                                transformOrigin: '50% 50%',
                            }}
                            />
                    </svg>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-gray-700 '>
                            {percentage.toFixed(2)}%
                    </div>
                </div>
            </div>
        </div>        
    );
}