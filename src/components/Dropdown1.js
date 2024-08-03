import React from 'react'
import {Form, DropdownButton,  Dropdown,Button,ButtonGroup} from 'react-bootstrap';
function Dropdown1() {
  return (
    <div>
          <ButtonGroup>
          <DropdownButton as={ButtonGroup} title="Hospitals" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Telangana</Dropdown.Item>
          <Dropdown.Item eventKey="2">Andhra Pradesh</Dropdown.Item>
          <Dropdown.Item eventKey="2">Maharashtra</Dropdown.Item>
          <Dropdown.Item eventKey="2">Karnataka</Dropdown.Item>
          <Dropdown.Item eventKey="2">Women & Child</Dropdown.Item>
          </DropdownButton>
          </ButtonGroup>
    </div>
  )
}

export default Dropdown1