import React, { useEffect, useState } from 'react';
// import Carousel from "react-ela"

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    try {
      // Corrected the API URL and used template literals
      const api = await fetch("https://api.spoonacular.com/recipes/random?apiKey=2fefdab710d74573ade7f7b907513467&number=4&tags=vegetarian");
      
      if (!api.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await api.json();
      // Corrected the key to 'recipes' (it was 'recipers' in your code)
      setVeggie(data.recipes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    
    <div>
      <h1 className='text-3xl underline ml-16 mt-12 mb-8'>veggie Recipes</h1>
      <div className='grid grid-cols-4 gap-3 justify-items-center'>
      {veggie.map((recipe) => {
        return (
          // <div className="text-white h-46 w-80 bg-green-600 mr-12" key={recipe.id}> {/* Added a unique key for each recipe */}
          //   <h2>{recipe.title}</h2>
          //   <img className='h-24 w-24' src={recipe.image} alt={recipe.title} />
          //   <p>{recipe.summary}</p>
          // </div>
      <div class="w-64 rounded overflow-hidden bg-green-400 shadow-lg">
      <img src={recipe.image} alt="Card Image" class="w-full h-auto bg-image" />  
      <div class="px-6 py-4">
        <div class="font-bold text-white text-xl mb-2">{recipe.title}</div>
        <p class="text-gray-200 text-base">{recipe.summary.slice(0,150)}</p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{recipe.aggregateLikes} Likes</span>
        <span class="inline-block bg-green-300 rounded-full px-3 py-1 mt-2 text-sm font-semibold text-gray-700">$ Average cost    {recipe.pricePerServing}</span>
        <button type="button" class="text-white mt-4 bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">More Information</button>
      </div>
    </div>

        );
      })}
    </div>
    </div>
  );
}

export default Veggie;
