import React from 'react'
import { FaUserGraduate, FaMapMarkedAlt , FaMoneyBill  } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

const Goals = () => {
  return (
    <div className="mb-2 mx-8">
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-start-3  lg:col-span-2">
          <div className="flex justify-center">
            <div className="">
              <div>
                <h1 className="text-center text-5xl pt-20 pb-4 font-thin text-gray-600 mx-auto ">
                  My Goals
                </h1>
              </div>
              <div className="text-center">
                <p className="flex justify-center font-thin text-gray-600 text-xl">
                  Here are some of the Goals I would love to achive in two years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex align-middle justify-center mx-auto pb-16 pt-8">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 pb-8">
            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-background hover:text-white transition-colors duration-300 ">
              <FaUserGraduate className="text-7xl text-background group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700] pt-5">Earn A masters Degree</h1>
            </div>
            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-background hover:text-white transition-colors duration-300 ">
              <GrUserWorker className="text-6xl text-background group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700] pt-6">Work for a top coding company</h1>
            </div>

            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-background hover:text-white transition-colors duration-300">
              <FaMapMarkedAlt  className="text-6xl text-background group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700]  pt-6">Empower Tech Career Growth</h1>
            </div>

            <div className="h-full shadow-2xl text-center flex flex-col items-center justify-center align-middle py-5 mb-10 group  hover:bg-background hover:text-white transition-colors duration-300">
              <FaMoneyBill  className="text-6xl text-background group-hover:text-white transition-colors duration-300" />
              <h1 className="font-[700]  pt-5">Financial Stability</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals
