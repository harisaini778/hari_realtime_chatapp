import React,{useMemo} from "react";
import { Link } from "../styles/StyledComponents";
import { Hidden, Typography,Stack,Box } from "@mui/material";
import AvatarCard from "./AvatarCard";


const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlerts,
    index=0,
    handleDeleteChat,
}) => {


  //console.log("chatItem : ",newMessageAlerts);

  return (

    <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)} sx={{padding: "0"}}>

    <div style={{
        display : "flex",
        gap :"1rem",
        position : "relative",
        alignItems : "center",
        padding : "1rem",
        backgroundColor : sameSender ? "black" : "unset",
        color : sameSender ? "white" : "unset",
        borderBottom : "1px solid #f0f0f0",
        justifyContent : "space-between",
    }}>

     <AvatarCard avatar={avatar}/>

      <Stack>
      
      <Typography>{name}</Typography>

      {newMessageAlerts && 
        <Typography sx={{
          color : "white"
        }}>{newMessageAlerts.count}New Message</Typography>}

      </Stack>

      {isOnline && 
      <Box  sx={{
        width : "10px",
        height : "10px",
        borderRadius : "50%",
        backgroundColor : "green",
        position  : "aboslute",
        top : "50%",
        right : "1rem",
        transform  : "translateY(-50%)"
      }}>

      </Box>
      }

      
     
    </div>

    </Link>
  )
};

export default ChatItem;
