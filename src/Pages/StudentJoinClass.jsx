import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./startclass.css"

import { AllContext } from "../Context";

function StudentJoinClass() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const { host } = useContext(AllContext);

  const handleFormSubmit = (ev) => {
    const addRomecode = async () => {
      const Response = await fetch(`${host}/api/UpdateItem/${localStorage.getItem('StartClassID')}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },

          body: JSON.stringify(
            {
              "newCode": roomCode
            }
          )
        });
      console.log(await Response.json());

    }
    addRomecode();
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };
  return (
    <div>
      {/* <Navbar/> */}
      <div className="StartClass bg-light">
        <form onSubmit={handleFormSubmit} className="startclassform">
          <div>
            <label className="fs-3">Enter Room Code</label>
          </div>
          <div className="startclassimg">
            <img className='stimage' src="131.jpg" alt="" />
          </div>
          <div>
            <input
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              type="text"
              required
              placeholder="Enter Room Code"
              className="startclassinput"
            />
          </div>
          <button className="btn bg-primary" type="submit">Enter Room</button>
        </form>

      </div>
    

    </div>
  );
}

export default StudentJoinClass;
