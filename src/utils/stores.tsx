import Image from "next/image";
import myxellia from '../assets/images/myxellia.svg';
import myxelliah from '../assets/images/myxellia_.png';
import bell from '../assets/images/bell.svg';
import calculator from '../assets/images/calculator.svg';
import calender from '../assets/images/calendar.svg';
import chat from '../assets/images/chat.svg';
import dee from '../assets/images/dee.svg';
import home from '../assets/images/home.svg';
import box from '../assets/images/box.svg';
import user from '../assets/images/user.svg';
import pages from '../assets/images/pages.svg';
import scroll from '../assets/images/scroll.svg';
import search from '../assets/images/search.svg';
import frame1 from '../assets/images/frame1.svg';
import frame2 from '../assets/images/frame2.svg';
import frame3 from '../assets/images/frame3.svg';
import frame4 from '../assets/images/frame4.svg';


export const imageIcons:any = {
    myxellia,
    myxelliah,
    bell,calculator,
    calender,chat,
    dee,home,box,user,pages,scroll,search,
    frame1,frame2,frame3,frame4
}

export const gridCards = [
    {
        amount: "₦120,000,000.00",
        color: 'text-indigo-600',
        text: 'Total Inflow',
        icon: <Image src={imageIcons.frame1} className="h-4 w-4" alt="Home" />,
        percent: "2.5%",
        percentColor: "text-emerald-500"
    },
       {
        amount: "₦50,000,000.00",
        color: 'text-emerald-500',
        text: 'MRR',
        icon: <Image src={imageIcons.frame2} className="h-4 w-4" alt="Home" />,
        percent: "2.5%",
        percentColor: "text-emerald-500"
    },
       {
        amount: "₦200,000,000.00",
        color: 'text-teal-500',
        text: 'Commission Revenue',
        icon: <Image src={imageIcons.frame3} className="h-4 w-4" alt="Home" />,
        percent: "0.5%",
        percentColor: "text-teal-500"
    },
       {
        amount: "₦100,000,000.00",
        color: 'text-red-500',
        text: 'GMV',
        icon:  <Image src={imageIcons.frame4} className="h-4 w-4" alt="Home" />,
        percent: "0.5%",
        percentColor: "text-red-500"
    },
]

export const salesData = [
  { month: 'Jan', revenue: 35, profit: 27, expenses: 13 },
  { month: 'Feb', revenue: 15, profit: 27, expenses: 13 },
  { month: 'Mar', revenue: 17, profit: 11, expenses: 7 },
  { month: 'Apr', revenue: 17, profit: 27, expenses: 13 },
  { month: 'May', revenue: 15, profit: 5, expenses: 13 },
  { month: 'Jun', revenue: 35, profit: 50, expenses: 13 },
  { month: 'Jul', revenue: 28, profit: 40, expenses: 18 },
  { month: 'Aug', revenue: 28, profit: 12, expenses: 18 },
  { month: 'Sep', revenue: 40, profit: 37, expenses: 12 },
];
