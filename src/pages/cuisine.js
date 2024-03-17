import React,{useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Cuisine() {
  
    const [cuisine,setCuisine] = useState([])   
    let params = useParams();

    const getCuisine = async(name) =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2fefdab710d74573ade7f7b907513467&cuisine=${name}`)
        const recipes = await api.json();
        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine('params.type')
    },[params.type])

    return (
    <div className='grid-cols-4 gap-3'>
        {cuisine.map((item) => {
            return(
                <div key={item.id}>
                    <img src="{item.image}" alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default Cuisine