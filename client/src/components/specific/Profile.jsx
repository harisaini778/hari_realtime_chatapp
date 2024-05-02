import { Avatar, Stack, Typography } from '@mui/material'
import {Face as FaceIcon, AlternateEmail as UserNameIcon,CalendarMonth as CalenderIcon} from "@mui/icons-material"
import React from 'react'
import moment from 'moment'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} justifyContent={"center"}>

     <Avatar sx={{
        width : 200,
        height : 200,
        objectFit: "contain",
        marginBottom : "1rem",
        border : "5px solid white"
     }}/>

      <ProfileCard heading={"Bio"} text={"nkdnkcnsdl nsacnkmc nkascnl"}/>
      <ProfileCard heading={"UserName"} text={"harikumarsaini"} Icon={<UserNameIcon/>}/>
      <ProfileCard heading={"Name"} text={"Hari Kumar Saini"} Icon={<FaceIcon/>}/>
      <ProfileCard heading={"Joined"} text={moment('2023-11-04T18:30:00.000Z').fromNow()} Icon={<CalenderIcon/>}/>

    </Stack>
  )
}

const ProfileCard = ({text,Icon,heading}) => {
    return(
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} textAlign={"center"}>

      {

        Icon && Icon

      }

      <Stack>
        <Typography variant='body1'>{text}</Typography>
        <Typography variant='caption' color={"grey"}>{text}</Typography>
      </Stack>

    
      </Stack>
    )
}

export default Profile