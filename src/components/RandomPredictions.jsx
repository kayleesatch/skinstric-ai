const RandomPredictions = (apiData) => {
    const getRandomKey = (obj) => {
        const keys = Object.keys(obj);
        const randomIndex = Math.floor(Math.random() * keys.length);
        return keys[randomIndex];
    };

    return {
        race: getRandomKey(apiData.race),
        age: getRandomKey(apiData.age),
        gender: getRandomKey(apiData.gender),
    };
};

export default RandomPredictions;