'use client'
import UseAnimations from 'react-useanimations'
import arrowDown from 'react-useanimations/lib/arrowDown'

const ArrowDown = () => {
    'use client'
    return (
      <UseAnimations
        animation={arrowDown}
        size={64}
        autoplay={true}
        loop={true}
        strokeColor="#57f3c3"
      />
    )
}

export default ArrowDown