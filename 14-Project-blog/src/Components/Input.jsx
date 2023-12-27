import React, {forwardRef, useId} from 'react'

const Input = forwardRef(function Input({
    label, 
    type ="text",
    className = "",
    ...props
}, ref){


    const id = useId()
    return (
        <div className='flex w-[33vw] justify-between'>
            {label && <label 
            className=' '
            htmlFor={id}>
                {label}
            </label>
            }
            <input type={type}
                className={`outline-none rounded-md bg-transparent border px-2 ${className}`}
                ref={ref}
                {...props}
                id={id}
            /> 
        </div>
    )
})

export default Input