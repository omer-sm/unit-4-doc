import React from "react"
import Typography from "@mui/joy/Typography"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import Stack from "@mui/joy/Stack"
import Divider from "@mui/joy/Divider"

export const pageProperties = {
    title: "ראשי",
    icon: <HomeRoundedIcon />,
    selectedIcon: <HomeRoundedIcon color="primary" />
}

export default function LandingPage({ isDesktopLayout }: { isDesktopLayout: boolean }) {
    return (
        <Stack width="100%" justifyContent="start" direction="row" useFlexGap spacing={4} pt={2} pb={4} maxHeight="100%" >
            <Stack width={isDesktopLayout ? "50%" : "100%"} spacing={1} px={isDesktopLayout ? 21 : 1} overflow="auto">
                <Typography level="h1">ברוכים הבאים לאתר Unit404</Typography>
                <Divider />
                <Typography level="body-md">Unit404 הוא אתר תיעוד לא רשמי לספרית Unit4.</Typography>
                <Typography level="title-md">הערה: הקוד באתר כתוב בשפת C#, אבל הקוד לא אמור להיות משמעותית שונה בJava.</Typography>
                <Typography level="body-md">ליצירת קשר -<Typography component="a" href="mailto: smorodinskyomer@gmail.com" variant="plain" color="primary">במייל (עומר)</Typography></Typography>
                <Typography level="body-md">קוד המקור של האתר זמין<Typography component="a" href="https://github.com/omer-sm/unit404" variant="plain" color="primary">בגיטהאב</Typography></Typography>
            </Stack>
        </Stack>
    )
}