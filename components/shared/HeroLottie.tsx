"use client"

import Lottie from 'react-lottie-player'
import Hero2  from '../../public/assets/hero2.json'

const HeroLottie = () => {
  return (
    <>
    <Lottie
        loop
        animationData={Hero2}
        play
        className="sm:max-w-[70vh] max-w-[40vh] object-contain object-center overflow-hidden "
    />
    </>
  )
}

export default HeroLottie