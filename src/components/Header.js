import React from "react";
import { Navbar, Container, NavDropdown, Nav, Form, InputGroup } from "react-bootstrap"
import { FiSearch } from 'react-icons/fi'

export default function Header({ filterList }) {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <Navbar style={{ backgroundColor: "#698c80" }} variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#" onClick={() => { filterList("All"); refreshPage() }}>Spell List</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Classes">
                        <NavDropdown.Item onClick={() => filterList("Bard")}>Bard</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => filterList("Cleric")}>Cleric</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => filterList("Druid")}>Druid</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => filterList("Paladin")}>Paladin</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => filterList("Ranger")}>Ranger</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => filterList("Sorcerer")}>Sorcerer</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => filterList("Wizard")}>Wizard</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Levels">
                        <NavDropdown.Item onClick={() => filterList("1")}>Level 1</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => filterList("2")}>Level 2</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => filterList("Cantrip")}>Cantrips</Nav.Link>
                    <Nav.Link onClick={() => filterList("All")}>All Spells  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <InputGroup className="mb-3">
                        <InputGroup.Text><FiSearch /></InputGroup.Text>
                        <Form.Control
                            type="search"
                            placeholder="Spell search..."
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => filterList(e.target.value)}
                        />
                    </InputGroup>
                </Form>
            </Container>
        </Navbar>
    );
}