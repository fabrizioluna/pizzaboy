import React from 'react';
// import { PIZZAS_AVAIBLE } from '../resources/PizzasAvaible'

export const Pizzas = () => {

    const PIZZAS_AVAIBLE = [
        {
          id: 'm1',
          name: 'PEPPERONI ESPECIAL',
          description: 'La combinación perfecta entre Pepperoni y Champiñones, con un gran sabor y horneado al momento. Ingredientes Pepperoni, Champiñones Frescos y Extra Queso',
          picture: 'https://imagenes.milenio.com/CU287W9FW_sUIP1hV9nKcYoMLd0=/958x596/https://www.milenio.com/uploads/media/2019/06/03/no-hay-quien-se-resista.jpg',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'MEXICANA',
          description: 'La pizza con los sabores auténticos de nuestro país. Chorizo, carne molida, jalapeño, cebolla. Ingredientes: Chorizo, Carne Molida, Cebolla y Jalapeño',
          picture: 'https://mejorconsalud.as.com/wp-content/uploads/2015/05/pizza-500x334.jpg',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'CARNES FRÍAS',
          description: 'La pizza para los amantes de la carne. Salami, pepperoni, jamón, finas hierbas. Ingredientes: Pepperoni, Salami, Jamón y Finas Hierbas',
          picture: 'https://assets.dominos.com.mx/dev/webOptimized/especialidad/EXV/EXV.png',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'CUATRO QUESOS',
          description: 'La pizza pensada en los amantes del queso. Queso mozzarella, queso crema, queso cheddar, queso parmesano. Ingredientes: Queso Crema, Mozzarella, Parmesano y Cheddar',
          picture: 'http://2.bp.blogspot.com/-w5f5-tTAiyU/U0q-NYkExLI/AAAAAAAAG30/4_o6CgTr_1Q/s1600/Pizza+4+quesos+(blog).jpg',
          price: 18.99,
        },
        {
            id: '7',
            name: 'PIZZA HAWAIANA',
            description: 'La pizza que unos cuestionan pero todos aman. Jamón, piña. Ingredientes: Jamón y Piña',
            picture: 'https://www.recetin.com/wp-content/uploads/2015/05/pizza_hawaiana.jpg',
            price: 200.00,
        },
      ]

    return (
        <div className='pizzas__maincontainer'>
            {PIZZAS_AVAIBLE.map((meal) => (
            <div className='pizzas__container-small'>
                <img 
                    src={meal.picture} 
                    alt={meal.name}
                    className='pizzas__img-container'
                />
                <p className='pizzas__ts-big'>{meal.name}</p>
                <p className='pizzas__ts-small'>{meal.description}</p>
                <p className='pizzas__ts-big'>{meal.price}</p>
                <button className='butn butn-large'>Add to you Cart</button>
            </div>
            ))}
        </div>
    );
};