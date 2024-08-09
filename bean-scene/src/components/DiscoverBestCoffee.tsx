import Image from 'next/image'
import React from 'react'

const DiscoverBestCoffee = () => {
    return (
        <section className="py-20 pb-36 relative">
            <div className="container flex items-center z-10 relative flex-wrap sm:flex-col-reverse">
                <div className="w-[40%] md:w-1/2 sm:w-full">
                    <h2 className="text-xxl font-bold mb-9 text-[#603809]">
                        Discover the best coffee
                    </h2>
                    <p className="mb-6">
                        Bean Scene is a coffee shop that provides you with quality coffee that
                        helps boost your productivity and helps build your mood. Having a cup
                        of coffee is good, but having a cup of our coffee is greater. There is
                        no doubt that you will enjoy this coffee more than others you have
                        ever tasted.
                    </p>
                    <button className="mt-6 text-center justify-center font-bold w-[120px] h-12 rounded-3xl text-[#1e1e1e] bg-[#F9C06A]">
                        Learn More
                    </button>
                </div>

                <div className="w-[60%] md:w-1/2 sm:w-full">
                    <Image
                        src={"/assets/coffee_beans_01.png"}
                        alt="Coffee Beans"
                        className="object-cover"
                        width={680}
                        height={476}
                    />
                </div>
            </div>
            <Image
                src={"/assets/coffee_blast.png"}
                alt="Coffee Beans"
                className="absolute bottom-0 left-0"
                width={498}
                height={272}
            />
        </section>
    )
}

export default DiscoverBestCoffee