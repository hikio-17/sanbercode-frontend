import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5';
import CustomButton from './CustomButton';
import useInput from '../hooks/useInput';
import { AddBookProps } from '../types';

const AddBook = ({ isOpenAdd, closeModalAdd, addBook }: AddBookProps) => {
   const [title, onTitleChange] = useInput('');
   const [image, setImage] = useState();
   const [description, setDescriptionChange] = useState('');
   const [release_year, setReleaseYearChange] = useState(0);
   const [price, onPriceChange] = useInput('');
   const [total_page, setTotalPage] = useState(0);
   const [category, setCategory] = useState(0);

   const book = {
      title, image ,description, release_year, price, total_page, category
   }

   const onAddBook = () => {
      console.log(book);
   }

   const handleFileChange = (event) => {
      console.log(event.target.files[0])
      setImage(event.target.files[0]);
   };

   return (
      <div className='h-full'>
         <Transition appear show={isOpenAdd} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModalAdd} >
               <h1>Edit Book</h1>
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
                              onClick={closeModalAdd}
                           >
                              <IoCloseCircle />
                           </button>

                           <div>
                              <form className="register-input">
                                 <div>
                                    <label>Image</label>
                                    <input
                                       value={image}
                                       onChange={handleFileChange}
                                       type="file"
                                       placeholder="Title"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>
                                 <div>
                                    <label>Title</label>
                                    <input
                                       value={title}
                                       onChange={onTitleChange}
                                       type="text"
                                       placeholder="Title"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>
                                 <div>
                                    <label>Description</label>
                                    <textarea
                                    rows={5}
                                       value={description}
                                       onChange={(e) => setDescriptionChange(e.target.value)}
                                       placeholder="Description"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>
                                 <div>
                                    <label>Release Year</label>
                                    <input
                                       value={release_year}
                                       onChange={(e) => setReleaseYearChange(e.target.value)}
                                       type="number"
                                       placeholder="Description"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>
                                 <div>
                                    <label>Price</label>
                                    <input
                                       value={price}
                                       onChange={onPriceChange}
                                       type="text"
                                       placeholder="Description"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>
                                 <div>
                                    <label>Category</label>
                                    <input
                                       value={category}
                                       onChange={(e) => setCategory(e.target.value)}
                                       name="price"
                                       type="text"
                                       placeholder="Price"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>

                                 <div>
                                    <label>Total Page</label>
                                    <input
                                       value={total_page}
                                       name="Total Page"
                                       onChange={(e) => setTotalPage(e.target.value)}
                                       type="number"
                                       placeholder="Total Page"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>

                                 <div className='flex gap-2'>
                                    <CustomButton
                                       title='Cancel'
                                       textStyles='text-xl text-white'
                                       containerStyles='bg-orange-500 w-full rounded'
                                       handleClick={() => {
                                          closeModalAdd()
                                       }}
                                    />
                                    <CustomButton
                                       title='Save'
                                       textStyles='text-white text-xl'
                                       containerStyles='bg-red-500 w-full rounded'
                                       handleClick={() => {
                                          onAddBook()
                                          closeModalAdd()
                                       }}
                                    />
                                 </div>
                              </form>
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

export default AddBook