import {useState} from 'react';
import Beer from '../beer/Beer';
import './beerlist.scss';
import Popup from '../popup/Popup'

export default function BeerList({beers}) {
  const [openModal, setOpenModal] = useState(false)
  const [beer, setBeer] = useState({})

  function selectBeer(id){
    setBeer(beers.filter(beer => beer.id === id))
    setOpenModal(prevState => !prevState)
  }

  function closeModal(){
    setOpenModal(prevState => !prevState)
  }

  return (
    <>
      <div className='beerlist'>
        {
          beers.map(beer => {
            return (<Beer 
                      key={beer.id} 
                      beer={beer}
                      openModal={()=>{selectBeer(beer.id)}}
                    />)
          })
        }
      </div>
      {openModal && <Popup beer={beer} closeModal={closeModal}/>}
    </>
  )
}
