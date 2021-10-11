import React from "react";

function User() {
  const userName = "Ece Naz";
  const userSurName = "Cesim";
  return (
    <div>
      <h5 className="userName">
        {userName} {userSurName}
      </h5>
    </div>
  );
}

export default User;
