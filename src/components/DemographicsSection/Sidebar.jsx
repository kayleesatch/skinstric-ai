import React from "react";

export default function Sidebar({ selectedCategory, setSelectedCategory, actualValue, predictions = {} }) {
    const categories = [
        { label: "Race", key: "race" },
        { label: "Age", key: "age" },
        { label: "Gender", key: "gender" },
    ];

    return (
        <div className="w-full md:w-1/6 bg-gray-100 flex flex-row md:flex-col items-center md:items-stretch md: justify-start">
            <div className="flex flex-row md:flex-col gap-1 w-full md:px-1 md:pt-1 px-2 py-1 justify-center">
                {categories.map(({ label, key }) => {
                    const actual =  actualValue?.[key];

                    const sorted = Object.entries(predictions?.[key] || {})
                        .sort((a, b) => b[1] - a[1]);
                    const topPrediction = sorted[0]?.[0] || "";


                    return (
                        <div
                            key={key}
                            onClick={() => setSelectedCategory(key)}
                            className={`relative w-full h-24 cursor-pointer text-start text-lg font-bold px-2 py-3 flex flex-col justify-end items-start transition-colors duration-200 
                                ${selectedCategory === key
                                    ? "bg-black text-white border-black"
                                    : "bg-gray-300 text-black hover:bg-gray-500 border-gray-400"
                                }`}
                        >

                            {topPrediction && (
                                <span className="absolute top-2 left-2 text-xs font-semibold opacity-70">
                                    {topPrediction.charAt(0).toUpperCase() + topPrediction.slice(1)}
                                </span>
                            )}

                            <span className="text-lg font-bold">{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}