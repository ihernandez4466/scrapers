import React from 'react';
import { Accordion, AccordionPanel, Box, Button, Text } from 'grommet';
import { Clock } from 'grommet-icons';
import Radio from './Radio';
import PropTypes from 'prop-types';

const renderPanelTitle = (date, title) => {
    const day2 = new Date();
    const difference = day2 - date;
    return (
        <Box gap="medium" direction="row" pad="medium">
            <Clock color={(difference>1) ? "green": "red" }/>
            <Text level={4} size="medium">{title}</Text>
        </Box>
    )
};
const Panel = ({
    tasks
  }) => {
    const [hovering, setHovering] = React.useState(false);
    return (
        <Box>
            <Accordion animate multiple={false}>
                {tasks.map((task, index) => (
                    <AccordionPanel 
                        header={renderPanelTitle(tasks[index].due, tasks[index].title)}
                        onMouseOver={() => setHovering(true)}
                        onMouseOut={() => setHovering(false)}
                        onFocus={() => setHovering(true)}
                        onBlur={() => setHovering(false)}
                    >
                    <Box pad="large" background="light-3" >
                        <Text>Description:</Text>
                        <Text>Subject:</Text>
                        <Text>Assigned to:</Text>
                        <Text>Assigned by:</Text>
                            <Radio/>
                    </Box>
                    </AccordionPanel>
                ))}
            </Accordion>
        </Box>
    )
}

Panel.propTypes = {
    tasks: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        due: PropTypes.instanceOf(Date),
        membersAssigned: PropTypes.string,
    }).isRequired,
};
export default Panel;