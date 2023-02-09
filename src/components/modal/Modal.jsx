import "./modal.scss";
import {Star, StarOutline} from '@mui/icons-material';

export default function Modal({beer}) {
  return (
    <>
        <div className='left'>
          <h2 className='name'>{beer.name}</h2>
          <p className='description'>{beer.description}</p>
          <h2 className='title'>Brewers tips</h2>
          <p className='description'>{beer.brewers_tips}</p>
          <h2 className='title'>Best served with</h2>
          <ol className='foodpair'>
            {
              beer.food_pairing.map(food => <li>{food}</li>)
            }
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
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <StarOutline/>
          </div>
        </div>
    </>
  )
}
