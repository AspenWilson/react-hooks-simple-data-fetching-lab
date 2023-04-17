// create your App component here
import React, {useState, useEffect} from 'react'

function App() {
    const [dogImage, setDogImage] = useState([])
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then((data) => {
            setDogImage(data)
            setImageLoaded(true)
        })
    }, [])

    if (!imageLoaded) return <p>Loading...</p>
  return (
    <div>
      <img src={dogImage.message} alt='A Random Dog' />
    </div>
  )
}
export default App