export const variantsMain = {
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

export const variantsBg = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    // filter: 'blur(30px)',
  },
  enter: {
    opacity: 1,
    scale: 1,
    // filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    // filter: 'blur(30px)',
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
