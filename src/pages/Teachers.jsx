/* eslint-disable no-unused-vars */
import React from 'react'
import NoTeachers from '../component/NoTeachers'

function Teachers() {
  return (
    <div>
        <div className="mx-auto max-w-7xl px-10 sm:px-6 lg:px-8">{/* Content goes here */}
            <div className='flex justify-between items-center' >
            <div className="text-[#4F4F4F] font-medium">
                <h3>Teachers</h3>
            </div>

            <div className="inline-flex items-center  gap-4 ">
                <p className='text-[#2671B1] font-semibold text-sm'>Export CSV</p>
                <button className='bg-[#509CDB] rounded-md px-6 py-3 font-semibold text-white' >Add Teacher</button>
            </div>

        </div>
        <NoTeachers/>
        </div>
 </div>
  )
}

export default Teachers