// "use client"
// import React, { useEffect, useState } from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from 'next/navigation'
// import { fetchuser, updateProfile } from '@/actions/useractions'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { Bounce } from 'react-toastify';

// const Dashboard = () => {
//     const { data: session, update, status } = useSession()
//     const router = useRouter()
//     const [form, setform] = useState({})

//   //  {alredy commented from here } // useEffect(() => {
//     //     // console.log(session)

//     //     if (!session) {
//     //         router.push('/login')
//     //     }
//     //     else {
//     //         getData()
//     //     }
//     // }, [])

//     // const { data: session, status, update } = useSession() {already commented to here}

// useEffect(() => {
//     if (status === "loading") return

//     if (status === "unauthenticated") {
//         router.push("/login")
//         return
//     }

//     if (status === "authenticated") {
//         getData()
//     }
// }, [status])

//     const getData = async () => {
//         let u = await fetchuser(session.user.name)
//         setform(u)
//     }

//     const handleChange = (e) => {
//         setform({ ...form, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = async (e) => {
//         let a = await updateProfile(e, session.user.name)
//         update()
//         // alert("Profile Updated")
//         toast('Profile Updated', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark"
//             });
//     }





//     return (
//         <>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//             />
//             {/* Same as */}
//             <ToastContainer />
//             <div className='container mx-auto py-5 px-6 '>
//                 <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

//                 <form className="max-w-2xl mx-auto" action={handleSubmit}>

//                     <div className='my-2'>
//                         <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
//                         <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>
//                     {/* input for email */}
//                     <div className="my-2">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
//                         <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>
//                     {/* input forusername */}
//                     <div className='my-2'>
//                         <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
//                         <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>
//                     {/* input for profile picture of input type text */}
//                     <div className="my-2">
//                         <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Profile Picture</label>
//                         <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id="profilepic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>

//                     {/* input for cover pic  */}
//                     <div className="my-2">
//                         <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cover Picture</label>
//                         <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id="coverpic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>
//                     {/* input razorpay id */}
//                     <div className="my-2">
//                         <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Razorpay Id</label>
//                         <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>
//                     {/* input razorpay secret */}
//                     <div className="my-2">
//                         <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Razorpay Secret</label>
//                         <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name='razorpaysecret' id="razorpaysecret" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>

//                     {/* Submit Button  */}
//                     <div className="my-6 ">
//                         <button type="submit" className="block w-60 p-2 text-white bg-blue-500 rounded-2xl hover:bg-blue-600 focus:ring-blue-500 focus:ring-2 focus:outline-none   dark:focus:ring-black font-medium text-sm">Save</button>
//                     </div>
//                 </form>


//             </div>
//         </>
//     )
// }

// export default Dashboard
"use client"

import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuserByEmail, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Dashboard = () => {

    const { data: session, update, status } = useSession()
    const router = useRouter()

    const [form, setform] = useState({})
    const [saving, setsaving] = useState(false)

    useEffect(() => {

        if (status === "loading") return

        if (status === "unauthenticated") {
            router.push("/login")
            return
        }

        if (status === "authenticated") {
            getData()
        }

    }, [status])


    const getData = async () => {

    if (!session?.user?.email) return

    const u = await fetchuserByEmail(session.user.email)

    if (u) {
        setform(u)
    }
}

    const handleChange = (e) => {

        setform({
            ...form,
            [e.target.name]: e.target.value
        })

    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        if (saving) return

        setsaving(true)

        try {

            const oldusername = session.user.name

            const formData = new FormData()

            Object.entries(form).forEach(([key, value]) => {

                if (value !== undefined && value !== null) {
                    formData.append(key, value)
                }

            })

            const result = await updateProfile(
    formData,
    session.user.email
)

            if (result?.error) {

                toast.error(result.error)

                setsaving(false)

                return
            }

            // Update local dashboard immediately
            setform(prev => ({
                ...prev,
                username: result.username
            }))

            // Update NextAuth session
            await update({
                name: result.username
            })

            toast.success('Profile Updated')

        } catch (error) {

            console.error("UPDATE PROFILE ERROR:", error)

            toast.error("Something went wrong while updating profile")

        } finally {

            setsaving(false)

        }
    }


    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className='container mx-auto py-5 px-6'>

                <h1 className='text-center my-5 text-3xl font-bold'>
                    Welcome to your Dashboard
                </h1>

                <form
                    className="max-w-2xl mx-auto"
                    onSubmit={handleSubmit}
                >

                    <div className='my-2'>

                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Name
                        </label>

                        <input
                            value={form.name || ""}
                            onChange={handleChange}
                            type="text"
                            name='name'
                            id="name"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                        />

                    </div>


                    <div className="my-2">

                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Email
                        </label>

                        <input
                            value={form.email || ""}
                            onChange={handleChange}
                            type="email"
                            name='email'
                            id="email"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                        />

                    </div>


                    <div className='my-2'>

                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Username
                        </label>

                        <input
                            value={form.username || ""}
                            onChange={handleChange}
                            type="text"
                            name='username'
                            id="username"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                        />

                    </div>


                    <div className="my-2">

                        <label
                            htmlFor="profilepic"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Profile Picture
                        </label>

                        <input
                            value={form.profilepic || ""}
                            onChange={handleChange}
                            type="text"
                            name='profilepic'
                            id="profilepic"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                        />

                    </div>


                    <div className="my-2">

                        <label
                            htmlFor="coverpic"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Cover Picture
                        </label>

                        <input
                            value={form.coverpic || ""}
                            onChange={handleChange}
                            type="text"
                            name='coverpic'
                            id="coverpic"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                        />

                    </div>


                    <div className="my-2">

                        <label
                            htmlFor="razorpayid"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Razorpay Id
                        </label>

                        <input
                            value={form.razorpayid || ""}
                            onChange={handleChange}
                            type="text"
                            name='razorpayid'
                            id='razorpayid'
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                        />

                    </div>


                    <div className="my-2">

                        <label
                            htmlFor="razorpaysecret"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Razorpay Secret
                        </label>

                        <input
                            value={form.razorpaysecret || ""}
                            onChange={handleChange}
                            type="text"
                            name='razorpaysecret'
                            id='razorpaysecret'
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                        />

                    </div>


                    <div className="my-6">

                        <button
                            type="submit"
                            disabled={saving}
                            className="block w-60 p-2 text-white bg-blue-500 rounded-2xl hover:bg-blue-600 font-medium text-sm disabled:bg-gray-400"
                        >
                            {saving ? "Saving..." : "Save"}
                        </button>

                    </div>

                </form>

            </div>

        </>
    )
}

export default Dashboard