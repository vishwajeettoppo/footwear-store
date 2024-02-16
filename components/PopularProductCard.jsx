import { star } from '@/public/icons'
import Image from 'next/image'
import React from 'react'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image src={imgURL} alt='' height={300} width={300}/>
      <div className=' mt-8 flex justify-start gap-2.5 items-center'>
        <Image src={star} alt='' height={25} width={25}/>
        <p className=' font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className=' mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard