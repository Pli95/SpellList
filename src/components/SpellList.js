import React, { useState } from "react";
import { Badge, Button, ButtonGroup, Card, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Spells from '../data/spellList.json';
import "./SpellModal.css"
import { FaCheck } from 'react-icons/fa'

function SpellList(headerData) {
    const data = require("../data/spellList.json")
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(data[0]);

    const handleClose = () => setShow(false);
    const handleShow = function (spell, i) {
        setModalData(spellTypes[i]);
        setShow(true);
    };

    //filter from dropdown
    const [filter, setFilter] = useState('All')
    let filteredSpell = []

    const filterSpell = (filter) => {
        setFilter(filter)
    }

    //filter from Header
    const listType = headerData.listType.charAt(0).toUpperCase() + headerData.listType.slice(1)
    let spellTypes = []
    let buttons

    if (listType === "All") {
        spellTypes = Spells
        buttons = <ButtonGroup>
            <Button onClick={() => filterSpell("All")}>No Filter</Button>
            <DropdownButton id="dropdown-basic-button" title="Filter by Level">
                <Dropdown.Item onClick={() => filterSpell("Cantrip")}>{filter === "Cantrip" && <FaCheck />}Cantrip</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("1")}>{filter === "1" && <FaCheck />}Level 1</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("2")}>{filter === "2" && <FaCheck />}Level 2</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Filter by Class">
                <Dropdown.Item onClick={() => filterSpell("Bard")}>{filter === "Bard" && <FaCheck />}Bard</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Cleric")}>{filter === "Cleric" && <FaCheck />}Cleric</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Druid")}>{filter === "Druid" && <FaCheck />}Druid</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Paladin")}>{filter === "Paladin" && <FaCheck />}Paladin</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Ranger")}>{filter === "Ranger" && <FaCheck />}Ranger</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Sorcerer")}>{filter === "Sorcerer" && <FaCheck />}Sorcerer</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Wizard")}>{filter === "Wizard" && <FaCheck />}Wizard</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    } else if (listType === "Cantrip" || listType === "2" || listType === "1") {
        spellTypes = Spells.filter(item => (item.class.includes(listType)) || (item.level === listType) || item.name.includes(listType))
        buttons = <ButtonGroup>
            <Button onClick={() => filterSpell("All")}>No Filter</Button>
            <DropdownButton id="dropdown-basic-button" title="Filter by Class">
                <Dropdown.Item onClick={() => filterSpell("Cleric")}>Cleric</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Druid")}>Druid</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Ranger")}>Ranger</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("Wizard")}>Wizard</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    } else {
        spellTypes = Spells.filter(item => (item.class.includes(listType)) || (item.level === listType) || item.name.includes(listType))
        buttons = <ButtonGroup>
            <Button onClick={() => filterSpell("All")}>No Filter</Button>
            <DropdownButton id="dropdown-basic-button" title="Filter by Level">
                <Dropdown.Item onClick={() => filterSpell("Cantrip")}>Cantrip</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("1")}>Level 1</Dropdown.Item>
                <Dropdown.Item onClick={() => filterSpell("2")}>Level 2</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    }

    

    //filter from dropdown
    if (filter === "All") {
        filteredSpell = spellTypes
    } else {
        filteredSpell = spellTypes.filter(item => (item.class.includes(filter)) || (item.level === filter))
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <span style={{ width: '100%', textAlign: 'left', padding: '10px' }}>
                {buttons}
                {/* <Badge pill>Druid</Badge> */}
            </span>

            {
                filteredSpell
                    .sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1
                        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1
                        } else {
                            return 0;
                        }

                    })
                    .map((spell, i) => {
                        // console.log(i)
                        return (
                            <Card
                                style={{ width: '18rem', cursor: 'pointer' }}
                                key={i}
                                onClick={() => {
                                    handleShow(true, i)
                                }}>
                                <Card.Header style={{ textAlign: 'left' }}>Level: {spell.level} </Card.Header>
                                <Card.Body>
                                    <Card.Title>{spell.name}</Card.Title>
                                    <Card.Text>{spell.quick_info}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
            }


            <Modal show={show} onHide={handleClose} onClick={handleClose}>
                <div className="modalRow">
                    <div className="modalBox">
                        <div className="modalName">Spell Name</div>
                        <div className="modalBody">{modalData.name}</div>
                    </div>
                    <div className="modalBox">
                        <div className="modalLevel">Level</div>
                        <div className="modalBody">{modalData.level}</div>
                    </div>
                </div>
                <div className="modalRow">
                    <div className="modalBox">
                        <div className="modalTitle">Casting Time</div>
                        <div className="modalBody">{modalData.casting_time}</div>
                    </div>
                    <div className="modalBox">
                        <div className="modalTitle">Range</div>
                        <div className="modalBody">{modalData.range}</div>
                    </div>
                </div>
                <div className="modalRow">
                    <div className="modalBox">
                        <div className="modalTitle">Duration</div>
                        <div className="modalBody">
                            <div>{modalData.duration}</div>
                            <div>Concentration <input type={"checkbox"} defaultChecked={false} /></div>
                        </div>
                    </div>
                    <div className="modalBox">
                        <div className="modalTitle">Components</div>
                        <div className="modalBody">
                            <div>{modalData.components.item}</div>
                            <div>
                                V <input type={"checkbox"} defaultChecked={modalData.components.v} /> S <input type={"checkbox"} defaultChecked={modalData.components.s} /> M <input type={"checkbox"} defaultChecked={modalData.components.m} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modalRow">
                    <div className="modalBox">
                        <div className="modalTitle">Damage</div>
                        <div className="modalBody">{modalData.damage}</div>
                    </div>
                    <div className="modalBox">
                        <div className="modalTitle">Attack Bonus</div>
                        <div className="modalBody">{modalData.attack_bonus}</div>
                    </div>
                    <div className="modalBox">
                        <div className="modalTitle">Save DC</div>
                        <div className="modalBody">{modalData.save_dc}</div>
                    </div>
                </div>
                <div className="modalRow">
                    <div className="modalColumn">
                        <div className="modalBox">
                            <div className="modalTitle">ABJ</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.ABJ} />
                        </div>
                        <div className="modalBox">
                            <div className="modalTitle">CON</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.CON} />
                        </div>
                        <div className="modalBox">
                            <div className="modalTitle">DIV</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.DIV} />
                        </div>
                        <div className="modalBox">
                            <div className="modalTitle">ENC</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.ENC} />
                        </div>
                        <div className="modalBox">
                            <div className="modalTitle">EVO</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.EVO} />
                        </div>
                        <div className="modalBox">
                            <div className="modalTitle">ILL</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.ILL} />
                        </div>
                        <div className="modalBox">
                            <div className="modalTitle">NEC</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.NEC} />
                        </div>
                        <div className="modalBox">
                            <div className="modalTitle">TRA</div>
                            <input className="spellTypeCheckbox" type={"checkbox"} defaultChecked={modalData.spell_type.TRA} />
                        </div>
                    </div>
                    <div className="modalDescriptions">
                        <div className="modalBox">
                            <div className="modalTitle">Description</div>
                            {modalData.description.p && <div className="modalBody" style={{ textAlign: "left" }}>{modalData.description.p}</div>}
                            <ul style={{ textAlign: "left" }}>
                                {modalData.description.p1 && <li>{modalData.description.p1}</li>}
                                {modalData.description.p2 && <li>{modalData.description.p2}</li>}
                                {modalData.description.p3 && <li>{modalData.description.p3}</li>}
                                {modalData.description.p4 && <li>{modalData.description.p4}</li>}
                                {modalData.description.p5 && <li>{modalData.description.p5}</li>}
                                {modalData.description.p6 && <li>{modalData.description.p6}</li>}
                            </ul>
                            {modalData.description.pEnd && <div className="modalBody" style={{ textAlign: "left" }}>{modalData.description.pEnd}</div>}


                        </div>
                        {modalData.higher_level && <div className="modalBox">
                            <div className="modalTitle">At Higher Levels</div>
                            <div className="modalBody">{modalData.higher_level}</div>
                        </div>}
                    </div>
                </div>
            </Modal>

        </div >
    )
}

export default SpellList