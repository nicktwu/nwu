const cloudinary_base = "https://res.cloudinary.com/nwu/image/upload/a_0/";

const about = {
  selfMurakami: cloudinary_base + "self_murakami"
};


const backgrounds = [
  {
    name: "kresgeSunset",
    url: cloudinary_base + "kresge_sunset",
    caption: "Kresge Auditorium, MIT. Taken with an iPhone 5S."
  },
  {
    name: "backBaySunset",
    url: cloudinary_base + "backbay_sunset",
    caption: "Harvard Bridge, Boston. Taken with an iPhone 5S."
  },
  {
    name: "bostonForestHiking",
    url: cloudinary_base + "bostonforest_hiking",
    caption: "Middlesex Fells Reservation, MA. Taken with an iPhone 5S."
  },
  {
    name: "chicagoLighthouseDaytime",
    url: cloudinary_base + "chicagolighthouse_daytime",
    caption: "Lake Michigan, near Chicago. Taken with an iPhone 5S."
  },
  {
    name: "chicagoDaytime",
    url: cloudinary_base + "chicago_daytime",
    caption: "Chicago, IL. Taken with an iPhone 5S."
  }
];

const mobileBackgrounds = [
  {
    name: "chicagoCity",
    url: cloudinary_base + "chicago_city",
    caption: "Chicago, IL. Taken with an iPhone 5S."
  },
  {
    name: "romeDaytime",
    url: cloudinary_base + "rome_daytime",
    caption: "Rome, Italy. Taken with an iPhone 5S."
  },
  {
    name: "huashanWaterfall",
    url: cloudinary_base + "huashan_waterfall",
    caption: "Huashan, China. Taken with an iPhone 5S."
  },
  {
    name: "stPaulsDaytime",
    url: cloudinary_base + "stpauls_daytime",
    caption: "St. Paul's Cathedral, London. Taken with an iPhone 5S."
  },
  {
    name: "centralParkDaytime",
    url: cloudinary_base + "centralpark_daytime",
    caption: "Central Park, New York. Taken with an iPhone 5S."
  }
];

const backgroundMap = backgrounds.reduce((prev, current) => {
  prev[current.name] = current.url;
  return prev
}, {});

const mobileBackgroundMap = mobileBackgrounds.reduce((prev, current) => {
  prev[current.name] = current.url;
  return prev
}, {});

const allImages = Object.assign({}, backgroundMap, mobileBackgroundMap, about);

export {backgrounds, mobileBackgrounds, allImages};