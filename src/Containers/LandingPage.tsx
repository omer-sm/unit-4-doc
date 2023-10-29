import React from "react"
import Typography from "@mui/joy/Typography"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import Footer from "./Footer"
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
                <Typography level="title-lg">מה זה האתר הזה?</Typography>
                <Typography level="body-md">אתר Unit404 הוא אתר תיעוד לא רשמי לספרית Unit4. האתר לא קשור לספריה עצמה / ליוצרים שלה, והוא נוצר על ידי תלמיד בשביל תלמידים.</Typography>
                <br />
                <Typography level="title-lg">למה האתר נוצר?</Typography>
                <Typography level="body-md">למרות שמאות תלמידים ברחבי הארץ משתמשים בספרית Unit4 כחלק מלימודי מדעי המחשב, התיעוד היחיד שקיים בשבילה הוא מסורבל, קשה למציאה, ומאוד לא עדכני.
                למרות שפעולות הספריה ואופן השימוש בה מאוד דומה לזה של שאר הספריות הדומות, יש בה דברים שונים ופעולות שלא קיימות בה אבל כן בספריות אחרות,
                 ואין סיבה שתלמידים יצטרכו לנחש מה אפשר ומה לא. המטרה העיקרית זה שהאתר יעזור לתלמידים שמשתמשים בספרית Unit4.</Typography>
                <Typography level="title-md">הערה: הקוד באתר כתוב בשפת C#, אבל הקוד לא אמור להיות משמעותית שונה בJava.</Typography>
                <br />
                <Typography level="title-lg">אודות</Typography>
                <Typography level="body-md">היי, אני עומר - אני תלמיד י"ב מתל אביב ושנה שעברה הספריה הזאת עשתה לי את המוות, אז החלטתי לנסות שזה לא יקרה לאחרים.
                עשיתי את האתר הזה כפרויקט אישי כדי לעזור לתלמידים, מקווה שהצלחתי בזה :)</Typography>
                <Typography level="body-md">לשאלות/בקשות/טענות/כל דבר מוזמנים<Typography component="a" href="mailto: smorodinskyomer@gmail.com" variant="plain" color="primary">לכתוב לי במייל</Typography></Typography>
                <Typography level="body-md">מוזמנים לחטט בקוד מקור של האתר<Typography component="a" href="github.com" variant="plain" color="primary">בגיטהאב</Typography> :)</Typography>
            </Stack>
        </Stack>
    )
}