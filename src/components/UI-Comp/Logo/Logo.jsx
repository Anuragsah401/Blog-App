import React from 'react'

const Logo = () => {
    return (
        <div className="mt-[0.5rem] text-center text-[25px] font-regular text-purple-50 flex justify-center items-center gap-[2rem]">
            <div className="flex-1 h-[2px] bg-white mr-[1rem]"></div>
            <div className=" font-semibold">
                Blog App
            </div>
            <div className="flex-1 h-[2px] bg-white ml-[1rem]"></div>
        </div>
    )
}

export default Logo