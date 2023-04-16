import React, { useRef, useState } from 'react';
import CancelButton from './Components/CancelButton';
import SaveButton from './Components/SaveButton';

export default function Sender(props) {
    const nameInput = useRef(null);
    const homeInput = useRef(null);
    const senderInput = useRef(null);

    const [editMode, setEditMode] = useState(true);
    const [name, setName] = useState(props.name);
    const [home, setHome] = useState(props.home);
    const [sender, setSender] = useState(props.sender);
    const [updatedName, setUpdatedName] = useState(false);
    const [updatedHome, setUpdatedHome] = useState(false);
    const [updatedSender, setUpdatedSender] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        props.delete(props.id);
    };

    const updateComponent = () => {
        setName(nameInput.current.value)
        setHome(homeInput.current.value)
        setSender(senderInput.current.value)
        setEditMode(true);

        if (nameInput.current.value !== props.name) {
            setUpdatedName(true);
        }
        if (nameInput.current.value === props.name) {

            setUpdatedName(false);
        }
        if (homeInput.current.value !== props.home) {
            setUpdatedHome(true);
        }
        if (homeInput.current.value === props.home) {
            setUpdatedHome(false);
        }
        if (senderInput.current.value !== props.sender) {
            setUpdatedSender(true);
        }
        if (senderInput.current.value === props.sender) {
            setUpdatedSender(false);
        }
    }

    const changeEdit = () => {
        setEditMode(!editMode);
    }

    const renderEdit = () => {
        return (
            <>
                <div className='render edit'>
                    <div className='student'>
                        <div className='edit-details '>
                            Original Name:
                            <input
                                type="text"
                                ref={nameInput}
                                defaultValue={props.name}
                            />
                            Original Location:
                            <input
                                type="text"
                                ref={homeInput}
                                defaultValue={props.home} />

                            <img src={props.picture} alt={props.name} />
                        </div>
                    </div>
                    Original data recorder:
                    <input
                        type="text"
                        ref={senderInput}
                        defaultValue={props.sender} />
                    <div>
                        <CancelButton text="Cancel" change={changeEdit} />
                        <SaveButton text="Save" change={updateComponent} />
                    </div>
                </div>
            </>
        )
    }
    const renderDefault = () => {

        return (
            <div className='render default'>
                <h2 onDoubleClick={changeEdit} value={name} style={{ color: updatedName ? 'orange' : '' }} >  {name} </h2>
                <h2 onDoubleClick={changeEdit} value={home} style={{ color: updatedHome ? 'orange' : '' }} >  {home} </h2>
                <img src={props.picture} alt={props.name} />
                <h2 onDoubleClick={changeEdit} value={sender} style={{ color: updatedSender ? 'orange' : '' }}  >  {sender} </h2>
                <button style={{ backgroundColor: '#E54E60' }} onClick={handleClick}> DELETE </button>
            </div >)
    }
    return (

        editMode ? renderDefault() : renderEdit()
    )
}
