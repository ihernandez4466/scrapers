import { Box, Text, Header, Button, Menu, Sidebar, Nav, Tabs, Tab, DropButton } from 'grommet';
import { Add, Help, Projects, Clock } from 'grommet-icons';
import { Home } from 'grommet-icons';
import Radio from './Radio.js'

function PanelInfo() {
    return (
        <Box>
        <Tabs>
            <Tab icon={<Add />} title="New Tasks"/>
            <Tab title="Current Tasks">
                <Box
                   // direction="row"
                   // border={{ color: 'brand', size: 'small' }}
                   // pad="medium"
                >
                
                </Box>
                <Box />

            </Tab>
        </Tabs>
        
        </Box>
    );
}
export default PanelInfo;