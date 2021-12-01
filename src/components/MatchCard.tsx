import React from 'react';
import TinderCard from 'react-tinder-card';

import "../css/MatchCard.css";

type CardProps = {
    name: string,
    image: string,
    swiped: Function,
    outOfFrame: Function,
    index: number,
    childRefs: Array<any>
}

const MatchCard = ({ name, image , index, swiped , outOfFrame, childRefs}: CardProps) => {

    return (
        <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={name}
            onSwipe={() => swiped(index)}
            onCardLeftScreen={() => outOfFrame(index)}
        >
        <div 
            className="tinder_card " 
            style={{ backgroundImage: `url(${image})` }}
        >
            <h2 className="tinder_card_name ">
                {name}
            </h2>
        </div>
        </TinderCard>
    )
}

export default MatchCard
