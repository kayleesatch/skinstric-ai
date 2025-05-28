import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Diamond from "../HeroSection/Diamond";

const Upload = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { base64, predictions } = location.state || {};

    const [loading, setLoading] = useState(true);
    const [actuals, setActuals] = useState({
        race: null,
        age: null,
        gender: null,
    });

    useEffect(() => {
        if (!base64 || !predictions) return;
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [base64, predictions]);


    if (!base64 || !predictions) {
        return (
            <div className='flex flex-col items-center justify-center h-screen'>
                <p className='text-red-600 text-xl'>No image or predictions found.</p>
                <button
                    onClick={() => navigate("/")}
                    className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:scale-105 transition'
                >
                    Go Home
                </button>
            </div>
        );
    }

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center h-screen bg-white'>
                <p className='text-lg uppercase mb-6 text-gray-700'>Preparing you analyisis...</p>
                <div className='flex gap-10'>
                    <div className='animate-spin-slow'>
                        <Diamond />
                    </div>
                    <div className='animate-spin-slower reverse-spin'>
                        <Diamond />
                    </div>
                </div>
            </div>
        );
    }

    const handleSelection = (category, key) => {
        setActuals(prev => ({ ...prev, [category]: key }));
    };

    const renderDemographics = (category, data) => {
        const sorted = Object.entries(data).sort(([, a], [, b]) => b - a);

        return (
            <div className='mb-6'>
                <h2 className='text-xl font-semibold mb-2 capitalize'>{category}</h2>
                <div className='space-y-2'>
                    {sorted.map(([key, value]) => (
                        <div
                            key={key}
                            onClick={() => handleSelection(category, key)}
                            className={`cursor-pointer px-4 py-2 rounded-md border ${actuals[category] === key ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 hover:bg-blue-100'}`}
                        >
                            <div className='flex justify-between items-center'>
                                <span className='capitalize'>{key}</span>
                                <span>{(value * 100).toFixed(2)}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className='min-h-screen bg-white px-6 py-10 flex flex-col items-center'>
            <h2 className='text-2xl font-bold mb-6'>AI Demographic Predictions</h2>

            <img 
                src={base64} 
                alt="Uploaded Face"
                className='w-64 h-auto mb-8 border rounded-lg shadow-lg' 
            />

            <div className='w-full max-w-md'>
                {renderDemographics("race", predictions.race)}
                {renderDemographics("age", predictions.age)}
                {renderDemographics("gender", predictions.gender)}
            </div>

            <div className='mt-10 text-center'>
                <p className='text-sm text-gray-500'>Click a value to set your actual demographic info.</p>
            </div>
        </section>
    );
};

export default Upload;