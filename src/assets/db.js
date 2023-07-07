import asosiy from './icons/AsosiyIcon.png'
import bigLeap from 'assets/icons/BigLeapIcon.png'
import filiallar from 'assets/icons/filiallarIcon.png'
import mahsulot from 'assets/icons/MahsulotIcon.png'
import pulAylanmasi from 'assets/icons/PulAylanmasiIcon.png'
import qollabQuvvatlash from 'assets/icons/QollabQuvvatlashIcon.png'
import sozlamalar from 'assets/icons/SozlamalarIcon.png'
import statistika from 'assets/icons/StatistikaIcon.png'


const menus = {
  admin: [
    {
      title: "Asosiy",
      path: "/",
      icon: asosiy,
    },
    {
      title: "Filiallar",
      path: "/filiallar",
      icon: filiallar,
    },
    {
      title: "Mahsulot",
      path: "/mahsulot",
      icon: mahsulot,
    },
    {
      title: "Pul aylanmasi",
      path: "/pul_aylanmasi",
      icon: pulAylanmasi,
    },
    {
      title: "Statistika",
      path: "/statistika",
      icon: statistika,
    },
  ],
};

const helpers = {
  admin: [
    {
      title: "Sozlamalar",
      path: "/sozlamalar",
      icon: sozlamalar,
    },
    {
      title: "Qo'llab quvvatlash",
      path: "/qo'llab_quvvatlash",
      icon: qollabQuvvatlash,
    },
    {
      title: "Big Leap Team",
      path: "/big_leap",
      icon: bigLeap,
    },
  ],
};

export {menus, helpers}