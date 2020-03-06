import './card.style.css';

import React from 'react';

const Card = props => (
    <div className="card-container">
        {/* https://robohash.org/17?set=set2 */}
        <img alt="monster"
             src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        {/* https://robohash.org/PC4.png?set=set2 */}
        
        <h2> {props.monster.name} </h2>
        <p>{props.monster.email}</p>

    </div>
    
);

export default Card;