import { useEffect, useState } from 'react'
import starFull from '/src/assets/logo/starFull.svg'
import starEmpty from '/src/assets/logo/starEmpty.svg'
import './rating.scss'

function Rating({ rating }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const newStars = [1, 2, 3, 4, 5].map((star) => {
      const isFilled = star <= rating
      const icon = isFilled ? <img src={starFull} /> : <img src={starEmpty} />
      return (
        <span className="ratingStar" key={star}>
          {icon}
        </span>
      )
    })
    setStars(newStars)
  }, [])

  return <div className="ratingContainer">{stars}</div>
}

export default Rating
