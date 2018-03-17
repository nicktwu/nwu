import HomePage from '../HomePage';

let mainPaths = [
  {
    name: "home",
    exact: true,
    path: "/",
    component: HomePage
  }
];

const otherPaths = mainPaths.reduce((val, next) => (next.exact ? val : val.concat(next)), []);

export {
  otherPaths,
  mainPaths
}