import {StyleSheet} from 'aphrodite';
import {headerFont} from '../fonts';

const style = {
  block: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden"
  },
  mobileCarousel: {
    height: "40vh"
  },
  defaultCarousel: {
    height: "100vh"
  },
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100vw",
    backgroundColor: "black",
    overflow: "hidden"
  },
  carouselImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: "hidden"
  },
  carouselImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    height: "40%"
  },
  leftArrow: {
    left: 0
  },
  rightArrow: {
    right: 0
  },
  dotContainer: {
    position: "absolute",
    top: "85%",
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  dotBox: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40
  },
  dot: {
    borderRadius: "50%",
    backgroundColor: "white"
  },
  captionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    textAlign: "center",
    top: "70%",
    left: 0,
    right: 0,
    bottom: "15%"
  },
  captionTrigger: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: "15%",
    zIndex: 1
  },
  caption: {
    display: "block",
    backgroundColor: "black",
    color: "white",
    padding: "10px"
  },
  captionText: {
    fontFamily: [headerFont, "sans-serif"]
  },
  navBar: {
    height: 50,
    position: "fixed",
    top: 0,
    width: "100vw"
  }
};

export default StyleSheet.create(style);