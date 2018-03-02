import React from 'react';
import HomePage from '../HomePage'

let mainPaths = [
  {
    name: "home",
    exact: true,
    path: "/",
    component: (props) => (<HomePage images={props.images} loading={props.loading} />)
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "blog",
    path: "/blog"
  }
];

const otherPaths = mainPaths.reduce((val, next) => (next.exact ? val : val.concat(next)), []);

export {
  otherPaths,
  mainPaths
}