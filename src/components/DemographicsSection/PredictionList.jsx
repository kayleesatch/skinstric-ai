import React from "react";
import { bulletDiamond } from "../../assets/figma";

export default function PredictionList({
    predictions,
    selectedCategory,
    onSelectPrediction,
}) {
    const categoryPredictions = predictions?.[selectedCategory] || [];

    const sortedPredictions = [...categoryPredictions].sort((a, b) => b.value - a.value);

    return (
       <div className="w-[30%] h-full bg-gray-200 p-6 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">{selectedCategory}</h3>

        <ul className="space-y-4">
            {sortedPredictions.map(({ label, value }) => (
                <li
                    key={label}
                    className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded-md transition"
                    onClick={() => onSelectPrediction(selectedCategory, label)}
                >
                    <div className="flex items-center space-x-3">
                        <img src={bulletDiamond} alt="bullet" className="w-5 h-5" />
                        <span className="font-medium">{label}</span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-700">
                        <span className="text-sm">A.I. Confidence</span>
                        <span className="font-bold">{value.toFixed(2)}%</span>
                    </div>
                </li>
            ))}
        </ul>
       </div> 
    );
}