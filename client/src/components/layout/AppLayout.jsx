import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";


const AppLayout = () => (WrappedComponent) => {
  return (props) => {

  const params = useParams();

  const chatId = params.chatId;

  const handleDeleteChat = (e,_id,groupChat) => {
    
   e.preventDefault();

   console.log("Delete Chat", _id,groupChat);

  }


    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>
        <Grid
          item
          sm={4}
          md={3}
          height={"100%"}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <ChatList chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}
          
          onlineUsers={["111","222"]}
          />
        </Grid>
        <Grid item height={"100%"} xs={12} sm={8} md={5} lg={6}>
          {<WrappedComponent  {...props}/>}
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          height={"100vh"}
          sx={{
            display: { xs: "none", md: "block" },
            bgcolor: "rgba(0,0,0,0.85)",
            marginTop : "1rem",
           
          }}
        >
         <Profile/>
        </Grid>
      </Grid>
      </>
    );
  };
};

export default AppLayout;
