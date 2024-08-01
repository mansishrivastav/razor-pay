import React from "react";
import Logo from '../images/logo.png'
import {
  CiHome,
  MdArrowOutward,
  IoDocumentTextOutline,
  GoPerson,
  TbInvoice,
  LiaStampSolid,
  FiSend,
  BsEnvelopePaper,
  HiOutlineDocumentText,
  MdArrowRightAlt,
} from "../utils/imports";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 p-4">
      <div className="flex items-left justify-start mb-6 ">
        <img src={Logo} alt="logo" className="w-36" />
      </div>
      <nav className="text-white">
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm font-medium hover:text-gray-500"
            >
              <span className="mr-2">
                <CiHome />
              </span>
              Home
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm font-medium hover:text-gray-500"
            >
              <span className="mr-2">
                <MdArrowOutward />
              </span>
              Payouts
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-500"
            >
              <span className="mr-2">
                <IoDocumentTextOutline />
              </span>{" "}
              Account Statement
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-500"
            >
              <span className="mr-2">
                <GoPerson />
              </span>
              Contacts
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-500"
            >
              <span className="mr-2">&#8377;</span> Loans
              <span className="bg-green-600 text-white text-xs font-bold ml-2 px-2 rounded-full">
                
                NEW
              </span>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex flex-col text-sm font-medium hover:text-gray-400"
            >
              <div className="flex items-center">
                <span className="mr-2">
                  <TbInvoice />
                </span>
                <span className="flex-grow">Vendor Payments</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="bg-green-600 text-white text-xs font-bold px-2 rounded-full">
                  NEW
                </span>
                <span className="text-sm text-blue-600 ml-2 flex items-center">
                  Invoice Approvals <MdArrowRightAlt />
                </span>
              </div>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-500"
            >
              <span className="mr-2">
                <LiaStampSolid />
              </span>
              Tax Payments
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-500"
            >
              <span className="mr-2">
                <FiSend />
              </span>
              Payout Links
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-500"
            >
              <span className="mr-2">
                <BsEnvelopePaper />
              </span>
              Payroll
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-500"
            >
              <span className="mr-2">
                <HiOutlineDocumentText />
              </span>
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
