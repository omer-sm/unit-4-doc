import React from "react"
import Typography from "@mui/joy/Typography"
import Sheet from "@mui/joy/Sheet"

export default function Footer() {
    return (
        <Sheet sx={{width: "100%", height: "fit-content", paddingBottom: 8, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Typography level="body-sm">Unit404 הוא אתר לא רשמי לתיעוד של ספריית Unit4. לאתר אין קשר לספריה / יוצריה והוא נוצר על ידי תלמיד בשביל תלמידים.</Typography>
            <Typography level="body-sm">מצאתם שגיאה? האתר צריך עדכון? <Typography component="a" href="mailto: smorodinskyomer@gmail.com" variant="plain" color="primary">דברו איתי</Typography></Typography>
            <Typography level="body-sm">קוד המקור של האתר זמין לצפיה <Typography component="a" href="github.com" variant="plain" color="primary">בגיטהאב</Typography></Typography>
        </Sheet>
    )
}