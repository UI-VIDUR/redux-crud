import { Checkbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

export default function CheckboxComp() {
  const [enabled, setEnabled] = useState(true)
  
  console.log(enabled)

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group size-6 rounded-md bg-white p-1 ring-1 ring-gray-400 ring-inset data-[checked]:bg-gray-900 data-[checked]:ring-gray-900 data-[hover]:cursor-pointer block mx-auto"
    >
      <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
    </Checkbox>
  )
}
