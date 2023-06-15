import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBrain, faUserGraduate, faCertificate} from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
    return (
        <div className='grid gap-8 md:grid-cols-2 grid-cols-1 lg:grid-cols-3  px-4 my-10'>
            <div className="card card-side bg-base-100 shadow-lg shadow-cyan-500/80 p-5 border">
                <div className='mt-10'>
                    <span className='text-6xl h-6'> <FontAwesomeIcon icon={faBrain} /></span>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Learn Skills</h2>
                    <p>with unlimited courses</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl shadow-lg shadow-cyan-500/80 p-5 border">
                <div className='mt-10'>
                    <span className='text-6xl h-6'><FontAwesomeIcon icon={faUserGraduate} /></span>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Expert Teachers</h2>
                    <p>Best & highly qualified</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl shadow-lg shadow-cyan-500/80 p-5 border">
                <div className="mt-10">
                    <span className='text-6xl h-6'><FontAwesomeIcon icon={faCertificate} /></span>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Certificates</h2>
                    <p>Value all over the world</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
