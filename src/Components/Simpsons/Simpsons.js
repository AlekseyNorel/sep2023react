import React from 'react';
import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            img: 'https://ew.com/thmb/lW3I9ZLdQWyOldzLZw7P0vejsmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/homer-simpson_235-b7d6e76b96bd4ec885e63745c626dd25.jpg'
        },
        {
            id: 2,
            name: 'Marge',
            img: 'https://www.nzherald.co.nz/resizer/Sc0vZy4MGkODMbe5ZjwIJpw4Clo=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/JXCAP66A3Z4VLPSVOEMY2W5R2Q.jpg'
        },
        {
            id: 3,
            name: 'Marge',
            img: 'https://www.nzherald.co.nz/resizer/Sc0vZy4MGkODMbe5ZjwIJpw4Clo=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/JXCAP66A3Z4VLPSVOEMY2W5R2Q.jpg'
        },
        {
            id: 4,
            name: 'Bart ',
            img: 'https://i.pinimg.com/736x/2e/1f/b1/2e1fb1449cb81363338af29cb2093816.jpg'
        },
        {
            id: 5,
            name: 'Lisa  ',
            img: 'https://logowik.com/content/uploads/images/lisa-simpson7517.logowik.com.webp'
        },


    ];
    return (
        <div>
            {simpsons.map(simpson=><Simpson simpson={simpson} key={simpson.id}/>)}
        </div>
    );
};

export {Simpsons};