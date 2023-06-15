import React from 'react'
import image1 from '../../../assets/image1.jpg'
const LearningCentre = () => {
    return (

        <div className='py-16'>
            <div className="text-center py-10 text-gray-800 shadow">
                <h1 className="text-5xl ">Welcome to the Online Learning Center</h1>
                <div className="border-b w-1/6 h-4 mx-auto border-b-4 border-gray-500 rounded-full"></div>
                <p className='text-gray'>The Online Learning Center is designed to cater to your needs</p>
            </div>

            <div className="card  card-side bg-base-100 grid grid-cols-1 lg:grid-cols-2 px-4 ">
                <img style={{height: '500px'}} className='object-cover  w-full hidden lg:block' src={image1} />
                <div className="card-body py-16">
                    <h2 className="card-title text-3xl py-8">Let us help you unlock your full potential and achieve your educational goals!</h2>
                    <ul className="list-disc space-y-2">
                        <li>Get unlimited access to our top courses</li>
                        <li>Explore a variety of fresh educational topics</li>
                        <li>Find the best qualitfied teacher for you</li>
                        <li>Transform access to education</li>
                    </ul>
                    <button className="rounded-full btn-primary mt-10">Show Courses</button>
                </div>
            </div>


         </div>
    )
}

export default LearningCentre
