import Image from 'next/image'
import React from 'react'

const CoffeeList = () => {
    const coffeeList = [
        {
            image: "/assets/coffee_04.png",
            title: "Cappuccino",
            price: "$8.50",
        },
        {
            image: "/assets/coffee_03.png",
            title: "Chai Latte",
            price: "$8.50",
        },
        {
            image: "/assets/coffee_02.png",
            title: "Macchiato",
            price: "$8.50",
        },
        {
            image: "/assets/coffee_01.png",
            title: "Expresso",
            price: "$8.50",
        },
    ]

    return (
        <section className='py-20'>
            <div className="container">
                <div className='text-center mb-8'>
                    <h2 className="text-xxl font-bold text-[#603809] mb-4">Enjoy a new blend of coffee style</h2>
                    <p>
                        Explore all flavors of coffee with us. There is always a new cup worth experiencing.
                    </p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-8">
                    {
                        coffeeList.map((item, i) => {
                            return (
                                <div className="bg-white border border-[#F9C06A6B] relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full aspect-square object-cover mb-4"
                                        width={280}
                                        height={222}
                                    />
                                    <div className='py-4 pb-11 text-center'>
                                        <h3 className="text-lg font-bold text-[#603809]">{item.title}</h3>
                                        <p>Coffee with Milk, $5.50</p>
                                        <p className='text-[#603809] font-bold'>{item.price}</p>
                                    </div>

                                    <button className="bg-[#F9C06A] text-white font-semibold py-2 px-4 rounded-3xl absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2">
                                        Order Now
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default CoffeeList