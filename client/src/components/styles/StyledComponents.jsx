import {styled} from "@mui/material";


export const VisuallyHiddenInput = styled("input")({
    border : 0,
    clip: "rect(1px, 1px, 1px, 1px)",
    height: 1,
    margin : -1,
    overflow: "hidden",
    padding: 0,
    position : "absolute",
    whiteSpace : "nowrap",
    width : 1,
});