import React from "react";
import "./SpellModal.css"

function SpellModal() {
    return (
        <div
            className="modal show"
            style={{ display: 'flex', position: 'initial', justifyContent: 'center' }}
        >
            <modal>
                <modalRow>
                    <modalBox>
                        <modalName>Spell Name</modalName>
                        <modalBody>Charm Person</modalBody>
                    </modalBox>
                    <modalBox>
                        <modalLevel>Level</modalLevel>
                        <modalBody>1</modalBody>
                    </modalBox>
                </modalRow>
                <modalRow>
                    <modalBox>
                        <modalTitle>Casting Time</modalTitle>
                        <modalBody>1 Action</modalBody>
                    </modalBox>
                    <modalBox>
                        <modalTitle>Range</modalTitle>
                        <modalBody>30 ft</modalBody>
                    </modalBox>
                </modalRow>
                <modalRow>
                    <modalBox>
                        <modalTitle>Duration</modalTitle>
                        <modalBody>
                            <div>1 hour</div>
                            <div>Concentration <input type={"checkbox"} defaultChecked={false} /></div>
                        </modalBody>
                    </modalBox>
                    <modalBox>
                        <modalTitle>Components</modalTitle>
                        <modalBody>
                            <div>
                                V <input type={"checkbox"} defaultChecked={true} /> S <input type={"checkbox"} defaultChecked={true} /> M <input type={"checkbox"} defaultChecked={false} />
                            </div>
                        </modalBody>
                    </modalBox>
                </modalRow>
                <modalRow>
                    <modalBox>
                        <modalTitle>Damage</modalTitle>
                        <modalBody>1 Action</modalBody>
                    </modalBox>
                    <modalBox>
                        <modalTitle>Attack Bonus</modalTitle>
                        <modalBody>30 ft</modalBody>
                    </modalBox>
                    <modalBox>
                        <modalTitle>Save DC</modalTitle>
                        <modalBody>30 ft</modalBody>
                    </modalBox>
                </modalRow>
                <modalRow>
                    <modalColumn>
                        <modalBox>
                            <modalTitle>ABJ</modalTitle>
                            <input type={"checkbox"} defaultChecked={true} />
                        </modalBox>
                        <modalBox>
                            <modalTitle>CON</modalTitle>
                            <input type={"checkbox"} defaultChecked={false} />
                        </modalBox>
                        <modalBox>
                            <modalTitle>DIV</modalTitle>
                            <input type={"checkbox"} defaultChecked={false} />
                        </modalBox>
                        <modalBox>
                            <modalTitle>ENC</modalTitle>
                            <input type={"checkbox"} defaultChecked={true} />
                        </modalBox>
                        <modalBox>
                            <modalTitle>EVO</modalTitle>
                            <input type={"checkbox"} defaultChecked={false} />
                        </modalBox>
                        <modalBox>
                            <modalTitle>ILL</modalTitle>
                            <input type={"checkbox"} defaultChecked={false} />
                        </modalBox>
                        <modalBox>
                            <modalTitle>NEC</modalTitle>
                            <input type={"checkbox"} defaultChecked={false} />
                        </modalBox>
                        <modalBox>
                            <modalTitle>TRA</modalTitle>
                            <input type={"checkbox"} defaultChecked={false} />
                        </modalBox>
                    </modalColumn>
                    <modalDescriptions>
                        <modalBox>
                            <modalTitle>Description</modalTitle>
                            <modalBody>  It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.</modalBody>
                        </modalBox>
                        <modalBox>
                            <modalTitle>At Higher Levels</modalTitle>
                            <modalBody>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 ft of each other when you target them.</modalBody>
                        </modalBox>
                    </modalDescriptions>
                </modalRow>
            </modal>
        </div>
    )
}

export default SpellModal