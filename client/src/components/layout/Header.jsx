import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../constants/color'
import {Menu as MenuIcon, Search as SearchIcon,Add as AddIcon,Group as GroupIcon,Logout as LogoutIcon} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'

const Header = () => {


  const navigate = useNavigate();


  const handleMobile = () => {

    console.log("Mobile");
  }

  const openSearchDialog = () => {
    console.log("openSearchDialog");
  }
  

  const openNewGroup = () => {
    console.log("openNewGroup");
  }

  const navigateToGroup = () => {
    console.log("navigateToGroup");
    navigate("/groups");
  }

  const logoutHandler = () => {
    console.log("logout");
  }


  const IconBtn = ({title,icon,onClick}) => {

    return  (

       <Tooltip title={title}>
       <IconButton color='inherit' size='large' onClick={onClick}>
       {icon}
       </IconButton>
       </Tooltip>

    )
  }



  return (
  
    <>
    
    <Box 
    
    sx={{flexGrow:1}} height={"4rem"}>

     <AppBar  position='static' sx={{bgcolor : orange}}>
      
      <Toolbar>
        <Typography  variant="h6" sx={{
          display : {xs : "none",sm : "block"}
          }}>
          ChatCircle
        </Typography>

        <Box sx={{
          display : {xs : "block", sm : "none"}
        }}>
         
        <Tooltip>
        <IconButton color='inherit' size='large' onClick={handleMobile}>
         <MenuIcon/>
         </IconButton>
        </Tooltip>
         </Box>

         <Box sx={{
          flexGrow : 1,
        }}/>

        <IconBtn
        title={"Search"}
        onClick={openSearchDialog}
        icon = {<SearchIcon/>}
        />

        <IconBtn
        title={"New Group"}
        onClick={openNewGroup}
        icon = {<AddIcon/>}
        />

        
        <IconBtn
        title={"Manage Group"}
        onClick={navigateToGroup}
        icon = {<GroupIcon/>}
        />   

        <IconBtn
        title={"Logout"}
        onClick={logoutHandler}
        icon = {<LogoutIcon/>}
        />

         <Box>
          Final
         </Box>

      </Toolbar>
      </AppBar>  


    </Box>
    
    </>

  

  )
}

export default Header