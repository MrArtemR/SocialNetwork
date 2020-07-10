import React from "react";
import UsersPhoto from "../../../images/user.png";

let User = ({name, id, photos, status, followed}) => {
    return (
        <div>
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
                <img src={ photos.large || UsersPhoto }/>
            </div>
        </div>
    );
}

export default User;