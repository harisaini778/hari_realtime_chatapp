import { React, useState } from "react";
import { Container, Typography, Paper, TextField, Button, Avatar,Stack, IconButton } from "@mui/material";
import {CameraAlt as CameraAltIcon}  from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import {useFileHandler, useInputValidation,useStrongPassword} from "6pp";
import userNameValidator from "../utils/validator";



const Login = () => {
  const [isLogin, setIsLogin] = useState("true");

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("",userNameValidator);
  const password = useStrongPassword();

  const avatar = useFileHandler("single");

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{
                  marginTop: "1rem",
                }}
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button onClick={toggleLogin} fullWidth>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5" m={"1rem"}>Sign Up</Typography>
            <form style={{
                margin : "0.5rem"
            }}
            onSubmit={handleSignUp}
            >
            <Stack flexDirection="vertical"
            position = {"relative"}
            width= {"10rem"}
            margin = {"auto"}
            >
           <Avatar sx={{
            width : "10rem",
            height : "10rem",
            objectFit : "contain",
           }}
           src={avatar.preview}
           />

           <IconButton sx={{
            position : "absolute",
            bottom : "0",
            right : "0",
            color : "white",
            bgcolor : "rgba(0,0,0,0.5)",
            ":hover" : {
                bgcolor : "rgba(0,0,0,0.7)"
            }
           }}
           component = "label"
           >
            <>
            <CameraAltIcon/>
            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
            </>
           </IconButton>

            </Stack>

            {
                avatar.error && (
                    <Typography color="error" variant="caption">
                     {avatar.error}
                    </Typography>
                )
               }
            <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
               <TextField
                required
                fullWidth
                label="UserName"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
               {
                username.error && (
                    <Typography color="error" variant="caption">
                     {username.error}
                    </Typography>
                )
               }
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password.value}
                onChange={password.changeHandler}
              />
                {
                password.error && (
                    <Typography color="error" variant="caption">
                     {password.error}
                    </Typography>
                )
               }
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{
                  marginTop: "1rem",
                }}
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button onClick={toggleLogin} fullWidth>
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
