import React from 'react'
import { Link } from 'react-router-dom';
import StepProgress from '../components/stepProgress'

export default function zWelcome() {
    return (
        <><div className='relative' >
            <div className='flex flex-col justify-center items-center h-[90vh]'>
                <h1 className='text-[64px]'>Welcome</h1>
                <img className='!pb-10' src="/images/Ellipse.png" alt="welcome-image" />
                <Link to="/telsignin">
                    <button
                        className="w-[150px] cursor-pointer h-[40px] rounded-[25px] text-white font-bold capitalize bg-[#63d441] hover:bg-[#57c036] transition"
                    >
                        next
                    </button>
                </Link>
            </div>

            <div className='flex justify-center'>
                <StepProgress currentStep={1} />
            </div>
        </div>
        </>
    )
}
