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

export const homeBlockAnimation = {
  hidden: (custom: string) => ({
    [custom]: -100,
    opacity: 0,
  }),
  visible: (custom: string) => ({
    [custom]: 0,
    opacity: 1,
  }),
};

export const homeButtonAnimation = {
  hidden: (custom: string) => ({
    [custom]: 100,
    opacity: 0,
  }),
  visible: (custom: string) => ({
    [custom]: 0,
    opacity: 1,
  }),
};

const transitionStyle = {
  duration: 1,
  type: 'tween',
};

export const fadeAnimation = {
  hidden: {
    filter: 'blur(10px)',
    scale: 1.15,
    opacity: 0,
    transition: transitionStyle,
  },
  visible: {
    filter: 'blur(0px)',
    scale: 1,
    opacity: 1,
    transition: { ...transitionStyle, delay: 0.5 },
  },
};

export const horizontalAnimation = {
  enter: (direction: number) => ({
    x: direction > 0 ? '50%' : direction < 0 ? '-50%' : 0,
    opacity: 0,
    transition: transitionStyle,
  }),
  exit: (direction: number) => ({
    x: direction >= 0 ? '-50%' : '50%',
    opacity: 0,
    transition: transitionStyle,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: transitionStyle,
  },
};

export const bothDirectionAnimation = {
  enter: (arr: [number, string]) => {
    return {
      [arr[1]]: arr[0] > 0 ? '50%' : arr[0] < 0 ? '-50%' : 0,
      opacity: 0,
      transition: transitionStyle,
    };
  },
  exit: (arr: [number, string]) => {
    return {
      [arr[1]]: arr[0] > 0 ? '-50%' : arr[0] < 0 ? '50%' : 0,
      opacity: 0,
      transition: transitionStyle,
    };
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: transitionStyle,
  },
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

export const pages = [
  {
    _id: 0,
    title: 'home',
    description: 'Homepage',
    href: '/',
    bg: '/assets/home/background-home-mobile.jpg',
    bgTablet: '/assets/home/background-home-tablet.jpg',
    bgDesktop: '/assets/home/background-home-desktop.jpg',
  },
  {
    _id: 1,
    title: 'destination',
    description: 'Pick your destination',
    href: '/destination',
    bg: '/assets/destination/background-destination-mobile.jpg',
    bgTablet: '/assets/destination/background-destination-tablet.jpg',
    bgDesktop: '/assets/destination/background-destination-desktop.jpg',
  },
  {
    _id: 2,
    title: 'crew',
    description: 'Meet your crew',
    href: '/crew',
    bg: '/assets/crew/background-crew-mobile.jpg',
    bgTablet: '/assets/crew/background-crew-tablet.jpg',
    bgDesktop: '/assets/crew/background-crew-desktop.jpg',
  },
  {
    _id: 3,
    title: 'technology',
    description: 'SPACE LAUNCH 101',
    href: '/technology',
    bg: '/assets/technology/background-technology-mobile.jpg',
    bgTablet: '/assets/technology/background-technology-tablet.jpg',
    bgDesktop: '/assets/technology/background-technology-tablet.jpg',
  },
];
