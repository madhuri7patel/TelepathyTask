import Image from 'next/image'
import React from 'react'

const Feedback = () => {
    return (
        <section className='py-20 relative pb-40'>
            <div className="container relative z-10">
                <div className='text-center mb-8'>
                    <h2 className="text-xxl font-bold text-[#603809] mb-4">Our coffee perfection feedback</h2>
                    <p>
                        Our customers has amazing things to say about us
                    </p>
                </div>

                <div className="bg-[#FAF3ED] mt-10 py-28 px-32 md:p-20 sm:p-10 rounded-lg shadow-lg relative max-w-[1000px] mx-auto">
                    <div className="text-[100px] text-[#6B3F0D] absolute top-[-40px] left-[-20px]">“</div>
                    <p className="text-md text-[#6B3F0D] leading-9 text-center font-semibold">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."}</p>
                    <div className="text-xl font-semibold mt-6 text-[#6B3F0D] text-center">{"Jonny Thomas"}</div>
                    <div className="text-md mt-1 text-[#A16D3A] text-center">{"Project Manager"}</div>
                    <Image
                        src={"/assets/feedback_user.jpeg"}
                        width={112}
                        height={112}
                        alt={'name'}
                        className="rounded-2xl absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 mt-6 mx-auto object-cover w-[112px] aspect-square"
                    />
                    <div className="flex justify-between w-[105%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:w-full">
                        <button className="bg-[#F9A826] p-4 rounded-lg shadow-md">
                            <span className=" text-2xl font-bold">←</span>
                        </button>
                        <button className="bg-[#F9A826] p-4 rounded-lg shadow-md">
                            <span className=" text-2xl font-bold">→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 transform -translate-y-16 md:hidden">
                <Image src="/assets/coffee_blast_01.png" width={498} height={272} alt="Coffee Splash" />
            </div>
            <div className="absolute bottom-0 left-0 z-30 md:hidden">
                <Image src="/assets/coffee_blast_02.png" width={498} height={272} alt="Coffee Splash" />
            </div>
        </section>
    )
}

export default Feedback