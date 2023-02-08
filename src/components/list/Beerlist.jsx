import React from 'react';
import Beer from '../beer/Beer';
import './beerlist.scss';

export default function BeerList({beers}) {
  
  return (
    <div className='beerlist'>
      {
        beers.map(beer => {
          return (<Beer 
                    key={beer.id} 
                    beer={beer}
                  />)
        })
      }
    </div>
  )
}
