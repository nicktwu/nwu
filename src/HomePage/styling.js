import {StyleSheet} from 'aphrodite';
import {headerFont} from '../fonts';

const style = StyleSheet.create({
  wrapper : {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  box: {
    display: "block",
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    borderRadius: "50%"
  },
  banner : {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    textAlign: "center",
    zIndex: 1
  },
  mobileBanner: {
    height: "200px",
    width: "100%",
    marginBottom: "10px"
  },
  defaultBanner: {
    height: "100%",
    width: "50%",
    marginRight: "10px"
  },
  bar: {
    display: "block",
    position: "absolute",
    border: "1px solid black"
  },
  mobileBar: {
    bottom: 0,
  },
  defaultBar: {
    right: 0
  },
  titleText: {
    display: "block",
    position: "relative",
    top: "50%",
    marginTop: "-30px",
    lineHeight: "60px",
    fontFamily: [headerFont, "sans-serif"],
    fontSize: "40px"
  }
});

export default style