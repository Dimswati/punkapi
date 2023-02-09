import {useState} from 'react';
import Beer from '../beer/Beer';
import './beerlist.scss';
import Popup from '../popup/Popup'

export default function BeerList({beers}) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedBeer, setSelectedBeer] = useState({})

  function selectBeer(id){
    const [selectBeer] = beers.filter(beer => beer.id === id)
    setOpenModal(prevState => !prevState)
    setSelectedBeer(selectBeer)
    // console.log(selectBeer)
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
      {openModal && <Popup beer={selectedBeer} closeModal={closeModal}/>}
    </>
  )
}
