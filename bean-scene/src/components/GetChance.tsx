import React from 'react'

const GetChance = () => {
    return (
        <section className='h-[600px] bg-cover bg-bottom flex items-center' style={{ backgroundImage: "url(/assets/get_change_bg.png)" }}>
            <div className="container text-white">
                <div className='max-w-[600px]'>
                    <h2 className="text-xxl font-bold mb-5">Get a chance to have an Amazing morning</h2>
                    <p className="max-w-lg mb-6">
                        It is best to start your day with a cup of coffee. Discover the best flavors coffee you will ever have. We provide the best for our customers.
                    </p>
                    <button className='mt-6 text-center justify-center w-[120px] h-12 rounded-3xl bg-[#F9C06A]'>
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetChance