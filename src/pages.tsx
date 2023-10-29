import React from "react"
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded'

export interface IMethod {
    methodName: string,
    methodCallSyntax: string,
    methodExplanation: string,
    methodImportance: number,
}

export interface IDocPage {
    title: string,
    icon: React.ReactNode,
    selectedIcon: React.ReactNode,
    usageSyntax: string,
    importance: number,
    difficulty: number,
    explanation: string,
    commonUses: string[],
    methods: IMethod[],
}

export const pages: IDocPage[] = [{
    title: "מחסנית",
    icon: <TableRowsRoundedIcon />,
    selectedIcon: <TableRowsRoundedIcon color="primary" />,
    usageSyntax: "Stack<Type> name = new Stack<Type>;",
    importance: 2,
    difficulty: 1,
    explanation: "מחסנית זה כשדוחפים ומוציאים",
    commonUses: ["במעבדים של מחשב", "בהיסטורית שינויים בקובץ"],
    methods: [
        {
            methodName: "דחיפה (Push)",
            methodCallSyntax: "Stack.Push(element);",
            methodExplanation: "שם בלמעלה של המחסנית",
            methodImportance: 3
        }, {
            methodName: "פופ (Pop)",
            methodCallSyntax: "Stack.Pop(element);",
            methodExplanation: "מוריד מהלמעלה של המחסנית",
            methodImportance: 3
        }, {
            methodName: "פופ (Pop)",
            methodCallSyntax: "Stack.Pop(element);",
            methodExplanation: "מוריד מהלמעלה של המחסנית",
            methodImportance: 3
        }, {
            methodName: "פופ (Pop)",
            methodCallSyntax: "Stack.Pop(element);",
            methodExplanation: "מוריד מהלמעלה של המחסנית",
            methodImportance: 3
        }
    ],
}, {
    title: "מחסנית 2",
    icon: <TableRowsRoundedIcon />,
    selectedIcon: <TableRowsRoundedIcon color="primary" />,
    usageSyntax: "Stack<Type> name = new Stack<Type>;",
    importance: 2,
    difficulty: 1,
    explanation: "מחסנית זה כשדוחפים ומוציאים",
    commonUses: ["במעבדים של מחשב", "בהיסטורית שינויים בקובץ"],
    methods: [
        {
            methodName: "push",
            methodCallSyntax: "stack.push(element)",
            methodExplanation: "שם בלמעלה של המחסנית",
            methodImportance: 4
        }
    ]
}]