import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-[160px] md:py-[80px] sm:py-12 text-white relative bg-cover bg-bottom' style={{ backgroundColor: "#442808", backgroundImage: "url(/assets/fotter_image.png)" }}>
            <span className='absolute top-0 left-0 w-full h-full bg-[#442808] opacity-35'></span>
            <div className="container z-10 relative">
                <div className='flex md:grid md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-10 flex-wrap'>
                    <div className='w-1/3 md:w-full'>
                        <h1 className="mb-5 text-xxl font-clicker text-[35px] leading-none">Bean Scene</h1>
                        <p className='mb-5 text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <ul className='flex gap-5'>
                            <li><Image src={"/assets/facebook.svg"} width={24} height={24} alt="facebook" /></li>
                            <li><Image src={"/assets/instagram.svg"} width={24} height={24} alt="facebook" /></li>
                            <li><Image src={"/assets/youtube.svg"} width={24} height={24} alt="facebook" /></li>
                            <li><Image src={"/assets/twitter.svg"} width={24} height={24} alt="facebook" /></li>
                        </ul>
                    </div>
                    <div className='flex-1 md:w-1/2'>
                        <h2 className='font-bold text-[26px] leading-9 mb-14 md:mb-5'>About</h2>
                        <ul className='*:text-md *:leading-[42px]'>
                            <li>Menu</li>
                            <li>Features</li>
                            <li>News & Blogs</li>
                            <li>Help & Supports</li>
                        </ul>
                    </div>
                    <div className='flex-1 md:w-1/2 md:flex-auto'>
                        <h2 className='font-bold text-[26px] leading-9 mb-14 md:mb-5'>Company</h2>
                        <ul className='*:text-md *:leading-[42px]'>
                            <li>How we work</li>
                            <li>Terms of service</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className='flex-1 md:w-1/2 md:flex-auto'>
                        <h2 className='font-bold text-[26px] leading-9 mb-14 md:mb-5'>Contact Us</h2>
                        <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                        <ul className='*:text-md *:leading-[42px]'>
                            <li>+1 202-918-2132</li>
                            <li>beanscene@mail.com</li>
                            <li>www.beanscene.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer