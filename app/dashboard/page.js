// "use client"
// import React from 'react'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
// import Dashboard from '@/components/dashboard'


// const Dashboard = () => {
//   const { data: session, status } = useSession()
//   const router = useRouter()

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/login")
//     }
//   }, [status, router])

//   if (status === "loading") {
//     return <div>Loading...</div>
//   }
//   return (
//     <div>
//       dashboard
//     </div>
//   )
// }

// export default Dashboard




import Dashboard from '@/components/Dashboard'

const DashboardPage = () => {
    return (
        <Dashboard/>
    )
}

export default DashboardPage

export const metadata = {
    title: "Dashboard - MUSE",
  }
   
