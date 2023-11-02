import React from "react"
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded'
import ParkRoundedIcon from '@mui/icons-material/ParkRounded'

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
    usageSyntax: "Stack<Type> name = new Stack<Type>();",
    importance: 3,
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
}, {
    title: "תור",
    icon: <MoreHorizRoundedIcon />,
    selectedIcon: <MoreHorizRoundedIcon color="primary" />,
    usageSyntax: "Queue<Type> name = new Queue<Type>();",
    importance: 2,
    difficulty: 2,
    explanation: "תור הוא מבנה נתונים מסוג FIFO - First In First Out. זאת אומרת, כשנרצה להוציא ממנו פריט אז נוציא את הפריט הראשון שהכנסו אליו. זה בדיוק כמו תור בחנות, מי שנכנס ראשון יוצא ראשון ומי שנכנס אחרון יוצא אחרון. הדרך העיקרית לעבוד עם תורים היא עם לולאות while או רקורסיה.",
    commonUses: ["יצירת 'רשימת המתנה' לפעולות על מנת לוודא שהן מתבצעות בסדר נכון", "יצירת queue באפליקציות מוזיקה", "לאפשר בקשות לרכיב מסוים גם כשהוא עסוק (לדוגמה לבקש הדפסה תוך כדי שהמדפסת מדפיסה משהו אחר)"],
    methods: [
        {
            methodName: "הכנסה (Insert)",
            methodCallSyntax: "Queue.Insert(element);",
            methodExplanation: "שמה אלמנט בסוף התור",
            methodImportance: 3,
            params: [
                {
                    paramName: "element",
                    paramType: "<Type>",
                    explanation: "אלמנט לשים בסוף התור"
                }
            ],
            returns: {
                paramName: "",
                paramType: "void",
                explanation: "",
            }
        }, {
            methodName: "הוצאה (Remove)",
            methodCallSyntax: "Queue.Remove();",
            methodExplanation: "מוציאה מהתור את האלמנט שנמצא בראש שלו ומחזירה אותו.",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "element",
                paramType: "<Type>",
                explanation: "האלמנט שנמצא בראש התור"
            }
        }, {
            methodName: "הצצה (Head)",
            methodCallSyntax: "Queue.Head();",
            methodExplanation: "מחזירה את האלמנט בראש התור בלי להוציא אותו ממנו.",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "element",
                paramType: "<Type>",
                explanation: "האלמנט שנמצא בראש התור"
            }
        }
    ],
}, {
    title: "רשימה מקושרת",
    icon: <LinkRoundedIcon />,
    selectedIcon: <LinkRoundedIcon color="primary" />,
    usageSyntax: "Node<Type> name = new Node<Type>(value);",
    importance: 2,
    difficulty: 3,
    explanation: "רשימה מקושרת היא אוסף של Nodes שמחוברות אחת לשניה, כאשר כל Node מכילה ערך והפניה לNode הבא ברשימה (או null אם היא האחרונה). חשוב לציין שרשימה מקושרת היא לא מבנה נתונים משל עצמה וכשאומרים 'רשימה מקושרת' הכוונה היא לאוסף Nodes. דרך העיקרית לעבוד עם רשימות מקושרות היא בעזרת רקורסיה.",
    commonUses: ["אחסון נתונים בגודל לא ידוע", "אחסון נתונים שמאפשר הוצאה נוחה של אלמנט מכל מקום בתוכו"],
    methods: [
        {
            methodName: "הגדרת הבא (SetNext)",
            methodCallSyntax: "Node.SetNext(Node);",
            methodExplanation: "מגדירה את הNode הבא ברשימה.",
            methodImportance: 3,
            params: [
                {
                    paramName: "Node",
                    paramType: "<Node<Type>>",
                    explanation: "Node להגדיר כהבא"
                }
            ],
            returns: {
                paramName: "",
                paramType: "void",
                explanation: "",
            }
        }, {
            methodName: "קבלת הבא (GetNext)",
            methodCallSyntax: "Node.GetNext();",
            methodExplanation: "מחזירה את הNode הבא ברשימה (או null אם אין כזה)",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "Node",
                paramType: "<Node<Type>>",
                explanation: "הNode הבא ברשימה (או null אם אין)"
            }
        }, {
            methodName: "הגדרת ערך (SetValue)",
            methodCallSyntax: "Node.SetValue(value);",
            methodExplanation: "מגדירה את הערך של הNode.",
            methodImportance: 2,
            params: [
                {
                paramName: "value",
                paramType: "<Type>",
                explanation: "ערך חדש להגדיר לNode."
            }],
            returns: {
                paramName: "",
                paramType: "void",
                explanation: ""
            }
        }, {
            methodName: "קבלת ערך (GetValue)",
            methodCallSyntax: "Node.GetValue();",
            methodExplanation: "מחזירה את הערך של הNode.",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "value",
                paramType: "<Type>",
                explanation: "הערך שמוגדר לNode"
            }
        }
    ],
}, {
    title: "עץ",
    icon: <ParkRoundedIcon />,
    selectedIcon: <ParkRoundedIcon color="primary" />,
    usageSyntax: "BinNode<Type> name = new BinNode<Type>(value);",
    importance: 3,
    difficulty: 3,
    explanation: "עץ (נקרא גם עץ בינארי) הוא מבנה נתונים שמתבסס על אותו עיקרון של רשימה מקושרת, אבל בשונה מרשימה מקושרת, בעץ לכל Node יש ימין ושמאל, לא רק הבא. הNode הראשון של העץ נקרא ה'שורש', והNodeים האחרונים בעץ נקראים ה'עלים'.",
    commonUses: ["אחסון נתונים שמאפשר חיפוש מהיר ויעיל של ערך מסוים"],
    methods: [
        {
            methodName: "הגדרת שמאל (SetLeft)",
            methodCallSyntax: "BinNode.SetLeft(BinNode);",
            methodExplanation: "מגדירה את הBinNode שיהיה משמאל.",
            methodImportance: 3,
            params: [
                {
                    paramName: "BinNode",
                    paramType: "<BinNode<Type>>",
                    explanation: "BinNode להגדיר כשמאל"
                }
            ],
            returns: {
                paramName: "",
                paramType: "void",
                explanation: "",
            }
        }, {
            methodName: "קבלת שמאל (GetLeft)",
            methodCallSyntax: "Node.GetLeft();",
            methodExplanation: "מחזירה את הBinNode שנמצא משמאל (או null אם אין כזה)",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "BinNode",
                paramType: "<BinNode<Type>>",
                explanation: "הBinNode שנמצא משמאל (או null אם אין)"
            }
        }, {
            methodName: "הגדרת ימין (SetRight)",
            methodCallSyntax: "BinNode.SetRight(BinNode);",
            methodExplanation: "מגדירה את הBinNode שיהיה מימין.",
            methodImportance: 3,
            params: [
                {
                    paramName: "BinNode",
                    paramType: "<BinNode<Type>>",
                    explanation: "BinNode להגדיר כימין"
                }
            ],
            returns: {
                paramName: "",
                paramType: "void",
                explanation: "",
            }
        }, {
            methodName: "קבלת ימין (GetRight)",
            methodCallSyntax: "Node.GetRight();",
            methodExplanation: "מחזירה את הBinNode שנמצא מימין (או null אם אין כזה)",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "BinNode",
                paramType: "<BinNode<Type>>",
                explanation: "הBinNode שנמצא מימין (או null אם אין)"
            }
        }, {
            methodName: "הגדרת ערך (SetValue)",
            methodCallSyntax: "BinNode.SetValue(value);",
            methodExplanation: "מגדירה את הערך של הBinNode.",
            methodImportance: 1,
            params: [
                {
                paramName: "value",
                paramType: "<Type>",
                explanation: "ערך חדש להגדיר לBinNode."
            }],
            returns: {
                paramName: "",
                paramType: "void",
                explanation: ""
            }
        }, {
            methodName: "קבלת ערך (GetValue)",
            methodCallSyntax: "BinNode.GetValue();",
            methodExplanation: "מחזירה את הערך של הBinNode.",
            methodImportance: 3,
            params: [],
            returns: {
                paramName: "value",
                paramType: "<Type>",
                explanation: "הערך שמוגדר לBinNode"
            }
        }
    ],
}]