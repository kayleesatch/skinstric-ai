import React, { useState } from 'react';
import { whiteBullet, blackBullet } from "@/assets/figma";

export default function PredictionList({
    predictions,
    selectedCategory,
    onSelectPrediction,
    actualValue
}) {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const sortedPredictions = Object.entries(predictions?.[selectedCategory] || {})
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

    return (
       <div className="w-[30%] md:w-[45%] h-full bg-gray-100 overflow-y-auto py-2 pr-1">
            <div className="flex justify-between items-center mb-3 px-1">
                <h3 className="text-sm font-semibold uppercase text-gray-600">{selectedCategory}</h3>
                <span className="text-xs font-semibold uppercase text-gray-600">A.I. Confidence</span>
            </div>

            <ul className="flex flex-col space-y-0.5">
                {sortedPredictions.map(({ label, value }, index) => {
                    const isSelected = actualValue[selectedCategory] === label;
                    const isHovered = hoveredIndex === index;
                    
                    return (
                        <li
                        key={label}
                        onClick={() => onSelectPrediction(selectedCategory, label)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`cursor-pointer justify-between items-center py-1 flex transition-colors duration-150 text-xs 
                            ${isSelected 
                                ? 'bg-black text-white' 
                                : 'hover:bg-black hover:text-white text-black bg-transparent'
                            }`}
                        >
                        <div className="flex items-center ml-2 space-x-2">
                            <img 
                                src={isSelected || isHovered ? whiteBullet : blackBullet} 
                                alt="bullet" 
                                className="w-3 h-3 bg-transparent" 
                            />
                            <span className="font-xs uppercase">{label}</span>
                        </div>

                        <span className="min-w-[60px] text-right">
                            {(value * 100).toFixed(2)}%
                        </span>
                      </li>
                    );
                })}
            </ul>
       </div> 
    );
}