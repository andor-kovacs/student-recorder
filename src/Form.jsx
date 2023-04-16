import React, { useState, useEffect } from 'react';

export default function Form(props) {
    const [sender, setSender] = useState("");
    const [count, setCount] = useState(0);
    const [approved, setApproved] = useState(0);

    useEffect(() => {
        setApproved(
            count - props.deletedCounter
        );
    }, [props.deletedCounter, count]);

    const handleChange = (e) => {
        setSender(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.insert(sender)

        document.getElementById('delayedForm').setAttribute('disabled', 'disabled');
        setTimeout(
            function () {
                document.getElementById('submitButton');
            }, 2000);
        return false
    }

    const handleCount = () => {
        if (sender.length > 0) {
            setCount((c) => c + 1)
        }
    }

    return (
        < div className='form-container'>
            <h1 className='title'> Admitted students recorder </h1>
            <div className='datas'>
                <form action="#" id="delayedForm" method='GET' onSubmit={handleSubmit}>
                    <label htmlFor="input-field" className='input-field'>
                        <h3> Administrator: </h3>
                        <input type="text" id="submitInput" required='required' className="sender" value={sender} onChange={handleChange} name="sender" maxLength="30" />
                    </label>
                    <button type='submit' id='submitButton' onClick={handleCount} > SUBMIT </button>
                </form>
                <div className='statistics'>
                    <p> All: {count}</p>
                    <p> Deleted: {props.deletedCounter} </p>
                    <p> Approved: {approved} </p>
                </div>
            </div>
        </div >
    )
}