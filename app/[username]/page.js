// import React from 'react'
// import PaymentPage from '@/components/PaymentPage'
// import { notFound } from "next/navigation"
// import connectDb from '@/db/connectDb'
// import User from '@/models/User'


// const Page = async ({ params }) => {
//    const { username } = await params;
//     const checkUser = async () => {
//     await connectDb()
//     let u = await User.findOne({ username: params.username })
//     if (!u) {
//       return notFound()
//     }
//   }
//   await checkUser()

//     return (
//         <>

//            <PaymentPage username =
      
//            {username}
//            />
//         </>
//     )
// }

// export default Page


import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Page = async ({ params }) => {
    const { username } = await params;

    await connectDb();

    const user = await User.findOne({ username });

    if (!user) {
        notFound();
    }

    return (
        <PaymentPage username={username} />
    );
}

export default Page;


export async function generateMetadata({ params }) {
    const { username } = await params;

    return {
        title: `Support ${username} - Get Me A Chai`,
    };
}