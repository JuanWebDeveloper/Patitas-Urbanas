import { stateModelForSetIsScrolling } from '@/src/core/models';

export const handleNavbarScrollAnimation = (setIsScrolling: stateModelForSetIsScrolling) => {
 const navigation: HTMLDivElement = document.querySelector('.navbar .navigation')!;

 window.scrollY >= 40 || navigation.classList.contains('active-navigation') ? setIsScrolling(true) : setIsScrolling(false);
};

export const handleNavbarMobile = (setIsScrolling: stateModelForSetIsScrolling) => {
 const hamburgerMenu: HTMLDivElement = document.querySelector('.navbar .hamburger')!;
 const navigation: HTMLDivElement = document.querySelector('.navbar .navigation')!;

 if (navigation.classList.contains('active-navigation')) {
  window.scrollY < 40 && setIsScrolling(false);

  hamburgerMenu.classList.remove('active-hamburger');
  navigation.classList.remove('active-navigation');
 } else {
  setIsScrolling(true);
  hamburgerMenu.classList.add('active-hamburger');
  navigation.classList.add('active-navigation');
 }
};
