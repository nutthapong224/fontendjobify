import React from 'react' 


import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";


const links = [
  {
    text: "add job",
    path: "/dashboard/add-job",
    icon: <FaWpforms />,
  },
  {
    text: "all jobs",
    path: "/dashboard/all-jobs",
    icon: <MdQueryStats />,
  },
  {
    text: "stats",
    path: "/dashboard/stats",
    icon: <IoBarChartSharp />,
  },
  {
    text: "profile",
    path: "/dashboard/profile",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "/dashboard/admin",
    icon: <MdAdminPanelSettings />,
  },
]; 


export default links;