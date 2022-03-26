import logo from './logo.svg';
import { Box, Text, Header, Button, Icons, Menu } from 'grommet';
import { Home } from 'grommet-icons';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Box direction="column">
      <Header background="brand">
        <Button icon={<Home />} hoverIndicator />
        <Menu label="account" items={[{ label: 'logout' }]} />
      </Header>
    </Box>
  );
}

export default App;
