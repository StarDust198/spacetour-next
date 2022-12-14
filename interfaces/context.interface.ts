interface Page {
  _id: number;
  title: string;
  description: string;
  href: string;
  bg: string;
  bgTablet: string;
  bgDesktop: string;
}

export interface IAppContext {
  pages: Page[];
  device: 'mobile' | 'tablet' | 'desktop' | undefined;
  activePage: number;
}
