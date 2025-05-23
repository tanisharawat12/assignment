
import "./App.css";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CallIcon from '@mui/icons-material/Call';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ChatIcon from '@mui/icons-material/Chat';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function App() {
   return (
    
    <div className="mainContainer">
       <div className="leftcontainer">
      <nav className="navbar">
        <h1>Nikola Tesla</h1>
       <span className="star"> <StarBorderOutlinedIcon sx={{ fontSize: 16 }}/></span>
       <button className="dot">...</button>
       <button className="call"> <CallIcon sx={{ fontSize: 14 }}/>Call</button>
       <button className="snooze"> <BedtimeRoundedIcon sx={{ fontSize: 14 }}/> Snooze</button>
       <button className="close"> <DownloadOutlinedIcon sx={{ fontSize: 14 }}/> Close</button>
       

      </nav>
    
     <div className="content">
      <span className="chaticon"><ChatIcon sx={{ fontSize: 14 }} /></span><span className="chat">Chat</span>
      <span className="upicon"><KeyboardArrowDownIcon sx={{ fontSize: 14 }}/></span>
    
     
     <button className="send">Send </button>
     <button className="up"><KeyboardArrowDownIcon  sx={{ fontSize: 14 }}/></button>
      
     </div>
</div>
      
      
      
      
<div className="rightcontainer">

       <nav className="navbar">
        <span className="copilot">Copilot</span>
       <span className="details">Details</span>
       <span className="open"><OpenInNewIcon sx={{ fontSize: 16 }}/> </span>
      </nav>

      <h1>Hi, I'm Fin AI Copilot </h1>
      <h2>Ask me anything about this conversation</h2>
      <input type="text" placeholder="Ask a question..."/> 
</div>
      
</div>
  );
}
