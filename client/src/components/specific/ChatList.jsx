import { Stack } from '@mui/material'
import React,{memo} from 'react'
import ChatItem from '../shared/ChatItem'

const ChatList = ( 
    {
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [
        {
            chatId : "",
            count : 0,
        }
    ],
    handleDeleteChat,
}
) => {
  return (
    <Stack width={w} direction={"column"}>

        {
            chats?.map((data,index)=>{

                const {avatar,_id,name,groupChat,members} = data;

               const  newMessagesAlerts =  newMessagesAlert.find(
                (chatItem)=> chatItem.chatId === _id
               );
               

               const isOnline = members?.some((member)=>onlineUsers.includes(_id));

               //console.log(isOnline)

                return (

                      <ChatItem newMessageAlerts={newMessagesAlerts} isOnline={isOnline} avatar={avatar} name={name} _id={_id} key={_id} groupChat={groupChat}
                      
                      sameSender = {chatId===_id} handleDeleteChat = {handleDeleteChat} index={index}
                      />

                )
            })
        }

    </Stack>
  )
}

export default ChatList;