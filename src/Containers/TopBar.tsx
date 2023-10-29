import React from "react"
import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"
import Stack from "@mui/joy/Stack"
import IconButton from "@mui/joy/IconButton"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import DisplayModeToggle from "../Components/DisplayModeToggle"

export default function TopBar({displayMenuIcon, toggleMenuDrawer}: {displayMenuIcon: boolean, toggleMenuDrawer: Function}) {
    return (
        <Sheet variant="soft" sx={{direction: "ltr", padding: 0.8, height: "fit-content"}}>
            <Stack direction="row" justifyContent="space-between">
            <Typography level="h3">Unit404</Typography>
            <Stack direction="row" justifyContent="space-between">
            <DisplayModeToggle />
            {displayMenuIcon && <IconButton onClick={() => {toggleMenuDrawer()}}><MenuRoundedIcon /></IconButton>}
            </Stack>
            </Stack>
        </Sheet>
    )
}