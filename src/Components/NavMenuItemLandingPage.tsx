import React from "react"
import ListItemButton from "@mui/joy/ListItemButton"
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import Typography from "@mui/joy/Typography"

interface INavMenuItemProps {
    isSelected: boolean,
    itemKey: number,
    icon: React.ReactNode,
    text: string,
    handleClick: Function,
    closeDrawer: Function,
}

export default function NavMenuItemLandingPage({isSelected, itemKey, icon, text, handleClick, closeDrawer}: INavMenuItemProps) {
    return (
        <ListItemButton selected={isSelected} onClick={() => {handleClick(itemKey); closeDrawer()}}>
            <ListItemDecorator>{icon}</ListItemDecorator>
            <Typography color={isSelected ? "primary" : "neutral"}>{text}</Typography>
        </ListItemButton>
    )
}