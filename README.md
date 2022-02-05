# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](images/ScreenshotBaseApparelComingSoonPage.png)

### Links

- Solution URL: [FrontendMentor.io](https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-with-html-tailwindcss-and-javascript-V1CZax0E0)
- Live Site URL: [Vercel:](https://prj-04-base-apparel-coming-soon-page.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwindcss](https://tailwind.com/) - CSS library

### What I learned

How to validate email format:
```js
const validEmailFormat = /^\D\w*[.]*\w*@\w*[.]\w*/;
submitButton.addEventListener("click", (e) => {
  if (!emailInput.value) {
    emailContainer.style.borderColor = "hsl(0, 93%, 68%)";
    errorIcon.classList.replace("hidden", "block");
    emailErrorLabel.classList.replace("hidden", "block");
  } else if (!validEmailFormat.test(emailInput.value)) {
    emailContainer.style.borderColor = "hsl(0, 93%, 68%)";
    errorIcon.classList.replace("hidden", "block");
    emailErrorLabel.classList.replace("hidden", "block");
  } else {
    emailInput.value = "";
  }
});
```

### Continued development

Future projects will be developed using TailwindCSS and vanilla Javascript when interactivity must be included.

### Useful resources

- [ViteJS Public Directory](https://vitejs.dev/guide/assets.html#the-public-directory)
- [TailwindCSS Directives](https://tailwindcss.com/docs/functions-and-directives) - Use of @apply directive
- [Customizing Colors in TailwindCSS](https://tailwindcss.com/docs/customizing-colors) - Adding personalized color names to be used in tailwindcss.
- [Customizing Fonts in TailwindCSS](https://tailwindcss.com/docs/font-family#using-custom-values) - Adding Google fonts to be used in tailwindcss.

## Author

- Website - [Gustavo Sanchez](https://www.gusanche.dev)
- Frontend Mentor - [@gusanchedev](https://www.frontendmentor.io/profile/gusanchedev)
- Github - [@gusanchedev](https://www.github.com/gusanchedev)
- Twitter - [@gusanchedev](https://www.twitter.com/gusanchedev)
- Linkedin - [gusanchedev](https://www.linkedin.com/in/gusanchedev/)

## Acknowledgments

Thanks to Mariapaz for being my friend and support 💙
