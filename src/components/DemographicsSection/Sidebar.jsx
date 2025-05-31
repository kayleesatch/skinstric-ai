import React from "react";

export default function Sidebar({ selectedCategory, setSelectedCategory, actualValue }) {
    const categories = [
        { label: "Race", key: "race" },
        { label: "Age", key: "age" },
        { label: "Gender", key: "gender" },
    ];

    return (
        <div className="w-1/6 bg-gray-100 flex flex-col items-center">
            <div className="flex flex-col gap-0.5 w-full px-1 pt-1">
                {categories.map(({ label, key }) => {
                    const actual = actualValue?.[key];
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
                            {actual && (
                                <span className="text-sm mt-1 opacity-80">
                                    {actual.charAt(0).toUpperCase() + actual.slice(1)}
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