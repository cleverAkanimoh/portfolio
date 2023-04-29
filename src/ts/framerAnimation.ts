export const animateHeader = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.75, ease: 'easeOut' },
  exit: { opacity: 1 }
}

export const animateSection = {
  initial: { y: -50 },
  animate: { y: 0 },
  transition: { duration: 0.75, ease: 'easeOut', delay: .5 }
}

export const animateH1 = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
  transition: { duration: 0.75, ease: 'easeOut', delay: .5 }
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: .3,
      staggerChildren: .4
    }
  }
}

export const item = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
}