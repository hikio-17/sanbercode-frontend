import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { IoCloseCircle } from 'react-icons/io5';
import CustomButton from './CustomButton';
import { BookDetailProps } from '../types';

const CarDetail = ({ isOpen, closeModal }: BookDetailProps) => {
   return (
      <div className='h-full'>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal} >
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                     >
                        <Dialog.Panel className="relative w-full max-w-lg max-h-[95vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                           <button
                              type="button"
                              className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                              onClick={closeModal}
                           >
                              <IoCloseCircle />
                           </button>
                           
                           <div>
                              <img src="harry-potter.jpg" alt="book" style={{ height: '40%'}} className='w-full' />
                              
                              <h3 className='text-2xl font-extrabold mt-5'>Harry Potter and the Chamber of Secrets</h3>
                              <div className='my-4'>
                                 <h5 className='text-gray-400'>Description</h5>
                                 <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero esse dolorum veritatis ab pariatur ut consequuntur optio temporibus aperiam. Ut error quae tempore quibusdam sunt neque maxime quis ducimus?</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Release year</h5>
                                 <p>1988</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Total Page</h5>
                                 <p>300 hal</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Price</h5>
                                 <p>$ 30,00</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Category</h5>
                                 <p>Fantasy</p>
                              </div>
                           </div>

                           <div className='flex gap-2'>
                              <CustomButton 
                                 title='Edit'
                                 textStyles='text-xl text-white'
                                 containerStyles='bg-orange-500 w-full rounded'
                              />
                              <CustomButton 
                                 title='Delete'
                                 textStyles='text-white'
                                 containerStyles='bg-red-500 w-full rounded'
                              />
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </div>
   )
}

export default CarDetail