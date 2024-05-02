import { Avatar, AvatarGroup, Stack,Box} from '@mui/material'
import React from 'react'


//to do transform
const AvatarCard = (

    {avatar =[],max=4}
) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
   <AvatarGroup>
    <Box width={"5rem"} height={"3rem"}>
    {avatar.map((i, index) => (
  <Avatar
    key={index} // Use index as the key for each Avatar
    src={i}
    alt={`Avatar ${index}`}
    sx={{
      width: "3rem",
      height: "3rem",
      position: "absolute",
      left: {
        xs: `${index * 1.5}rem`,
        sm: `${index}rem`,
      },
    }}
  />
))}

    </Box>
   </AvatarGroup>

    </Stack>
  )
}

export default AvatarCard