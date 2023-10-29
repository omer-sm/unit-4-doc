import React from "react"
import { IMethod } from "../pages"
import Typography from "@mui/joy/Typography"
import Card from "@mui/joy/Card"
import Stack from "@mui/joy/Stack"
import { renderStarIcons } from "../Containers/DocPageContainer"
interface IMethodsListItemProps {
    method: IMethod,
}

export default function MethodsListItem({ method, }: IMethodsListItemProps) {
    return (
        <>
            <Typography level="title-md" >{method.methodName}</Typography>
            <Stack direction="row">
                <Typography level="body-md" ml={1}>חשיבות:</Typography>
                {renderStarIcons(method.methodImportance)}
            </Stack>
            <Card variant="soft" sx={(theme) => ({background: theme.colorSchemes.dark.palette.background.level1})}>
                <code style={{ direction: "ltr", background: "none" }} className="prettyprint">
                    {method.methodCallSyntax}
                </code>
            </Card>
            <Typography level="body-md">{method.methodExplanation}</Typography>
            <br />
        </>
    )
}