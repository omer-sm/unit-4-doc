import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Card from "@mui/joy/Card"
import { useColorScheme } from "@mui/joy/styles"

export default function CodeBlock(props: any) {
    const { mode } = useColorScheme()
    return (
        <Card variant="soft">
            <SyntaxHighlighter language="cs" customStyle={{direction: "ltr", background: "none", padding: "0", margin: "0"}} style={mode === 'dark' ? tomorrowNight : tomorrow}>{props.children}</SyntaxHighlighter>
        </Card>
    )
}