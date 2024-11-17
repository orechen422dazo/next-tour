import React from 'react'
import Image from 'next/image'

// アバターコンポーネント
const AboutPage = () => {
  return (
    <div>
        <Image className='w-20 h-20 rounded-full' src={`/assets/jboy.png`} alt={'俺ちゃん'} width="64" height="64" />
    </div>
  )
}

export default AboutPage