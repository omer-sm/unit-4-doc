import React from "react"
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from "@mui/joy/IconButton"
import { useColorScheme } from "@mui/joy/styles"

export default function DisplayModeToggle() {
    const { mode, setMode } = useColorScheme()
    return (
        <IconButton onClick={() => { setMode(mode === 'light' ? 'dark' : 'light') }}>
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    )
}