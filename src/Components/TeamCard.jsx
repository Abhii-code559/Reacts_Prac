import React from "react";

const TeamCard = ({ image, role, name, desc }) => {
  return (
    <div className="card">
     <img src={image} alt={name} className="profile-img" />

      <div className="role">{role}</div>

      <h3>{name}</h3>

      <p>{desc}</p>
    </div>
  );
};

export default TeamCard;