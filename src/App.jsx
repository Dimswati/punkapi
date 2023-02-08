import BeerList from './components/list/Beerlist';
import { useEffect, useState } from 'react';
import './App.scss';
import Modal from './components/modal/Modal'

function App() {

  const [beers, setBeers] = useState([])

  //get beers data from punk api and call setBeers function with the array of beers 
  useEffect(()=>{
    async function getPunkData(){
      try{
        const response = await fetch('https://api.punkapi.com/v2/beers')

        if(!response.ok){
          throw new Error(response.status)
        }

        const data = await response.json()
        setBeers(data)
        console.log(data)

      }catch(error){
        alert('could not get data')
        console.error(error)
      }
    }

    getPunkData()
  },[])

  // function deleteBeer(){

  // }

  // function updateBeer(){

  // }

  // function addBeer(){

  // }

  //sets array data to local storage every time beers data change in the code
  useEffect(()=>{
    localStorage.setItem("beers", JSON.stringify(beers))
  },[beers])

  function getSingleData(){}

  return (
    <div className="App">
      <BeerList beers={beers}/>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
