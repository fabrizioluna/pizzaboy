import React from 'react';
import { Header } from '../layout/Header';

export const Pizzas = ({ typePizza, listPizzas }) => {
    return (
        <div className='pizzas__maincontainer'>
          <Header 
            headerTitle={typePizza}
            headerImg='https://static.vecteezy.com/system/resources/previews/000/928/085/large_2x/pizza-cut-into-slices-photo.jpg'
          />
            {listPizzas.map((meal) => (
            <div className='pizzas__container-small'>
                <img 
                    src={meal.picture} 
                    alt={meal.name}
                    className='pizzas__img-container'
                />
                <p className='pizzas__ts-big'>{meal.name}</p>
                <p className='pizzas__ts-small'>{meal.description}</p>
                {/* <p className='pizzas__ts-big'>{meal.price}</p> */}
                <button className='butn butn-large'>Buy ${meal.price}</button>
            </div>
            ))}
        </div>
    );
};
