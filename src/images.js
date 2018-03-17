const cloudinary_base = "https://res.cloudinary.com/nwu/image/upload/a_0/";

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
];

const backgroundMap = backgrounds.reduce((prev, current) => {
  prev[current.name] = current.url;
  return prev
}, {});

const allImages = Object.assign({}, backgroundMap);

export {backgrounds, allImages};