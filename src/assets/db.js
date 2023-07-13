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


export const mahsulotTarqatish2 = [
  {
    date: "11/11/2022",
    product: "Ofiyst",
    amount: 400,
    branch:"Farg'ona",
    overallPayment: 10000000,
  },
  {
    date: "11/12/2022",
    product: "Ofiyst",
    amount: 400,
    branch:"Qo'qon",
    overallPayment: 15000000,
  },
  {
    date: "11/11/2022",
    product: "Ofiyst",
    amount: 400,
    branch:"Andijon",
    overallPayment: 1000000,
  },
  {
    date: "11/11/2022",
    product: "Ofiyst",
    amount: 400,
    branch:"Namangan",
    overallPayment: 10000000,
  },
  {
    date: "11/11/2022",
    product: "Ofiyst",
    amount: 400,
    branch:"Farg'ona",
    overallPayment: 10000000,
  },
  {
    date: "11/11/2022",
    product: "Ofiyst",
    amount: 400,
    branch:"Toshkent",
    overallPayment: 10000000,
  },
];

export const obunachilar = [
         {
           id: 1,
           full_name: "Alimov Abror Xabibullayevich",
           subscription: 30000000,
           all_bonus: 7000000,
           clean_out: 5000000,
           date: "15.01.2023",
           status: "Faol",
         },
         {
           id: 2,
           full_name: "Saimov Rustam Saimjonovich",
           subscription: 3000000,
           all_bonus: 700000,
           clean_out: 0,
           date: "15.01.2023",
           status: "Faol emas",
         },
         {
           id: 3,
           full_name: "Sanginov Otabek Muratovich",
           subscription: 300000,
           all_bonus: 70000,
           clean_out: 5000,
           date: "15.01.2023",
           status: "To'xtatilgan",
         },
         {
           id: 4,
           full_name: "Nazarov Sanjar Olimovich",
           subscription: 300000,
           all_bonus: 0,
           clean_out: 500000,
           date: "15.01.2023",
           status: "Bekor qilingan",
         },
         {
           id: 5,
           full_name: "Alimov Abror Xabibullayevich",
           subscription: 30000000,
           all_bonus: 7000000,
           clean_out: 5000000,
           date: "15.01.2023",
           status: "Faol",
         },
       ];


export const moliyaviyMalumotlar = [
         {
           subscription: 100000000,
           kiritilgan_summa: 150000000,
           yechilgan_summa: 10000000,
           jami_bonus: 6000000,
           debet: 60000000,
         },
         {
           date: "15.01.2023",
           subscription: 1000000,
           kiritilgan_summa: 15000000,
           yechilgan_summa: 10000000,
           jami_bonus: 6000000,
           debet: 30000000,
         },
         {
           date: "15.01.2023",
           subscription: 1000000,
           kiritilgan_summa: 15000000,
           yechilgan_summa: 10000000,
           jami_bonus: 6000000,
           debet: 30000000,
         },
         {
           date: "15.01.2023",
           subscription: 1000000,
           kiritilgan_summa: 15000000,
           yechilgan_summa: 10000000,
           jami_bonus: 6000000,
           debet: 30000000,
         },
         {
           date: "15.01.2023",
           subscription: 1000000,
           kiritilgan_summa: 15000000,
           yechilgan_summa: 10000000,
           jami_bonus: 6000000,
           debet: 30000000,
         },
         {
           date: "15.01.2023",
           subscription: 1000000,
           kiritilgan_summa: 15000000,
           yechilgan_summa: 10000000,
           jami_bonus: 6000000,
           debet: 30000000,
         },
       ];
export {menus, helpers}