import image1 from "./images/bbc1.jpg";
import image2 from "./images/bbc2.jpg";
import image3 from "./images/bbc3.jpg";
import image4 from "./images/crypto.jpg";
import image5 from "./images/bbc.jpg";
import image6 from "./images/cryptoland.jpg";
import myImage from "./images/mahyar.jpg";
import userImage1 from "./images/user1.jpg";
import userImage2 from "./images/user2.jpg";
import userImage3 from "./images/user3.jpg";
import userImage4 from "./images/user4.jpg";
import userImage5 from "./images/user5.jpg";
import userImage6 from "./images/user6.jpg";
import userImage7 from "./images/user7.jpg";
import userImage8 from "./images/user8.jpg";
import userImage9 from "./images/user9.jpg";
import userImage10 from "./images/user10.jpg";
import userImage11 from "./images/user11.jpg";
import userImage12 from "./images/user12.jpg";
import userImage13 from "./images/user13.jpg";
import userImage14 from "./images/user14.jpg";
import userImage15 from "./images/user15.jpg";
import userImage16 from "./images/user16.jpg";
import userImage17 from "./images/user17.jpg";
import userImage18 from "./images/user18.jpg";
import userImage19 from "./images/user19.jpg";
import userImage20 from "./images/user20.jpg";




// my data
const myData={
  username:"mahyarJbr",
  captionName:"mahyar jabbari",
  image:{src: myImage}
}

//
const cardsData = [
  {
    id: "1",
    username: "cryptocarnaval",
    profileImage:{src:image6},
    likes: "186",
    content:
      "با بوجود آمدن ارزهای دیجیتال که ماهیتی غیر متمرکز دارند به مرور کارکرد بانکها که ماهیتی کاملا متمرکز دارند از بین میرود.",
    images: [{id:1,src: image4 }],
    time: "24 min ago",
    comments: [
      {
        user: "raffagrassetti",
        text: "Woah dude, this is awesome! 🔥",
        id: 1,
      },
      {
        user: "therealadamsavage",
        text: "Like!",
        id: 2,
      },
      {
        user: "mapvault",
        text: "Niceeeee!",
        id: 3,
      },
    ],
  },
  {
    id: "2",
    username: "bbcpersian",
    profileImage:{src:image5},
    likes: "91,043",
    content: `انتشار تصاویری از لباس‌های رسمی کاروان تیم ایران در المپیک توکیو، واکنش گروهی از کاربران شبکه‌های اجتماعی را به دنبال داشته است.

      شنبه شب گروهی از ورزشکاران ایرانی تیم المپیک با بدرقه رسمی از فرودگاه امام عازم بازی‌های المپیک توکیو شدند که امسال به خاطر شیوع کرونا در شرایطی خاص برگزار می‌شود.
      
      اما انتشار تصاویر لباس‌های رسمی کاروان ایران که قرار است در مراسم افتتاحیه المپیک از آن استفاده شود، واکنش گروهی از کاربران شبکه‌های اجتماعی را به دنبال داشته است که "طراحی، رنگ و دوخت" این لباس‌ها را نامناسب خوانده‌اند.
      
      طراحی و دوخت لباس تیم ایران برای بازی‌های المپیک توکیو را شرکت زاگرس پوش بر عهده داشته است.
      
      ابتدا قرار بود از این لباس‌ها طی مراسمی رسمی رونمایی شود، ولی این مراسم به خاطر شیوع کرونا لغو شد.
      
      پیش از این در آستانه المپیک ریو دو ژانیرو هم رونمایی از لباس‌های طراحی شده برای تیم ایران موجب اعتراض‌های زیادی در رسانه‌ها و شبکه‌های اجتماعی شد که در نهایت منجر به تغییر طراحی و دوخت لباس‌های جدید شد.
      
      مراسم افتتاحیه رسمی بازی‌های المپیک توکیو روز جمعه برگزار خواهد شد.
      `,
    images: [
      { id: 1, src: image1 },
      { id: 2, src: image2 },
      { id: 3, src: image3 },
    ],
    time: "21 HOURS AGO",
    comments: [
      {
        user: "manij81",
        text: "از اخوند توقع سلیقه دارین چیزی ک حالشون نیست شیکی سلیقه است اخر بی کلاسی ان",
        id: 1,
      },
      {
        user: "golgolakkk",
        text: "@parvane4207 ❤️",
        id: 2,
      },
      {
        user: "sona2166",
        text: "چقدر خلاقیت به کاربردن",
        id: 3,
      },
    ],
  },
];

const users = [
  {
    id: 1,
    name: "Narges Kalbasi",
    username: "justnarges",
    image:{src:userImage1}
  },
  {
    id: 2,
    name: "Trading Setups",
    username: "setupstrading",
    image:{src:userImage2}
  },
  {
    id: 3,
    name: "بیت کوین | ارز دیجیتال",
    username: "arzdigital",
    image:{src:userImage3}
  },
  {
    id: 4,
    name: "ufc",
    username: "ufc",
    image:{src:userImage4}
  },
  {
    id: 5,
    name: "Bloomberg Business",
    username: "bloombergbusiness ",
    image:{src:userImage5}
  },
  {
    id: 6,
    name: "legend",
    username: "den.legend",
    image:{src:userImage6}
  },
  {
    id: 7,
    name: "Yuli Yanty",
    username: "yulyantila",
    image:{src:userImage7}
  },
  {
    id: 8,
    name: "Try 4 Tricks",
    username: "try4tricks.4799",
    image:{src:userImage8}
  },
  {
    id: 9,
    name: "Sarin Yuok",
    username: "Sarin Group",
    image:{src:userImage9}
  },
  {
    id: 10,
    name: "🤍آموزش و اخبار ارزهای دیجیتال🤍",
    username: "bitinex.ir",
    image:{src:userImage10}
  },
  {
    id: 11,
    name: "نشریه ره‌آورد مدیریت",
    username: "rahavardmodiriat",
    image:{src:userImage11}
  },
  {
    id: 12,
    name: "mojtaba shakoori مجتبی شکوری",
    username: "dr.mojtaba.shakoori.fanpage",
    image:{src:userImage12}
  },
  {
    id: 13,
    name: "Daniel Redhill",
    username: "harry.trotter",
    image:{src:userImage13}
  },
  {
    id: 14,
    name: "DW Persian دویچه‌وله فارسی",
    username: "dw_persian",
    image:{src:userImage14}
  },
  {
    id: 15,
    name: "Claudia Beckam",
    username: "handball2020",
    image:{src:userImage15}
  },
  {
    id: 16,
    name: "Fabio Edwards",
    username: "EastCoastLion",
    image:{src:userImage16}
  },
  {
    id: 17,
    name: "Jonah Roads",
    username: "AlwaysTheFunnyGuy",
    image:{src:userImage17}
  },
  {
    id: 18,
    name: "Damian Knight",
    username: "The Rook",
    image:{src:userImage18}
  },
  {
    id: 19,
    name: "Rowan Atkinson",
    username: "Mr Bean",
    image:{src:userImage19}
  },
  {
    id: 20,
    name: "Bugs Bunny",
    username: "Albuquerque",
    image:{src:userImage20}
  },
];










export  {cardsData,myData,users};
