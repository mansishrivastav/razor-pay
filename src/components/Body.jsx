import React from "react";
import { RiLoopRightFill, MdArrowRightAlt, IoCheckmarkCircle } from "../utils/imports";

const Body = () => {
  return (
    <div className="flex flex-col items-start mx-48 text-left">
      <div className="flex flex-col text-gray-400 w-full py-2">
        <div className="flex items-center w-full">
          <h1 className="text-sm flex items-center">
            RazorpayX Lite&nbsp;
            <span className="text-xs">as of a few seconds ago</span>
            &nbsp;
            <RiLoopRightFill />
          </h1>
          <span className="border-r border-gray-600 h-6 inline-block align-middle mx-2"></span>
          <p className="text-blue-600 text-sm cursor-pointer">+ Add balance</p>
        </div>
        <p className="flex items-center text-xs leading-8 mt-1">
          &#8377;<span className="text-xl text-white mx-1">100</span>.09
        </p>
      </div>
      <div className="flex text-gray-400 border border-dotted border-gray-500 p-4 w-full">
        <p className="text-md">
          <span className="mr-2">🎉</span>You're all caught up.
          <span className="text-xs">
            There are no more items pending on you.
          </span>
        </p>
      </div>
      <div className="text-white mt-4">
        <p className="text-sm">
          Onboarding update <span className="text-gray-400 text-xs">(1)</span>
        </p>
        <div>
          <div className="flex justify-between gap-4 border-none bg-slate-900 mt-2 py-6 px-4 rounded-md">
            <figure className="w-16">
              <img src="/images/bank.png" alt="bank" />
              <figcaption className="uppercase text-xs mt-3 text-center ">
                current account
              </figcaption>
            </figure>
            <div>
              <h2 className="text-lg font-medium">
                Open your RazorpayX account
              </h2>
              <p className="text-xs text-gray-400">
                Don't let bankache come in the way of your growth. Apply for
                your RazorpayX account with a few basic details.
              </p>
              <div className="flex justify-between gap-2 my-2">
                <input type="range" className="custom-range " />
                <input type="range" className="custom-small-range " />
                <input type="range" className="custom-small-range " />
                <input type="range" className="custom-small-range " />
              </div>
              <button className="flex items-center bg-blue-600 px-3 py-2 text-xs">
                Start application
                <span className="ml-2">
                  <MdArrowRightAlt />
                </span>
              </button>
            </div>
          </div>
          <div>
           
           
          </div>
        </div>
        <div className="border-none bg-slate-900 mt-4 py-8 px-6 rounded-md">
  <div className="flex justify-between gap-4">
    <div className="w-full">
      <div className="-mt-12">
        <input type="range" className="custom-range" />
      </div>
      <div className="flex justify-between items-start">
      <h2 className="text-lg font-medium mb-2">Amazon Instant Settlements</h2>
        <div >
         
          <p className="flex items-center text-sm text-gray-400">
            <span className="w-4 h-4 border mr-3 bg-blue-600 rounded-full inline-block"></span>
            Let's get you started
          </p>
          <p className=" text-gray-400 text-xs mb-2">
            Complete your application and get instant access to your Amazon payouts.
          </p>
          <button className="flex items-center bg-blue-600 px-3 py-1 text-xs">Apply now</button>
        </div>
      </div>
    </div>
  </div>

  <div className=" ">
    <input type="range" className="custom-range" />
  </div>

  <div className="flex justify-between items-start ">
    <h2 className="text-xl font-medium">Creating payouts in Live mode</h2>
    <div className="flex flex-col">
      <p className="flex items-center text-xs text-gray-400 mb-2">
        <IoCheckmarkCircle className="text-blue-200 text-lg mr-2" />
        <span className="font-bold">Add balance</span> &nbsp;to create payouts in Live mode
      </p>
      <p className="text-sm text-white ">
        <span className="w-4 h-4 border mr-3 bg-blue-600 rounded-full inline-block "></span>
        Create payout
      </p>
      <p className="text-gray-400 text-xs mb-2">There are multiple ways in which you can create the first payout:</p>
      <div className="flex  gap-3">
      <button className=" bg-blue-600 px-3 py-1 text-xs">Make a Payout</button>
      <button className="bg-gray-700 px-3 py-1 text-white text-xs">Show Apps for Me</button>
          <button className="bg-gray-700 px-3 py-1  text-white text-xs">API Payouts</button>
      </div>
    </div>
  </div>
  
</div>
<div className="flex justify-between items-center mt-6 gap-10  bg-slate-900 p-4 rounded-lg ">
  <figure className="w-16">
  <img src="/images/zoho.png" alt="zoho" />
  </figure>
        <div className="text-sm">
          <h2 className="font-medium">Automate Bookkeeping For Payouts</h2>
          <p className="text-xs text-gray-400">Close your books 60% faster and with better accuracy by automating bookkeeping for your Payouts.</p>
          
        </div>
        <button className="border border-blue-600 py-2 px-1 bg-transparent text-xs inline-block w-40  text-white">Connect Zoho Books</button>
      </div>
      </div>
    </div>
  );
};

export default Body;
