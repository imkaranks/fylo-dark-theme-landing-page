# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  <!-- - [Links](#links) -->
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)

### Links
<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->
- Live Site URL: [Fylo Dark Theme Landing Page](https://main--beautiful-donut-56572b.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - CSS framework

### What I learned

This challenge really helped me to learn and see tailwindcss in action which I hesitate to do before because of the comfort of writing vanilla CSS without the headache of setting it up.

I like how this approach of writing css pushes you towards writing css with utilities rather than naming the element with a suitable classes which takes quite a time and that without compromising customizations.

#### With Vanilla CSS

```html
<details class="accordion">
  <summary class="accordion__summary">Some Lovely Title</summary>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
</details>
```
```css
.accordion {
  width: 90%;
  margin-inline: auto;
  border: 1px solid black;
  padding: 0 1rem 1rem 1rem;
}
.accordian__summary {
  font-size: 1.125rem;
  font-weight: 600;
  border-bottom: 1px solid black;
  padding-block: 0.5rem;
}
```

#### With tailwindcss

```html
<details class="w-11/12 mx-auto border border-black px-4 pb-4">
  <summary class="text-lg font-semibold border-b border-b-black py-2">
    Some Lovely Title
  </summary>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  </p>
</details>
```

## Author

- Website - [Karan Sethi](https://imkaranks.github.io/)

<!-- # To Do # -->
<!-- - Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername) -->
