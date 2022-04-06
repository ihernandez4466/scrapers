import { RadioButtonGroup } from 'grommet'
import React from 'react'
import { useState } from 'react'


function Radio() {
    const [value, setValue] = React.useState('To-Do');
    return (
      <RadioButtonGroup 
        
        name="doc"
        options={['In Progress', 'Finished']}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        
      />
    );
  }
export default Radio;