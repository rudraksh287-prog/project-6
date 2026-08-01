// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";


// const handler = NextAuth({

//     providers:[
//         GitHubProvider({
//             clientId: process.env.GITHUB_ID,
            
//             clientSecret: process.env.GITHUB_SECRET,
//         })
//     ],

// });

// console.log(process.env.GITHUB_ID)
// export {handler as GET, handler as POST};

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDb from "@/db/connnectDb";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],

  callbacks: {
    // async signIn({ user, account,profile,email,credentials }) {
    //   await connectDb()
    //   if(account.provider=="github"){
        
    //     const currentUser= await User.findOne({email: user.email})
    //     if(!currentUser){
    //       const newUser= new User({
    //         email: user.email,
    //         username: user.email.split("@")[0]
    //       })
    //       await newUser.save()
         
    //     }
        
    //     return true
    //   }

    // },
    async signIn({ user, account }) {
  try {
    await connectDb();

    if (account.provider === "github") {
      const currentUser = await User.findOne({
        email: user.email,
      });

      if (!currentUser) {
        await User.create({
          email: user.email,
          username: user.email.split("@")[0],
        });
      }
    }

    return true;
  } catch (err) {
    console.error("SIGN IN ERROR:", err);
    return false;
  }
},
    async session({session,user,token}){
      await connectDb()
      const dbUser= await User.findOne({email: session.user.email})
      session.user.name=dbUser.username
      return session

    },
  }
});

export const { GET, POST } = handlers;