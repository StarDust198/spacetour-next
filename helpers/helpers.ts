import { CustomTransition } from '../interfaces/animation.interface';

const transitionStyle = {
  duration: 1,
  type: 'tween',
};

const reducedTransitionStyle = {
  duration: 0.001,
};

const homeTransitionStyle = { duration: 1.5, ease: 'easeInOut', delay: 0.1 };

export const pageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(30px)',
  },
  enter: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(30px)',
  },
};

export const homeAnimation = {
  hidden: ({
    coord = 'y',
    direction = 0,
    shouldReduceMotion,
  }: CustomTransition) => ({
    [coord]: direction > 0 ? '50%' : '-50%',
    opacity: 0,
    transition: shouldReduceMotion
      ? reducedTransitionStyle
      : homeTransitionStyle,
  }),
  visible: ({ coord = 'y', shouldReduceMotion }: CustomTransition) => ({
    [coord]: 0,
    opacity: 1,
    transition: shouldReduceMotion
      ? reducedTransitionStyle
      : homeTransitionStyle,
  }),
};

export const fadeAnimation = {
  hidden: ({ shouldReduceMotion }: CustomTransition) => ({
    filter: 'blur(10px)',
    scale: 1.15,
    opacity: 0,
    transition: shouldReduceMotion ? reducedTransitionStyle : transitionStyle,
  }),
  visible: ({ shouldReduceMotion }: CustomTransition) => ({
    filter: 'blur(0px)',
    scale: 1,
    opacity: 1,
    transition: shouldReduceMotion
      ? reducedTransitionStyle
      : { ...transitionStyle, delay: 1.25 },
  }),
};

export const tabAnimation = {
  enter: ({
    coord = 'x',
    direction = 0,
    shouldReduceMotion,
  }: CustomTransition) => {
    return {
      [coord]: direction > 0 ? '50%' : direction < 0 ? '-50%' : 0,
      opacity: 0,
      transition: shouldReduceMotion ? transitionStyle : reducedTransitionStyle,
    };
  },
  exit: ({
    coord = 'x',
    direction = 0,
    shouldReduceMotion,
  }: CustomTransition) => ({
    [coord]: direction > 0 ? '-50%' : direction < 0 ? '50%' : 0,
    opacity: 0,
    transition: shouldReduceMotion ? reducedTransitionStyle : transitionStyle,
  }),
  visible: ({ shouldReduceMotion }: CustomTransition) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: shouldReduceMotion ? reducedTransitionStyle : transitionStyle,
  }),
};

export const bgAnimation = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  enter: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.2,
  },
};
