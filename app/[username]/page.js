import React from 'react'

const Page = async ({ params }) => {
    const { username } = await params
    return (
        <>

            <div className='cover w-full relative'>
                <img className="w-full h-[350px] object-cover" src="/patreon_banner.gif" alt="" />
                <div className="absolute -bottom-20 right-[46%] border-2 rounded-4xl border-white">
                    <img width={100} height={100} className='rounded-4xl w-[100px] h-[100px] object-cover' src="/catpic.jpg" alt="" />
                </div>
            </div>
            <div className="info flex items-center justify-center gap-2 flex-col my-24 mb-32">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-600'>Creating ANimated ART for Vtt's</div>
                <div className='text-slate-600'>8,787 members . 82 posts . $13,450/release</div>

                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters  w-1/2  bg-slate-900 text-white rounded-lg p-10 ">
                        <h2 className='font-bold text-2xl my-5'>SUPporterS</h2>
                        <ul className='mx-5 text-lg'>
                            <li className='flex gap-2 items-center my-4'>
                                <img width={30} src="/avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> witha message " 👩‍🦰🍑 "
                                </span>
                            </li>
                            <li className='flex gap-2 items-center my-4'>
                                <img width={30} src="/avatar.gif" alt="user avatar" />
                                <span>
                                    rakes donated <span className='font-bold'>$0.5</span> witha message " chalbe lowde"
                                </span>
                            </li>
                            <li className='flex gap-2 items-center my-4'>
                                <img width={30} src="/avatar.gif" alt="user avatar" />
                                <span>
                                    terimkc donated <span className='font-bold'>$40</span> witha message " "
                                </span>
                            </li>
                           
                        </ul>
                    </div>

                    <div className="makepayment  w-1/2 bg-slate-900 text-white rounded-lg p-10">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>

                        <div className="flex  flex-col gap-2">
                            <div>

                                <input
                                    type="text"
                                    className="w-full py-2 px-3 rounded-lg bg-slate-800"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <input
                                type="text"
                                className="w-full  py-2 px-3 rounded-lg bg-slate-800"
                                placeholder="Enter Message"
                            />
                            <input
                                type="text"
                                className="w-full  py-2 px-3 rounded-lg bg-slate-800"
                                placeholder="Enter Amount"
                            />
                            <div className="text-center">

                                <button type="button" className=" w-30 text-white bg-gradient-to-r from-purple-500 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-white font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5 mx-1">PAY</button>
                            </div>

                            {/* <button className="bg-slate-800 p-3 rounded-lg">
                                Pay
                            </button> */}
                        </div>
                        {/* OR CHOOSE FROM THESE AMOUNTs */}
                        <div className=" flex gap-2 mt-5">
                            <button className="bg-slate-800 py-3 px-4 rounded-lg">
                                Pay $10
                            </button>

                            <button className="bg-slate-800 py-3 px-4 rounded-lg">
                                Pay $20
                            </button>

                            <button className="bg-slate-800 py-3 px-4 rounded-lg">
                                Pay $30
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
