/* eslint-disable react/jsx-key */
// import and export constants like imgs ,icons navlinks...

import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoDribbble,
} from "react-icons/bi";
// achievement icons
import { SlGraduation } from "react-icons/sl";
import { FiVideo } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";

export const navLinks = ["home", "about", "support", "platform", "pricing"];

export const achievements = [
  {
    Card: (
      <div className="rounded-xl bg-[#E9F8F3] p-5">
        <SlGraduation size={30} style={{ color: "#1A906B" }} />
      </div>
    ),
    label: "Instructor",
    bg: "#E9F8F3",
    color: "#1A906B",
    number: "300",
  },
  {
    Card: (
      <div className="rounded-xl bg-[#FFFAF5] p-5">
        <FiVideo size={30} style={{ color: "#FFC27A" }} />
      </div>
    ),
    label: "Video",
    bg: "#FFFAF5",
    color: "#FFC27A",
    number: "10,000+",
  },
  {
    Card: (
      <div className="rounded-xl bg-[#FFEEF0] p-5">
        <SlGraduation size={30} style={{ color: "#ED4459" }} />
      </div>
    ),
    label: "Student",
    bg: "#FFEEF0",
    color: "#ED4459",
    number: "20,000+",
  },
  {
    Card: (
      <div className="rounded-xl bg-[#F0F7FF] p-5">
        <SlPeople size={30} style={{ color: "#0075FD" }} />
      </div>
    ),
    label: "Users",
    bg: "#F0F7FF",
    color: "#0075FD",
    number: "1,00,000+",
  },
];

// category icons
import { BsVectorPen } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { TbMicrophone2, TbMusic } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { AiOutlineCamera } from "react-icons/ai";
import { BiData } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

export const categories = [
  { icon: <BsVectorPen size={30} />, label: "Design" },
  { icon: <TiHtml5 size={30} />, label: "Development" },
  { icon: <TbMicrophone2 size={30} />, label: "Marketing" },
  { icon: <HiOutlineBriefcase size={30} />, label: "Business" },
  { icon: <WiSunrise size={30} />, label: "Lifestyle" },
  { icon: <AiOutlineCamera size={30} />, label: "Photography" },
  { icon: <TbMusic size={30} />, label: "Music" },
  { icon: <BiData size={30} />, label: "Data Science" },
  { icon: <TiHtml5 size={30} />, label: "Personal Development" },
  { icon: <TiHtml5 size={30} />, label: "Health & Fitness" },
  { icon: <MdAttachMoney size={30} />, label: "Finance" },
  { icon: <FaUniversity size={30} />, label: "Teaching" },
];

export const footerLinks = [
  {
    title: "Explore",
    links: ["Home", "About", "Course", "Blog", "Contact"],
  },
  {
    title: "Category",
    links: [
      "Design",
      "Development",
      "Marketing",
      "Business",
      "Lifestyle",
      "Photography",
      "Music",
    ],
  },
];

export const socialLinks = [
  // eslint-disable-next-line react/jsx-key
  <BiLogoFacebook />,
  <BiLogoInstagram />,
  <BiLogoLinkedin />,
  <BiLogoDribbble />,
];
export const courses = [
  {
    id: 2,
    title: "The Complete 2023 Web Development Bootcamp",
    category: "Web Dev",
    rating: 4,
    price: "$59.99",
    img: "https://imgs.search.brave.com/ZkwGbElTOq8Zo7NeRU669-o016O6XSLJftZZ5I--HJg/rs:fit:750:422:1/g:ce/aHR0cHM6Ly9kaXNj/b3VudHNlcmllcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTEvMTAwLWRh/eXMtb2YtY29kZS10/aGUtY29tcGxldGUt/cHl0aG9uLXByby1i/b290Y2FtcC1mb3It/MjAyMi1jb3Vyc2Uu/anBn",
  },
  {
    id: 3,
    title: "Learn Python: The Complete Python Programming ",
    category: "Python",
    rating: 4,
    price: "$59.99",
    img: "https://imgs.search.brave.com/Nhj_cLAZOWcUjlnR8QMX8A02rX-2RYra9w-0j-B9Rbg/rs:fit:750:422:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IxLzJi/L2NjL2IxMmJjYzA4/YmQ4YzlhOTFjMmM5/NjY3ZTM5NzE1NzA0/LmpwZw",
  },
  {
    id: 4,
    title: "The Complete JavaScript Course 2023: From Zero to Expert!",
    category: "Javascript",
    rating: 4,
    price: "$59.99",
    img: "https://imgs.search.brave.com/ERyn_YUVTbB0slaulPioLMmU7Zto9A8aCA6OPptRZkI/rs:fit:768:432:1/g:ce/aHR0cHM6Ly9jb3Vy/c2Vjb3Vwb25jbHVi/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy84NTE3/MTJfZmM2MV82LTc2/OHg0MzIuanBn",
  },
  {
    id: 5,
    title: "Cuphead",
    category: "Flutter",
    rating: 4,
    price: "$19.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0",
  },
  {
    id: 6,
    title: "Minecraft",
    category: "Flutter",
    rating: 4,
    price: "$29.99",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0",
  },
];
