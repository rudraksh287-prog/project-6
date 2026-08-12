"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
  // console.log("KEY_ID:", process.env.KEY_ID);
  // console.log("KEY_SECRET:", process.env.KEY_SECRET);

  await connectDb();

  let user = await User.findOne({ username: to_username })
  const secret = user.razorpaysecret

  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: secret,
  });

  let options = {
    amount: Number.parseInt(amount)
    , currency: "INR",


  }

  let x = await instance.orders.create(options)
  await Payment.create({ oid: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message })
  return x
}



export const fetchuser = async (username) => {
  await connectDb();
  let u = await User.findOne({ username })
  let user = u.toObject({ flattenObjectIds: true })
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
    let u = await User.findOne({ username: ndata.username })
    if (u) {
      return { error: "Username already exists" }
    }
    await User.updateOne(
      // {email: ndata.email}, ndata
      { username: oldusername },
      { $set: ndata }
    )
    // Now update all the usernames in the Payments table 
    await Payment.updateMany(
      // {to_user: oldusername}, {to_user: ndata.username}
      { to_user: oldusername },
      { $set: { to_user: ndata.username } }
    )


  }
  else {


    await User.updateOne(
      // {email: ndata.email}, ndata
      { username: oldusername },
      { $set: ndata }
    )
  }
  // if (oldusername !== ndata.username) {
  //   const existing = await User.findOne({ username: ndata.username });

  //   if (existing) {
  //     throw new Error("Username already exists");
  //   }
  // }
  // console.log("ndata:", ndata);
  // await User.updateOne(
  //   { email: ndata.email },
  //   { $set: ndata }
  // );

  // await User.updateOne(
  //   { username: oldusername },
  //   { $set: ndata }
  // );
};