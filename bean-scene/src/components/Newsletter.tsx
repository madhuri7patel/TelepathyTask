import Image from 'next/image'
import React from 'react'

const Newsletter = () => {
    return (
        <section className='py-20 text-white relative bg-cover' style={{ backgroundImage: "url(/assets/newsletter.png)" }}>
            <span className='absolute top-0 left-0 w-full h-full opacity-80 bg-[#603809] inline-block'></span>
            <div className="container relative z-10 text-center">
                <h2 className='text-xxl font-bold mb-4'>Subscribe to get the Latest News</h2>
                <p className='mb-7'>Don’t miss out on our latest news, updates, tips and special offers</p>
                <form className='relative max-w-[650px] mx-auto h-16'>
                    <input type="text" placeholder='Enter your mail' className='w-full h-full p-5 focus:outline-none text-black' />
                    <button type='submit' className='absolute z-20 bg-[rgba(249,192,106,0.62)] top-0 right-0 h-full w-[140px] flex items-center justify-center text-[#603809] font-bold text-lg'>Subscribe</button>
                </form>
            </div>
            <Image
                src={"/assets/pngwing_1.png"}
                alt="Coffee Beans"
                className="absolute -bottom-[60px] left-0 w-[300px]"
                width={444}
                height={358}
            />
            <Image
                src={"/assets/pngwing_2.png"}
                alt="Coffee Beans"
                className="absolute -bottom-[60px] right-0 w-[300px]"
                width={444}
                height={358}
            />
        </section>
    )
}

export default Newsletter