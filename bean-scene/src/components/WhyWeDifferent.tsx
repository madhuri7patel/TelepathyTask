import Image from 'next/image'
import React from 'react'

const WhyWeDifferent = () => {
    const services = [
        {
            image: "/assets/services_01.png",
            title: "Supreme Beans",
            subTitle: "Beans that provides great taste"
        },
        {
            image: "/assets/services_02.png",
            title: "High Quality",
            subTitle: "We provide the highest quality"
        },
        {
            image: "/assets/services_03.png",
            title: "Extraordinary",
            subTitle: "Coffee like you have never tasted"
        },
        {
            image: "/assets/services_04.png",
            title: "Affordable Price",
            subTitle: "Our Coffee prices are easy to afford"
        }
    ]

    return (
        <section className="py-20 relative">
            <div className="container z-10">
                <div className='text-center mb-8'>
                    <h2 className="text-xxl font-bold text-[#603809] mb-4">Why are we different?</h2>
                    <p>
                        We don't just make your coffee, we make your day!
                    </p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {
                        services.map((item, i) => {
                            return (
                                <div className="p-10 px-6 text-center border border-solid bg-[rgba(249,192,106,0.1)] hover:bg-[rgba(249,192,106,0.42)] transition-all
                                 ease-in-out">
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="w-24 h-24 mb-4"
                                            width={88}
                                            height={88}
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-[#603809]">
                                                {item.title}
                                            </h3>
                                            <p>{item.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center mt-12">
                    <p className="mb-4">
                        Great ideas start with the process, and that's what helps you
                        achieve that.
                    </p>
                    <h3 className="text-[30px] leading-10 font-bold mb-4 text-[#603809]">
                        Get started today.
                    </h3>
                    <button className="bg-[#F9C06A] font-semibold text-[#1e1e1e] py-3 px-8 rounded-3xl">
                        Join Us
                    </button>
                </div>
            </div>
            <Image
                src={"/assets/coffee_blast_01.png"}
                alt="Coffee Beans"
                className="absolute top-0 right-0 -translate-y-1/2"
                width={498}
                height={272}
            />
        </section>
    )
}

export default WhyWeDifferent