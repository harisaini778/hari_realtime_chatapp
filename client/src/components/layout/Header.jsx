import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState, lazy } from "react";
import { orange } from "../constants/color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationsDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    console.log("Mobile");
    setIsMobile(!isMobile);
  };

  const openSearch = () => {
    console.log("openSearch");
    setIsSearch(!isSearch);
  };

  const openNewGroup = () => {
    console.log("openNewGroup");
    setIsNewGroup(!isNewGroup);
  };

  const navigateToGroup = () => {
    console.log("navigateToGroup");
    navigate("/groups");
  };

  const notificationHandler = () => {
    console.log("notificationHandler");
    setIsNotification(!isNotification);
  };

  const logoutHandler = () => {
    console.log("logout");
  };

  const IconBtn = ({ title, icon, onClick }) => {
    return (
      <Tooltip title={title}>
        <IconButton color="inherit" size="large" onClick={onClick}>
          {icon}
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              ChatCircle
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <Tooltip>
                <IconButton color="inherit" size="large" onClick={handleMobile}>
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            <IconBtn
              title={"Search"}
              onClick={openSearch}
              icon={<SearchIcon />}
            />

            <IconBtn
              title={"New Group"}
              onClick={openNewGroup}
              icon={<AddIcon />}
            />

            <IconBtn
              title={"Manage Group"}
              onClick={navigateToGroup}
              icon={<GroupIcon />}
            />

            <IconBtn
              title={"Manage Group"}
              onClick={notificationHandler}
              icon={<NotificationsIcon />}
            />

            <IconBtn
              title={"Logout"}
              onClick={logoutHandler}
              icon={<LogoutIcon />}
            />

            <Box>Final</Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense
          fallback={
            <div>
              <Backdrop open />
            </div>
          }
        >
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense
          fallback={
            <div>
              <Backdrop open />
            </div>
          }
        >
          <NotificationsDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense
          fallback={
            <div>
              <Backdrop open />
            </div>
          }
        >
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

export default Header;
