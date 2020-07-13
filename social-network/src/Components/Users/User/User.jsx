import React from "react";
import UsersPhoto from "../../../images/user.png";
import styles from "./User.module.css";

let User = ({name, id, photos, status, followed}) => {
    return (
        <div className={styles.userInformationBLock}>
            <div>
                { name || "---"}
            </div>
            <div>
                {status || "---"}
            </div>
            <div>
                {followed ? "Follow" : "Unfollow"}
            </div>
            <div>
                <img className={styles.userPhoto} src={ photos.large || UsersPhoto }/>
            </div>
        </div>
    );
}

export default User;