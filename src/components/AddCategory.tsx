import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { IoCloseCircle } from 'react-icons/io5';
import CustomButton from './CustomButton';
import useInput from '../hooks/useInput';
import { AddCategoryProps } from '../types';

const AddCategory = ({ isOpenAddCategory, closeModalAddCategory, addCategory }: AddCategoryProps) => {
   const [name, onNameChange] = useInput('');

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
                              className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                              onClick={closeModalAddCategory}
                           >
                              <IoCloseCircle />
                           </button>

                           <div>
                              <form className="register-input">
                                 <div>
                                    <label>Category</label>
                                    <input
                                       value={name}
                                       onChange={onNameChange}
                                       placeholder="Add Category"
                                       className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
                                    />
                                 </div>
                                 
                                 <div className='flex gap-2'>
                                    <CustomButton
                                       title='Cancel'
                                       textStyles='text-xl text-white'
                                       containerStyles='bg-orange-500 w-full rounded'
                                       handleClick={() => {
                                          closeModalAddCategory()
                                       }}
                                    />
                                    <CustomButton
                                       title='Save'
                                       textStyles='text-white text-xl'
                                       containerStyles='bg-red-500 w-full rounded'
                                       handleClick={() => {
                                          addCategory(name)
                                          closeModalAddCategory()
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

export default AddCategory