import "./modal.scss";
import {Star, StarOutline} from '@mui/icons-material';

export default function Modal({beer}) {
  const {ingredients: {malt, hops}} = beer
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

            {
              malt.map(ingredient => {
                return (
                  <div className='ingredient'>
                    <p className='ingredient-name'>{ingredient.name}</p>
                    <p className="ingredient-amount">{ingredient.amount.value}{'kg'}</p>
                  </div>
                )
              })
            }

            {
              hops.map(ingredient => {
                return (
                  <div className='ingredient'>
                    <p className='ingredient-name'>{ingredient.name}</p>
                    <p className="ingredient-amount">{ingredient.amount.value}{'g'}</p>
                  </div>
                )
              })
            }

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
