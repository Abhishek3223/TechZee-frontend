import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import './room.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const RoomPage = () => {

    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = 1295600999;
        const serverSecret = "2b151b29aef654bf5642c7845bba8924"; 
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(), 
            localStorage.getItem('name')
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

   return (

    <div className='room-page'>
        {/* <Navbar/> */}
      <div className="room-vid-login" ref={myMeeting} />
      <Footer/>
      
    </div>
  )
}

export default RoomPage