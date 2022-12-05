import { NextApiRequest, NextApiResponse } from 'next';
import img1 from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import img2 from '../../assets/technology/image-spaceport-landscape.jpg';
import img3 from '../../assets/technology/image-space-capsule-landscape.jpg';
import img1Desktop from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import img2Desktop from '../../assets/technology/image-spaceport-portrait.jpg';
import img3Desktop from '../../assets/technology/image-space-capsule-portrait.jpg';

const data = [
  {
    title: 'Launch vehicle',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: img1.src,
    imgDesktop: img1Desktop.src,
  },
  {
    title: 'Spaceport',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    img: img2.src,
    imgDesktop: img2Desktop,
  },
  {
    title: 'Space capsule',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: img3.src,
    imgDesktop: img3Desktop,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
