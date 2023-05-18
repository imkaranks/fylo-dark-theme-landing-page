const card = {
  offscreen: {
    opacity: 0,
    x: -20,
    y: -20
  },
  onscreen: {
    opacity: 1,
    x: 0,
    y: 0
  }
}

const textContent = {
  offscreen: {
    opacity: 0,
    clipPath: 'polygon(0 0, 100% 0%, 100% 0, 0 0)',
  },
  onscreen: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    transition: {
      delay: 0.3
    }
  }
}

export { card, textContent };