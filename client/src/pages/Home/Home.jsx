import React, {useState, useCallback} from "react";
import { useNavigate} from "react-router-dom";

function Home() {

    const [value, setValue ] = useState();
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`)
    }, [value, navigate]);

  return (
    <div>
      <input type="text" placeholder="enter room code" value={value} onChange={ e => setValue(e.target.value)} />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
}

export default Home;
