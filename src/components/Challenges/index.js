import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Clothes from './clothes';
import Quantities from './quantities';
import StarWars from './starWars';
;

const Challenges = () => {
  return (
    <Tabs defaultActiveKey="star" >
      <Tab eventKey="star" title="Star Wars">
        <StarWars />
      </Tab>
      <Tab eventKey="quantities" title="Quantities">
        <Quantities />
      </Tab>
      <Tab eventKey="clothes" title="Clothes">
        <Clothes />
      </Tab>
    </Tabs >
  );
}

export default Challenges;