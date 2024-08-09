import React from 'react'

const Banner = () => {
    return (
        <section className="h-screen bg-cover relative flex items-center" style={{ backgroundImage: "url(/assets/coffee_image.jpg)" }}>
            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-[#1e1e1e] opacity-35'></span>
            <div className="container relative z-10 text-white">
                <p className='text-lg'>We’ve got your morning covered with</p>
                <h1 className="text-[220px] leading-[290px] mb-4 font-clicker md:text-[150px] md:leading-[170px] sm:text-[100px] sm:leading-none">Coffee</h1>
                <p className="max-w-lg">
                    It is best to start your day with a cup of coffee. Discover the
                    best flavours coffee you will ever have. We provide the best
                    for our customers.
                </p>
                <button className="mt-6 text-center justify-center font-bold w-[120px] h-12 rounded-3xl text-[#1e1e1e] bg-[#F9C06A]">
                    Order Now
                </button>
            </div>
        </section>
    )
}

export default Banner