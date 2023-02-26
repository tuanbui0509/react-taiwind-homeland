import React from 'react';
import { housesData } from '../data'
import { useParams, Link } from 'react-router-dom'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find(house => {
    return house.id === parseInt(id);
  })
  console.log(house);
  return <section>
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='lg:text-2xl font-semibold'>{house.name}</h2>
          <h2 className='text-lg mb-4'>{house.address}</h2>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3'>{house.type}</div>
          <div className='bg-violet-700 rounded-full text-white px-3'>{house.country}</div>
        </div>
        <div className='text-3xl font-semibold text-violet-600'>${house.price}</div>
      </div>
      <div className='flex flex-col lg:flex-row items-start gap-8'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt='' />
          </div>
          <div className='flex gap-x-6 text-violet-600 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div>{house.surface}</div>
            </div>
          </div>
          <div>{house.description}</div>
        </div>
        <div className='min-w-[370px] flex-1 bg-white w-full mb-8 border 
        border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex flex-1 items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 border border-gray-300 rounded-full p-1'>
              <img src={house.agent.image} alt='' />
            </div>
            <div>
              <div className='font-bold text-lg'>{house.agent.name}</div>
              <Link to='/' className='text-violet-700 text-sm'>View Listing</Link>
            </div>
          </div>
          {/* Form */}
          <form className='flex flex-1 flex-col gap-y-4'>
            <input type='text' className='border border-gray-300 focus:border-violet-700
            outline-none rounded w-full text-sm p-4 h-14' placeholder='*Name' />
            <input type='text' className='border border-gray-300 focus:border-violet-700
            outline-none rounded w-full text-sm p-4 h-14' placeholder='*Email' />
            <input type='text' className='border border-gray-300 focus:border-violet-700
            outline-none rounded w-full text-sm p-4 h-14' placeholder='*Phone' />
            <textarea className='border border-gray-300 focus:border-violet-700
            outline-none rounded w-full text-sm p-4 h-36 text-gray-400' placeholder='*Message' />
            <div className='flex gap-x-2'>
              <button className='bg-violet-600 hover:bg-violet-800 transition text-white text-sm p-4 flex-1 rounded-lg'>Send message</button>
              <button className='bg-green-500 hover:bg-green-600 transition text-white text-sm p-4 flex-1 rounded-lg'>Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>;
};

export default PropertyDetails;
