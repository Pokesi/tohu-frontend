import SquareWOFF from "../assets/fonts/Inconsolata-Regular.ttf";
import SquareBoldWOFF from "../assets/fonts/Inconsolata-Bold.ttf";
import SquareSemiBoldWOFF from "../assets/fonts/Inconsolata-SemiBold.ttf";
import SquareItalicWOFF from "../assets/fonts/Inconsolata-Regular.ttf";
import SquareLightWOFF from "../assets/fonts/Inconsolata-Light.ttf";
import SquareMediumWOFF from "../assets/fonts/Inconsolata-Medium.ttf";

import MontserratWOFF from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratBoldWOFF from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBoldWOFF from "../assets/fonts/Montserrat-SemiBold.ttf";
import MontserratItalicWOFF from "../assets/fonts/Montserrat-Italic.ttf";
import MontserratLightWOFF from "../assets/fonts/Montserrat-Light.ttf";
import MontserratMediumWOFF from "../assets/fonts/Montserrat-Medium.ttf";

const square = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap", 
  fontWeight: 400,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Regular.'),
		url(${SquareWOFF}) format('truetype')
	`,
};

const squareLight = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Light'),
		url(${SquareLightWOFF}) format('truetype')
	`,
};

const squareMedium = {
  fontFamily: "Square",
  fontStyle: "medium",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Medium'),
		url(${SquareMediumWOFF}) format('truetype')
	`,
};

const squareSemiBold = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
		local('Inconsolata'),
		local('Inconsolata-SemiBold'),
		url(${SquareSemiBoldWOFF}) format('truetype')
	`,
};

const squareBold = {
  fontFamily: "Square",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
		local('Inconsolata-Bold'),
		local('Inconsolata-Bold'),
		url(${SquareBoldWOFF}) format('truetype')
	`,
};

const squareItalic = {
  fontFamily: "Square",
  fontStyle: "italic",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Regular'),
		url(${SquareItalicWOFF}) format('truetype')
	`,
};

const montserrat = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Regular.'),
		url(${MontserratWOFF}) format('sans-serif')
	`,
};

const montserratLight = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Light'),
		url(${MontserratLightWOFF}) format('sans-serif')
	`,
};

const montserratMedium = {
  fontFamily: "Montserrat",
  fontStyle: "medium",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Medium'),
		url(${MontserratMediumWOFF}) format('sans-serif')
	`,
};

const montserratSemiBold = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
		local('Inconsolata'),
		local('Inconsolata-SemiBold'),
		url(${MontserratSemiBoldWOFF}) format('sans-serif')
	`,
};

const montserratBold = {
  fontFamily: "Montserrat",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
		local('Inconsolata-Bold'),
		local('Inconsolata-Bold'),
		url(${MontserratBoldWOFF}) format('sans-serif')
	`,
};

const montserratItalic = {
  fontFamily: "Montserrat",
  fontStyle: "italic",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('Inconsolata'),
		local('Inconsolata-Regular'),
		url(${MontserratItalicWOFF}) format('sans-serif')
	`,
};

const fonts = [square, squareLight, squareMedium, squareBold, squareItalic, montserrat, montserratLight, montserratMedium, montserratBold, montserratItalic];

export default fonts;
