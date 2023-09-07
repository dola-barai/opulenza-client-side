// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";
// import images
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.jpg";
import MenuImg2 from "../src/assets/img/menu/2.jpg";
import MenuImg3 from "../src/assets/img/menu/3.jpg";
import MenuImg4 from "../src/assets/img/menu/4.jpg";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/owner.jpg";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";


export const heroData = {
  pretitle: "Nothing Brings Together Like",
  title: "Opulenza Verve",
  subtitle: "Where Flavors Come To Life. ",
  btnText: "Book Your Table",
};

export const menuData = {
  title: "Delicious Flavour Of Opulenza",
  subtitle: "View All Menu For Tasty Meal Today",
  modelImg: ModelWhiteImg,
  btnText: "View Complete Menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Samosa",
      price: "₹XXX",
      description: "Crispy pastry filled with spiced pot...",
    },
    {
      image: MenuImg2,
      name: "Butter Chicken",
      price: "₹XXX",
      description: "Tender chicken cooked in a creamy tom...",
    },
    {
      image: MenuImg3,
      name: "Dosa",
      price: "₹XXX",
      description: "A thin, crispy crepe made from fermented ric...",
    },
    {
      image: MenuImg4,
      name: "Margherita Pizza",
      price: "₹XXX",
      description: "Classic pizza with tomato sauce, fresh mozza...",
    },
  ],
};

export const teamData = {
  pretitle: "Message",
  title: "From Our Owner",
  sub1: "We invite you to explore the opulent blend of North Indian, South Indian, and Italian cuisine that Opulenza Verve offers. ",
  sub2: "Whether you seek the comfort of familiar flavors or the excitement of culinary exploration, we welcome you to be a part of this extraordinary gastronomic journey. Indulge in opulence. Savor the verve.",
  name: "Name",
  occupation: "Owner",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "What client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar2,
      name: "John Doe",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar3,
      name: "Henry A.",
      occupation: "CEO of Delightful",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "We Value Your Input And Believe",
  subtitle: "That Great Ideas Can Come From Anywhere.",
  placeholder: "We Encourage You To Share Your Thoughts",
  btnText: "Send",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "Noida sector-4",
    phone: "+91xxxxxx",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "/", icon: <FaYoutube /> },
      { href: "/", icon: <FaFacebookF /> },
      { href: "/", icon: <FaInstagram /> },
      { href: "/", icon: <FaPinterestP /> },
      { href: "/", icon: <FaDiscord /> },
    ],
  },
};
