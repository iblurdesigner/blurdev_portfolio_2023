'use client'
import UseAnimations from 'react-useanimations'
import download from 'react-useanimations/lib/download'

const AnimateDownload = () => {
    'use client'
    return (
      <UseAnimations
        animation={download}
        size={36}
        fillColor='#6d57f3'
        autoplay={true}
        loop={true}
      />
    )
}

export default AnimateDownload