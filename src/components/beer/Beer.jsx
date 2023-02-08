import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './beer.scss';

export default function Beer({beer}) {
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  const [number, year] = beer.first_brewed.split('/')
  const month = monthArr[parseInt(number) - 1]

  return (
    <div className='beer'>
        <img src={beer.image_url} alt={beer.name}/>
        <div>
            <h2 className='name'>{beer.name}</h2>
            <p className='tagline'>{beer.tagline}</p>
            <p className='description'>{beer.description}</p>
            <div className='buttons'>
                <button className='more-info'>more info <ArrowRightAltIcon/></button>
                <button className='edit'>edit</button>
            </div>
            <hr />
            <p className='date'>First brewed on: <span>{`${month}, ${year}`}</span></p>
        </div>
    </div>
  )
}