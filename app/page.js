import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-[44vh]">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">
          Buy Me A Chai
          <span><img width={88} src="/tea.gif" alt="" /></span>
        </div>
        <p>A crowdfunding platofrom for creators. Get funded by your fans and followers, Start Now!</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5 mx-1">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-4 py-2.5 text-center leading-5 mx-1">Read More</button>
        </div>
      </div>
      <div className="bg-black opacity-60 h-0.5"></div>

      <div className="text-black container mx-auto pb-22 pt-10">
        <h2 className="text-3xl font-bold text-center my-10">
          Your Fans can buy you a Chai
        </h2>

        <div className="flex gap-5 justify-around">

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/man.gif"
              alt="Man"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/coin.gif"
              alt="Coin"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/group.gif"
              alt="Group"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

        </div>
      </div>

 <div className="bg-black opacity-60 h-0.5"></div>

      <div className="text-black container mx-auto pb-22 pt-10">
        <h2 className="text-3xl font-bold text-center my-10">
          Learn more about US
        </h2>

        <div className="flex gap-5 justify-around">

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/man.gif"
              alt="Man"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/coin.gif"
              alt="Coin"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              width={88}
              src="/group.gif"
              alt="Group"
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

        </div>
      </div>

    </>
  );
}