import React from 'react';
import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'NUMBER BOX',
    description: 'ENTER THE NUMBER AND GET THE FIRST N MOST OCCURING WORDS',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: 'See The Result Here',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  
];

const UserPlaces = () => {
  const userId=useParams().userId;
  const loadedPlaces =DUMMY_PLACES.filter(place=>place.creator===userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;