import React from "react"
import Card from "@mui/joy/Card"
import List from "@mui/joy/List"
import ListItemButton from "@mui/joy/ListItemButton"
import ListItemDecorator from "@mui/joy/ListItemDecorator"
import Circle from "@mui/icons-material/Circle"

export default function DocPageNav({scrollTo}: {scrollTo: Function}) {
    return (
        <Card sx={{width: "15%", height: "fit-content", minWidth: "fit-content"}}>
            <List>
                <ListItemButton sx={{display: "flex", alignItems: "stretch"}} onClick={() => {scrollTo(0)}}>
                    <ListItemDecorator><Circle sx={{fontSize: "large"}}/></ListItemDecorator>
                    מידע כללי
                </ListItemButton>
                <ListItemButton sx={{display: "flex", alignItems: "stretch"}} onClick={() => {scrollTo(1)}}>
                    <ListItemDecorator><Circle sx={{fontSize: "large"}}/></ListItemDecorator>
                    שימושים נפוצים
                </ListItemButton>
                <ListItemButton sx={{display: "flex", alignItems: "stretch"}} onClick={() => {scrollTo(2)}}>
                    <ListItemDecorator><Circle sx={{fontSize: "large"}}/></ListItemDecorator>
                    שימוש
                </ListItemButton>
                <ListItemButton sx={{display: "flex", alignItems: "stretch"}} onClick={() => {scrollTo(3)}}>
                    <ListItemDecorator><Circle sx={{fontSize: "large"}}/></ListItemDecorator>
                    פעולות
                </ListItemButton>
            </List>
            
        </Card>
    )
}