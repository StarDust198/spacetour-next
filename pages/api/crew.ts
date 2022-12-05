import { NextApiRequest, NextApiResponse } from 'next';
import imgDouglas from '../../assets/crew/image-douglas-hurley.webp';
import imgMark from '../../assets/crew/image-mark-shuttleworth.webp';
import imgVictor from '../../assets/crew/image-victor-glover.webp';
import imgAnousheh from '../../assets/crew/image-anousheh-ansari.webp';

const data = [
  {
    title: 'Douglas Hurley',
    rank: 'Commander',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    img: imgDouglas.src,
  },
  {
    title: 'Mark Shuttleworth',
    rank: 'Mission Specialist',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    img: imgMark.src,
  },
  {
    title: 'Victor Glover',
    rank: 'Pilot',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    img: imgVictor.src,
  },
  {
    title: 'Anousheh Ansari',
    rank: 'Flight Engineer',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    img: imgAnousheh.src,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
