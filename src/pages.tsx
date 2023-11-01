import React from "react"
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'

export interface IParam {
    paramName: string,
    paramType: string,
    explanation: string,
}

export interface IMethod {
    methodName: string,
    methodCallSyntax: string,
    methodExplanation: string,
    methodImportance: number,
    params: IParam[],
    returns: IParam,
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
    explanation: "מחסנית היא מבנה נתונים מסוג LIFO - Last In First Out. זאת אומרת, כשנרצה להוציא ממנה פריט אז נוציא את הפריט האחרון שהכנסנו אליה. זה דומה לערימה, ששמים בה פריטים הם יהיו בלמעלה של הערימה, ואז אם נרצה להוציא פריטים נוריד מהלמעלה. הדרך העיקרית לעבודה עם מחסניות היא עם לולאות while או רקורסיה.",
    commonUses: ["שמירת היסטורית שינויים בקובץ (כדי לאפשר Undo)", "אחסון נוח לנתונים עם כמות לא ידועה"],
    methods: [
        {
            methodName: "דחיפה (Push)",
            methodCallSyntax: "Stack.Push(element);",
            methodExplanation: "שמה אלמנט בראש (הלמעלה) של המחסנית.",
            methodImportance: 3,
            params: [
                {
                    paramName: "element",
                    paramType: "<Type>",
                    explanation: "אלמנט לשים בראש המחסנית"
                }
            ],
            returns: {
                paramName: "",
                paramType: "void",
                explanation: "",
            }
        }, {
            methodName: "הורדה (Pop)",
            methodCallSyntax: "Stack.Pop();",
            methodExplanation: "מורידה מהמחסנית את האלמנט שנמצא בראש שלה ומחזירה אותו.",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "element",
                paramType: "<Type>",
                explanation: "האלמנט שנמצא בראש המחסנית"
            }
        }, {
            methodName: "הצצה (Top)",
            methodCallSyntax: "Stack.Top();",
            methodExplanation: "מחזירה את האלמנט בראש המחסנית בלי להוריד אותו ממנה.",
            methodImportance: 2,
            params: [],
            returns: {
                paramName: "element",
                paramType: "<Type>",
                explanation: "האלמנט שנמצא בראש המחסנית"
            }
        }
    ],
}]