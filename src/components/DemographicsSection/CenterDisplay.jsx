import React, { useState, useEffect } from "react";

export default function CenterDisplay({ selectedCategory, actualValue, selectedPrediction }) {
    const actual = actualValue?.[selectedCategory]

    const percentage = parseFloat(selectedPrediction) || 0;
    const radius = 200;
    const stroke = 20;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="w-[70%] h-full bg-white relative px-6 py-4">

            {actual && (
                <div className="absolute top-4 left-6 text-xl font-semibold text-gray-700">
                    {actual.charAt(0).toUpperCase() + actual.slice(1)}
                </div>
            )}

            <div className="absolute bottom-20 right-12">
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
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-gray-700'>
                        {percentage.toFixed(2)}%
                </div>
            </div>
        </div>        
    );
}