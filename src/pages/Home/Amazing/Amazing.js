import React from 'react';

const Amazing = () => {
    return (
        <div className='mb-10'>
            <div className='lg:pl-20 lg:pr-20 mt-10 pl-5 pr-5'>
                <div className='container mx-auto'>
                    <section className="flex items-center w-full justify-center">
                        <div className="bg-gray-100 lg:flex   rounded-2xl shadow-lg max-w-full p-5 items-center">
                            <div className="md:w-1/2 px-8 md:px-16">
                                <h1 className=' mb-5 text-xl font-bold text-justify'>Everything you need to build <span className=' text-red-600'>an amazing resale website.</span></h1>
                                <h1> Human life is like a moving car where once the car gets stuck in a jam, there is no chance to reverse the car.</h1>
                            </div>
                            <div className="md:block   w-full  lg:w-1/2">
                                <img className="rounded-2xl w-full h-fuu" alt='' src='https://i.ibb.co/ncc12mn/car-drawing.jpg' />
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Amazing;