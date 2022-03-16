import tibet from "../images/tibet.jpg";
import taipei from "../images/taipei.jpg";
import bangkok from "../images/bangkok.jpg";
import kaz from "../images/kaz.jpg";

import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
// import { GrSearch } from "react-icons/gr";

export const links = [
  {
    id: 1,
    text: "home",
    url: "#home",
  },
  {
    id: 2,
    text: "about",
    url: "#about",
  },
  {
    id: 3,
    text: "services",
    url: "#services",
  },
  {
    id: 4,
    text: "featured",
    url: "#featured",
  },
  {
    id: 5,
    text: "gallery",
    url: "#gallery",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const tours = [
  {
    id: 1,
    image: tibet,
    date: "august 26, 2020",
    title: "the tibetan highlands",
    duration: "6 days",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sitquam quia facere corrupti velit quis veniam pariatur delectus ullam.",
    country: "china",
    price: 2100,
  },
  {
    id: 2,
    image: taipei,
    date: "august 26, 2021",
    title: "around taiwan",
    duration: "4 days",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sitquam quia facere corrupti velit quis veniam pariatur delectus ullam.",
    country: "china",
    price: 3100,
  },
  {
    id: 3,
    image: bangkok,
    date: "september 26, 2021",
    title: "Bangkok to Yangon",
    duration: "8 days",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sitquam quia facere corrupti velit quis veniam pariatur delectus ullam.",
    country: "Thailand, Myanmar",
    price: 3100,
  },
  {
    id: 3,
    image: kaz,
    date: "september 26, 2021",
    title: "Kazakhstan to Kyrgyzstan",
    duration: "13 days",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, sitquam quia facere corrupti velit quis veniam pariatur delectus ullam.",
    country: "Kazakhstan, Kyrgyzstan",
    price: 3100,
  },
];

// export const gallery = [
//   {
//     id: 1,
//     image: tibet,
//     title: "the tibetan highlands",
//     icon: <GrSearch />,
//   },
//   {
//     id: 2,
//     image: bangkok,
//     title: "around taiwan",
//     icon: <GrSearch />,
//   },
//   {
//     id: 3,
//     image: taipei,
//     title: "around taiwan",
//     icon: <GrSearch />,
//   },
//   {
//     id: 4,
//     image: kaz,
//     title: "around taiwan",
//     icon: <GrSearch />,
//   },
//   {
//     id: 5,
//     image: taipei,
//     title: "around taiwan",
//     icon: <GrSearch />,
//   },
//   {
//     id: 6,
//     image: taipei,
//     title: "around taiwan",
//     icon: <GrSearch />,
//   },
//   {
//     id: 7,
//     image: taipei,
//     title: "around taiwan",
//     icon: <GrSearch />,
//   },
//   {
//     id: 8,
//     image: taipei,
//     title: "around taiwan",
//     icon: <GrSearch />,
//   },
// ];

/**
 * module = {}
 *
 * const data = []
 * export default data =>>> module = data
 * import data from '/data'
 *
 *
 *
 * ///const data = []
 * export const data ==> module = {}
 * module = { data = [] }
 *
 * import x from '/data'
 * => x = { data = [] }
 * import { data } from '/data'
 *
 */
