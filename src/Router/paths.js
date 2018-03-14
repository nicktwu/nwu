import HomePage from '../HomePage';
import AboutPage from '../AboutPage';

let mainPaths = [
  {
    name: "home",
    exact: true,
    path: "/",
    component: HomePage
  },
  {
    name: "about",
    path: "/about",
    component: AboutPage
  }
];

const otherPaths = mainPaths.reduce((val, next) => (next.exact ? val : val.concat(next)), []);

export {
  otherPaths,
  mainPaths
}