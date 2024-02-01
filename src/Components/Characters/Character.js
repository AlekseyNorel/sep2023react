import React from 'react';

const Character = ({person}) => {
    const {name, status, species, gender, image} = person;
    return (
        <div>
             <p>{name}</p>
             <p>{status}</p>
             <p>{species}</p>
             <p>{gender}</p>
            <img
                src={image}
                alt={name}
            />
        </div>
    );
};

export {Character};