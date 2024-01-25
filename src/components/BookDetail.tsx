import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { IoCloseCircle } from 'react-icons/io5';
import CustomButton from './CustomButton';
import { BookDetailProps } from '../types';

const BookDetail = ({ isOpenDetail, closeModalDetail, book, remove, openEdit }: BookDetailProps) => {

   return (
      <div className='h-full'>
         <Transition appear show={isOpenDetail} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModalDetail} >
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
                              onClick={closeModalDetail}
                           >
                              <IoCloseCircle />
                           </button>
                           
                           <div>
                              <img src={`${book.image_url}`} alt="book" style={{ height: '40%'}} className='w-full' />
                              
                              <h3 className='text-2xl font-extrabold mt-5'>{book.title}</h3>
                              <div className='my-4'>
                                 <h5 className='text-gray-400'>Description</h5>
                                 <p className='w-full'>{book.description}</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Release year</h5>
                                 <p>{book.release_year}</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Total Page</h5>
                                 <p>{book.total_page} hal</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Price</h5>
                                 <p>$ {book.price}</p>
                              </div>
                              <div className='flex justify-between my-3'>
                                 <h5 className='text-gray-400'>Category</h5>
                                 <p>{book.category_id}</p>
                              </div>
                           </div>

                           <div className='flex gap-2'>
                              <CustomButton 
                                 title='Edit'
                                 textStyles='text-xl text-white'
                                 containerStyles='bg-orange-500 w-full rounded'
                                 handleClick={() => openEdit()}
                              />
                              <CustomButton 
                                 title='Delete'
                                 textStyles='text-white'
                                 containerStyles='bg-red-500 w-full rounded'
                                 handleClick={() => {
                                    remove(book.id)
                                    closeModalDetail()
                                 }}
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

export default BookDetail