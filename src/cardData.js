import image1 from "./images/bbc1.jpg";
import image2 from "./images/bbc2.jpg";
import image3 from "./images/bbc3.jpg";
import image4 from "./images/crypto.jpg";
import image5 from "./images/bbc.jpg";
import image6 from "./images/cryptoland.jpg";
import myImage from "./images/mahyar.jpg";




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
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
  },
  {
    id: 11,
    name: "Donald Duck",
    username: "donald.duck",
  },
  {
    id: 12,
    name: "Adam Savage",
    username: "adam.is.savage",
  },
  {
    id: 13,
    name: "Daniel Redhill",
    username: "harry.trotter",
  },
  {
    id: 14,
    name: "Indiana Jones",
    username: "Indy Shot First",
  },
  {
    id: 15,
    name: "Claudia Beckam",
    username: "handball2020",
  },
  {
    id: 16,
    name: "Fabio Edwards",
    username: "EastCoastLion",
  },
  {
    id: 17,
    name: "Jonah Roads",
    username: "AlwaysTheFunnyGuy",
  },
  {
    id: 18,
    name: "Damian Knight",
    username: "The Rook",
  },
  {
    id: 19,
    name: "Rowan Atkinson",
    username: "Mr Bean",
  },
  {
    id: 20,
    name: "Bugs Bunny",
    username: "Albuquerque",
  },
];










export  {cardsData,myData,users};
