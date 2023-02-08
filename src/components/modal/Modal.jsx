import React from 'react'
import {StarIcon, StarOutlineIcon} from '@mui/icons-material';

export default function Modal() {
  return (
    <div className='modal'>
      <div className="modal-wrapper">
        <div className='left'>
          <h2 className='name'>BRAMLING X</h2>
          <p className='description'>A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</p>
          <h2 className='title'>Brewers tips</h2>
          <p className='description'>The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.</p>
          <h2 className='title'>Best served with</h2>
          <ol>
            <li>Spicy chicken tikka masala</li>
            <li>Grilled chicken quesadilla</li>
            <li>Caramel toffee cake</li>
          </ol>
        </div>
        <div className="right">
          <h2 className="title">Main ingredients</h2>
          <div className='ingredient-list'>
            <div className='ingredient'>
              <p className='ingredient-name'>Fuggles</p>
              <p className="ingredient-amount">25g</p>
            </div>
            <div className='ingredient'>
              <p className='ingredient-name'>First Gold</p>
              <p className="ingredient-amount">25g</p>
            </div>
            <div className='ingredient'>
              <p className='ingredient-name'>Fuggles</p>
              <p className="ingredient-amount">37.5g</p>
            </div>
            <div className='ingredient'>
              <p className='ingredient-name'>First Gold</p>
              <p className="ingredient-amount">37.5g</p>
            </div>
            <div className='ingredient'>
              <p className='ingredient-name'>Cascade</p>
              <p className="ingredient-amount">37.5g</p>
            </div>
            <div className='ingredient'>
              <p className='ingredient-name'>Maris Otter Extra Pale</p>
              <p className="ingredient-amount">3.3kg</p>
            </div>
            <div className='ingredient'>
              <p className='ingredient-name'>Caramalt</p>
              <p className="ingredient-amount">2.2kg</p>
            </div>
            <div className='ingredient'>
              <p className='ingredient-name'>Munich</p>
              <p className="ingredient-amount">0.4kg</p>
            </div>
          </div>
          <h2 className="title">Customer rating</h2>
          <div className='stars'>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarOutlineIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}
