import React from 'react'
import Banner_bg from '../../../assets/Banner-bg.jpg'
const Banner = () => {
    const divStyle = {
        backgroundSize: 'cover',
        backgroundImage: `url(${Banner_bg})`,
        backgroundPosition:'bottom',
       
        /* other background properties */
      };
    return (
        <div className="hero min-h-screen" style={divStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold text-gradient-to-r from-purple-700 via-purple-500 to-purple-700">Learn New Things Daily</h1>
                    <p className="mb-5 italic text-gray-300">Ready to learn? Get acccess your desire course, start learning with us</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
