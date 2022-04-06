import { useState } from 'react';
import React from "react";
import { grommet } from "grommet";
import { Grommet, Box,Header, Button, Menu, Text, Heading } from 'grommet';
import { Home, Moon, Sun } from 'grommet-icons';
import { Switch, Route } from 'react-router-dom';
import Panel from './Panels';
import PanelInfo from './Panelinfo';

const date = new Date();
const Tasks = [{
    title: "Email Advisor",
    description: "Make sure to mention sandwiches",
    due: date,
    status: 'to do',
    membersAssigned: ['isabel', 'robert']
},{
    title: "Email Advisor",
    description: "Make sure to mention sandwiches",
    due: date,
    status: 'to do',
    membersAssigned: ['robert']
},{
    title: "Email Advisor",
    description: "Make sure to mention bagels",
    due: date,
    status: 'to do',
    membersAssigned: ['robert']
}];

const members = [{
  _id: '12343545',
  fname: 'Robert',
  lname: 'Ramos',
  email: 'rramos20@mail.csuchico.edu',
  role: 'Treasurer'
},
{
  _id: '12343545',
  fname: 'Robert',
  lname: 'Ferris',
  email: 'rramos20@mail.csuchico.edu',
  role: 'President'
}];

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <Grommet
        full
        responsive
        theme={grommet}
        themeMode={darkMode ? 'dark' : 'light'}
        height={{ min: '100%' }}
      >
      <Box direction="column" fill>
        <Header background="#BD009A">
          <Button icon={<Home />} hoverIndicator />
          <Box direction="row" pad="xsmall">
            <Menu label="Login" items={[{ label: 'logout' }]} />
            <Button
              icon={darkMode ? <Moon /> : <Sun/>}
              primary
              color="#F1E1F1"
              onClick={() => setDarkMode(!darkMode)}
            />
          </Box>
        </Header>
        <Box direction="column" fill align="center" margin="large">
        <PanelInfo/>
        <Heading align="center" level={3}>Team Members</Heading>
          <Box>
            <Box direction="row" gap="medium" align="center">
              {members.map((member, index) => (
                <Box align="center">
                  <Text>{member.fname} {member.lname} </Text>
                  <Box background="#F1E1F1" direction="row" round="medium" pad="xsmall">
                    <Text>{member.role}</Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Heading align="center" level={3}>Assigned Tasks</Heading>
          <Box pad="large">
            <Panel tasks={Tasks}/>
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
