import React from "react"
import Stack from "@mui/joy/Stack"
import Typography from "@mui/joy/Typography"
import { pages } from "../pages"
import Divider from "@mui/joy/Divider"
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import Card from "@mui/joy/Card"
import Circle from '@mui/icons-material/Circle'
import ListItemDecorator from "@mui/joy/ListItemDecorator"
import ListItem from "@mui/joy/ListItem"
import MethodsListItem from "../Components/MethodsListItem"
import DocPageNav from "../Components/DocPageNav"
import Footer from "./Footer"

export const renderStarIcons = (value: number) => {
    const stars: React.ReactNode[] = []
    for (let i = 1; i <= 3; i++){
        stars.push(i > value ? <StarOutlineRoundedIcon color="warning"/> : <StarRoundedIcon color="warning"/>)
    }
    return stars
}

const renderUsesList = (pageIndex: number) => {
    const items: React.ReactNode[] = []
    pages[pageIndex].commonUses.forEach((val) => {
        items.push(
        <ListItem sx={{display: "flex", alignItems: "stretch", gap: "0.7rem"}}>
        <ListItemDecorator><Circle sx={{fontSize: "medium"}}/></ListItemDecorator>
        {val}
        </ListItem>)
    })
    return items
}

export default function DocPageContainer({pageIndex, showSideNav}: {pageIndex: number, showSideNav: boolean}) {
    const refs: React.Ref<any>[] = [React.useRef(null), React.useRef(null), React.useRef(null), React.useRef(null)]
    const scrollTo = (sectionIndex: number) => {
        //@ts-ignore
        refs[sectionIndex].current?.scrollIntoView({ behavior: 'smooth', block: "nearest" })
    }
    return (
        <Stack width="100%" justifyContent="space-evenly" direction="row" useFlexGap spacing={4} pt={2} pb={4} maxHeight="100%" >
        <Stack width={showSideNav ? "50%" : "100%"} spacing={1} px={showSideNav ? 4 : 1} overflow="auto">
            <Typography level="h1">{pages[pageIndex].title}</Typography>
            <Divider/>
            <Stack direction="row" >
                <Typography level="title-md" ml={1}>רמת קושי:</Typography>
                {renderStarIcons(pages[pageIndex].difficulty)}
            </Stack>
            <Stack direction="row" >
                <Typography level="title-md" ml={1}>חשיבות:</Typography>
                {renderStarIcons(pages[pageIndex].importance)}
            </Stack>
            <br />
            <Typography level="title-lg" ref={refs[0]}>מידע כללי</Typography>
            <Divider/>
            <Typography level="body-md">{pages[pageIndex].explanation}</Typography>
            <br />
            <Typography level="title-lg" ref={refs[1]}>שימושים נפוצים</Typography>
            <Divider/>
            {renderUsesList(pageIndex)}
            <br />
            <Typography level="title-lg" ref={refs[2]}>שימוש</Typography>
            <Divider/>
            <Card variant="soft" sx={(theme) => ({background: theme.colorSchemes.dark.palette.background.level1})}>
            <code style={{direction: "ltr", background: "none"}} className="prettyprint">{pages[pageIndex].usageSyntax}</code>
            </Card>
            <br />
            <Typography level="title-lg" ref={refs[3]}>פעולות</Typography>
            <Divider/>
            {pages[pageIndex].methods.map(method => {return <MethodsListItem method={method} />})}
            <Divider />
            <br />
            <Footer />
        </Stack>
        {showSideNav && <DocPageNav scrollTo={scrollTo}/>}
        </Stack>
    )
}