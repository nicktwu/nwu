import {StyleSheet} from 'aphrodite';
import {bodyFont, headerFont, nameFont} from '../fonts';

const style = {
  block: {
    position: 'relative',
    width: "100vw",
    overflow: "hidden"
  },
  mobileBlock: {
    height: "100vh"
  },
  defaultBlock: {
    height: "100vh"
  },
  carouselContainer: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    overflow: "hidden",
    textAlign: "center"
  },
  carouselImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
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
    zIndex: 1,
    height: "40%",
    top: "50%",
    bottom: "50%",
    margin: "auto"
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
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
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
    fontFamily: [headerFont, "sans-serif"],
    fontSize: "0.8rem"
  },
  aboutContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  aboutImageContainer: {
    position: "relative",
    padding: "15px",
    border: "8px solid #ffffff"
  },
  aboutImage: {
    position: "relative",
    objectFit: "cover",
    objectPosition: "0 50%",
    zIndex: 1
  },
  aboutImageMobile: {
    height: 100,
    width: 100,
  },
  aboutImageDefault: {
    height: 200,
    width: 200
  },
  aboutSubtitle: {
    position: "relative",
    fontFamily: [bodyFont, "sans-serif"],
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    color: "#cccccc",
    fontSize: "0.9rem",
    lineHeight: "1.2rem"
  },
  aboutSubtitleMobile: {
    maxWidth: "70vw"
  },
  aboutSubtitleDefault: {
    maxWidth: "40vw"
  },
  aboutCaption: {
    position: "relative",
    fontFamily: [bodyFont, "sans-serif"],
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    maxWidth: "40vw",
    color: "#999999",
    fontSize: "0.7rem",
    fontStyle: "italic",
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100vw",
    backgroundColor: "black",
    zIndex: 2,
  },
  mobileNavBar: {
    height: 65
  },
  mobileTriggerContainer: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
    height: "100%"
  },
  mobileNavTrigger: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    height: 40,
    width: 40,
    borderRadius: 4,
    border: "1px solid white",
    cursor: "pointer",
    zIndex: 10
  },
  mobileNavIcon: {
    position: "relative",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    width: "50%",
    height: "30%",
    borderTopStyle: "solid",
    borderTopWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomWidth: "2px"
  },
  mobileNavIconBar: {
    position: "absolute",
    top: "calc(50% - 1px)",
    bottom: "calc(50% - 1px)",
    left: 0,
    right: 0,
    borderStyle: "solid",
    borderWidth: "1px",
    transition: "transform 0.5s ease-in-out"
  },
  mobileNavIconX: {
    transform: "rotate(45deg)"
  },
  mobileNavIconX2: {
    transform: "rotate(-45deg)"
  },
  navMenuContainer: {
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100vw",
    zIndex: 5,
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  navMenuLink: {
    width: "50%",
    height: 70,
    border: "1px solid white",
    margin: 10,
    lineHeight: "70px",
    textAlign: "center",
    fontFamily: [headerFont, "sans-serif"],
    cursor: "pointer"
  },
  defaultNavBar: {
    height: 80
  },
  navBarHeader: {
    float: "left",
    width: "50%",
    textAlign: "center",
    color: "white",
    zIndex: 6
  },
  navBarHeaderText: {
    lineHeight: "100%",
    fontFamily: [nameFont, "sans-serif"],
  },
  navBarHeaderTextMobile: {
    fontSize: "1.4rem"
  },
  navBarHeaderTextDefault: {
    fontSize: "2rem"
  },
  navLinkContainer: {
    position: "relative",
    float: "right",
    height: "100%",
    width: "50%",
    display: "flex",
    justifyContent: "center"
  },
  navLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 90
  },
  navLinkWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textDecoration: "none",
    width: "100%"
  },
  navLinkText: {
    textAlign: "center",
    lineHeight: "100%",
    width: "100%",
    fontSize: "1rem",
    fontFamily: [headerFont, "sans-serif"],
    color: "white"
  },
  navLinkHoverContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  navLinkHover: {
    borderRadius: "50%",
    zIndex: 2
  },
  navSliderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1
  },
  navSlider: {
    position: "relative",
    width: "70%",
    height: "40%",
    borderTop: "2px solid white",
    borderBottom: "2px solid white"
  }
};

export default StyleSheet.create(style);