import {FaAccessibleIcon, FaGg} from 'react-icons/fa'
import {SiDatabricks} from 'react-icons/si'
import {MdConnectWithoutContact} from 'react-icons/md'



export const serviceList = [
    {
        id: 1,
        icon :  <FaAccessibleIcon color='#0a1930' size={22} />,
        heading: "GSM Radio Network ",
        text: "Our Engineers are equipped with relevant skills to Carry out Site selection and design appropriate engineering parameters for optimum Radio Network performance.",
    },
    {
        id: 2,
        icon :  <SiDatabricks color='#0a1930' size={22} />,
        heading: "Transmission Planning and Optimization ", 
        text: "Transmission Planning and Optimization is an all-encompassing service we carry out to provide free flow of Data from one hub to another.",
    },
    {
        id: 3,
        icon :  <MdConnectWithoutContact color='#0a1930' size={22} />,
        heading: "fiber optics installation & maintenance",
        text: "We can implement indoor and outdoor installations, upgrade and maintenance of fiber optics cable laying and Security surveillance maintenance service."
    },
    {
        id: 4,
        icon :  <FaGg color='#0a1930' size={22} />,
        heading: "BTS/RF Installation",
        text: "Our Engineers are one of the leading Engineers in carrying out sanity checks on BTS/RF installations to avert poor network performance.",
    },
   
]