/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CategoryItem } from '../types'
import { IoCaretDown } from 'react-icons/io5'

const FilterCategory = ({ title, options }: { title: string, options: CategoryItem[] }) => {
  const [selected, setSelected] = useState({
    name: 'Category',
    id: 0
  });

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.name}</span>
            <IoCaretDown className='ml-4 object-contain' />
          </Listbox.Button>

          <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
              <Listbox.Options
                className='custom-filter__options'
              >
                {options.map((option) => (
                  <Listbox.Option
                    key={option.name}
                    value={option}
                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-primary-blue' : 'text-gray-900'
                    }`}
                  >
                    {({ selected }) => (
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.name}
                      </span>
                    )}

                  </Listbox.Option>
                ))}

              </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default FilterCategory;