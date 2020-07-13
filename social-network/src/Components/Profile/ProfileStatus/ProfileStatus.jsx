import React, {useState, useEffect} from 'react';

const ProfileStatus = ({status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [currentStatus, setCurrentStatus] = useState(status);

    useEffect(()=>{
        setCurrentStatus(status);
    }, [status]);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const diactivatedEditMode = () => {
        setEditMode(false);
        updateStatus(currentStatus);
    }

    const onStatusChange = (e) => {
        setCurrentStatus(e.currentTarget.value);
    }

    return(
        <div>
            {
                !editMode && 
                <div>
                    <span onDoubleClick={activatedEditMode}>{status || "---"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={diactivatedEditMode} autoFocus={true} value={currentStatus}></input>
                </div>
            }
        </div>
    );
}

export default ProfileStatus;