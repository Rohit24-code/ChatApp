import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex mt-2'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='text-bold label-text'>male</span>
                    <input type="checkbox" className='checkbox border-slate-900' />
                </label>
            </div>


            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='text-bold label-text'>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900' />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
