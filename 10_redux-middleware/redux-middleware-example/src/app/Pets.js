import React, { useEffect } from 'react';
import { getPets } from './store';
import { useSelector, useDispatch } from 'react-redux';

export default function Pets() {

    const pets = useSelector(state => state.pets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPets())
    }, [dispatch]);

    console.log(pets);
    return (
        <div className="pets">
            {
                pets && pets.map(pet => {
                    return (
                        <div key={pet.id}>
                            <img src={pet.imageUrl} alt="pet" />
                            <p>{pet.name}</p>
                            <p>{pet.type}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
