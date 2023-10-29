import React from "react"
import List from "@mui/joy/List"
import ListItem from "@mui/joy/ListItem"
import Typography from "@mui/joy/Typography"
import Sheet from "@mui/joy/Sheet"
import ListDivider from '@mui/joy/ListDivider'
import NavMenuItem from "../Components/NavMenuItem"
import { pages } from "../pages"
import NavMenuItemLandingPage from "../Components/NavMenuItemLandingPage"
import { pageProperties } from "./LandingPage"
export default function NavMenu({currentPageIndex, setPageIndex, isInDrawer, closeDrawer}: {currentPageIndex: number, setPageIndex: Function, isInDrawer: boolean, closeDrawer: Function}) {
    const renderItems = () => {
        const items: React.ReactNode[] = []
        pages.forEach((val, ind) => {
            items.push(<NavMenuItem isSelected={currentPageIndex === ind} itemKey={ind} icon={currentPageIndex === ind ? val.selectedIcon : val.icon} text={val.title} handleClick={setPageIndex} closeDrawer={closeDrawer}/>)
        })
        return items
    }
    return (
        <Sheet sx={{maxHeight: "100%", minWidth: "fit-content", width: isInDrawer ? "100%" : "10%"}}>
        <List>
            <ListItem>
                <Typography level="title-lg">תפריט</Typography>
            </ListItem>
            <ListDivider inset="gutter" />
            <NavMenuItemLandingPage isSelected={currentPageIndex === -1} itemKey={-1} icon={currentPageIndex === -1 ? pageProperties.selectedIcon : pageProperties.icon} text={pageProperties.title} handleClick={setPageIndex} closeDrawer={closeDrawer} />
            {renderItems()}
        </List>
        </Sheet>
    )
}

