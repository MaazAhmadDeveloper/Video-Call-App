import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function RoomPage() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 253400935;
    const serverSecret = "ba7b1dba9b277a88fe95c74c69279aa0";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      `User Name`
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
    });
  };

  return(
    <div>
        <h1>RoomPage {roomId}</h1>
        <div ref={myMeeting}/>

    </div>
  )
}

export default RoomPage;
