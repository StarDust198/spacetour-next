import { PlanetSliderProps } from './PlanetSlider.props';
import styles from './PlanetSlider.module.css';
import { FC, useState } from 'react';
import cn from 'classnames';
import { NavText } from '../NavText/NavText';

const planets: string[] = ['moon', 'mars', 'europa', 'titan'];

export type planetName = typeof planets[number];

export const PlanetSlider: FC<PlanetSliderProps> = ({
  // planet,
  // setPlanet,
  className,
  ...props
}) => {
  const [activePlanet, setActivePlanet] = useState<planetName>(planets[0]);

  const renderItems = () => {
    return planets.map((planet) => (
      <li
        className={cn(styles.planet, {
          [styles.active]: planet === activePlanet,
        })}
        onClick={() => {
          setActivePlanet(planet);
        }}
      >
        <NavText place="info">{planet}</NavText>
      </li>
    ));
  };

  return (
    <ul className={cn(styles.planetSlider, className)} {...props}>
      {renderItems()}
    </ul>
  );
};
