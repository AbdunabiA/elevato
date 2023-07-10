import asosiy from './icons/AsosiyIcon.png'
import bigLeap from './icons/BigLeapIcon.png'
import filiallar from './icons/FiliallarIcon.png'
import mahsulot from './icons/MahsulotIcon.png'
import pulAylanmasi from './icons/PulAylanmasiIcon.png'
import qollabQuvvatlash from './icons/QollabQuvvatlashIcon.png'
import sozlamalar from './icons/SozlamalarIcon.png'
import statistika from './icons/StatistikaIcon.png'


const menus = {
  admin: [
    {
      title: "Asosiy",
      path: "/",
      icon: asosiy,
    },
    {
      title: "Filiallar",
      path: "/branches",
      icon: filiallar,
    },
    {
      title: "Mahsulot",
      path: "/product",
      icon: mahsulot,
    },
    {
      title: "Pul aylanmasi",
      path: "/money-circulation",
      icon: pulAylanmasi,
    },
    {
      title: "Statistika",
      path: "/statistics",
      icon: statistika,
    },
  ],
};

const helpers = {
  admin: [
    {
      title: "Sozlamalar",
      path: "/settings",
      icon: sozlamalar,
    },
    {
      title: "Qo'llab quvvatlash",
      path: "/support",
      icon: qollabQuvvatlash,
    },
    {
      title: "Big Leap Team",
      path: "/big-leap",
      icon: bigLeap,
    },
  ],
};

export const mahsulotTarqatish = [
         {
           contractId: 55418,
           date: "11/11/2022",
           product: "Ofiyst",
           amount: 400,
           payed: 9500000,
           overallPayment: 10000000,
         },
         {
           contractId: 55418,
           date: "11/12/2022",
           product: "Ofiyst",
           amount: 400,
           payed: 0,
           overallPayment: 15000000,
         },
         {
           contractId: 55418,
           date: "11/11/2022",
           product: "Ofiyst",
           amount: 400,
           payed: 95000000,
           overallPayment: 1000000,
         },
         {
           contractId: 55418,
           date: "11/11/2022",
           product: "Ofiyst",
           amount: 400,
           payed: 200000,
           overallPayment: 10000000,
         },
         {
           contractId: 55418,
           date: "11/11/2022",
           product: "Ofiyst",
           amount: 400,
           payed: 9500000,
           overallPayment: 10000000,
         },
         {
           contractId: 55418,
           date: "11/11/2022",
           product: "Ofiyst",
           amount: 400,
           payed: 9500000,
           overallPayment: 10000000,
         },
       ];

export {menus, helpers}