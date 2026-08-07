import React from 'react'
import PaymentPage from '@/components/PaymentPage'

const Page = async ({ params }) => {
      const { username } = await params;

    return (
        <>

           <PaymentPage username =
        //    {params.username}
           {username}
           />
        </>
    )
}

export default Page
