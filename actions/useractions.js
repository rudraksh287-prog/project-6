"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    // console.log("KEY_ID:", process.env.KEY_ID);
// console.log("KEY_SECRET:", process.env.KEY_SECRET);
  await connectDb();

  var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

let options={
    amount: Number.parseInt(amount)
    ,currency: "INR",


}

let x= await instance.orders.create(options)
await Payment.create({oid: x.id, amount:amount ,to_user: to_username, name:paymentform.name, message: paymentform.message})
return x
}



export const fetchuser = async (username) => {
  await connectDb();
let u=await User.findOne({ username })
let user= u.toObject({flattenObjectIds: true})
return user
  // const u = await User.findOne({ username }).lean();

  // return JSON.parse(JSON.stringify(u));
};

export const fetchpayments = async (username) => {
    // await connectDb()
    // // find all payments sorted by decreasing order of amount and flatten object ids
    // let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
    // return p


    await connectDb()

    let p = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(10)
        .lean()

    return p.map(payment => ({
        ...payment,
        _id: payment._id.toString(),
    }))
}


export const updateProfile = async (data, oldusername) => {
  await connectDb();

  const ndata = Object.fromEntries(data);

  if (oldusername !== ndata.username) {
    const existing = await User.findOne({ username: ndata.username });

    if (existing) {
      throw new Error("Username already exists");
    }
  }
console.log("ndata:", ndata);
  await User.updateOne(
    { email: ndata.email },
    { $set: ndata }
  );
};