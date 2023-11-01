import React from "react"
import { IMethod } from "../pages"
import Typography from "@mui/joy/Typography"
import Stack from "@mui/joy/Stack"
import { renderStarIcons } from "../Containers/DocPageContainer"
import CodeBlock from "./CodeBlock"
interface IMethodsListItemProps {
    method: IMethod,
}

const renderParamsList = (method: IMethod) => {
    const items: React.ReactNode[] = []
    method.params.forEach((val) => {
        items.push(
            <Typography level="body-md"><Typography level="body-md" color="primary">{val.paramName}</Typography>(<Typography level="body-md" color="warning">{val.paramType}</Typography>) - {val.explanation}</Typography>
        )
    })
    return items
}

export default function MethodsListItem({ method, }: IMethodsListItemProps) {
    return (
        <>
            <Typography level="title-md" >{method.methodName}</Typography>
            <Stack direction="row">
                <Typography level="body-md" ml={1}>חשיבות:</Typography>
                {renderStarIcons(method.methodImportance)}
            </Stack>
            <CodeBlock>{method.methodCallSyntax}</CodeBlock>
            <Typography level="body-md">{method.methodExplanation}</Typography>
            {method.params.length ? <Typography level="title-md">מקבלת:</Typography> : <></>}
            {renderParamsList(method)}
            <Typography level="title-md">מחזירה: </Typography>
            {method.returns.paramType === "void" ? 
            <Typography level="body-md">לא מחזירה ערך</Typography> :
            <Typography level="body-md"><Typography level="body-md" color="primary">{method.returns.paramName}</Typography>(<Typography level="body-md" color="warning">{method.returns.paramType}</Typography>) - {method.returns.explanation}</Typography>}
            <br />
        </>
    )
}