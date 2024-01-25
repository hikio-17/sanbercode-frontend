import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react'
import { IoCloseCircle, IoPencilOutline, IoRemoveCircle } from 'react-icons/io5';
import CustomButton from './CustomButton';
import useInput from '../hooks/useInput';
import { AddCategoryProps } from '../types';

const AddCategory = ({ isOpenAddCategory, closeModalAddCategory, addCategory, categories, removeCategory }: AddCategoryProps) => {
   const [name, onNameChange, setName] = useInput('');
   const [isOpen, setIsOpen] = useState(true);
   const [currentCategory, setCurrenCategory] = useState({});

   function HandleEditCategory(category) {
      setCurrenCategory(category)
   }

   function closeModal() {
      setIsOpen(false)
   }

   function openModal() {
      setIsOpen(true)
   }

   return (
      <div className='h-full'>
         <Transition appear show={isOpenAddCategory} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModalAddCategory} >
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
                              className='absolute top-2 right-2 text-red-500 text-2xl z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                              onClick={closeModalAddCategory}
                           >
                              <IoCloseCircle />
                           </button>

                           <div>
                              <form className="register-input flex justify-between">
                                 <div className='w-full'>
                                    <label className='mb-7 text-gray-400'>Category</label>
                                    <input
                                       value={name}
                                       onChange={onNameChange}
                                       placeholder="Add Category"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>

                                 <div className='grid place-content-center mt-6 h-10 ms-3'>
                                    <CustomButton
                                       title='Save'
                                       textStyles='text-white text-xl'
                                       containerStyles='bg-blue-500 w-50 rounded'
                                       handleClick={() => {
                                          addCategory(name)
                                          setName('')
                                       }}
                                    />
                                 </div>
                              </form>


                              <div className='mt-5'>
                                 {categories.length > 0 ? (
                                    <table className='min-w-full bg-white border border-gray-300'>
                                       <thead className='bg-blue-300'>
                                          <tr className='text-center text-xl'>
                                             <th>Name</th>
                                             <th>Action</th>
                                          </tr>
                                       </thead>

                                       <tbody className='mt-10'>
                                          { categories.map((category) => (
                                             <tr key={category.id} className='text-center h-10'>
                                                <td>{category.name}</td>
                                                <td className='flex justify-center gap-3 place-content-center mt-2'>
                                                   <IoRemoveCircle
                                                      className='cursor-pointer text-red-600 text-2xl'
                                                      onClick={() => removeCategory(category.id)}
                                                   />
                                                   <IoPencilOutline
                                                      className=' text-orange-500 text-2xl cursor-pointer'
                                                      onClick={() => {
                                                         HandleEditCategory(category)
                                                         openModal()
                                                      }}
                                                   />
                                                </td>
                                             </tr>
                                          ))}
                                       </tbody>
                                    </table>
                                 ) : (
                                    <h4 className='text-center text-xl text-gray-400'>Oppss not found category</h4>
                                 )}
                              </div>
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

export default AddCategory