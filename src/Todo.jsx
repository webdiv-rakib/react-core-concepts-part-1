// export default function Todo({ task, isDone }) {
//     return (
//         <h4>Task: {task}</h4>
//     )
// }

// Conditional Rendering Option-1 (if else condition)
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Working On: {task}</li>
//     }
// }

// Conditional Rendering Option-2 (if condition)
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Working On: {task}</li>
// }

// Conditional Rendering Option-3 (Ternary Operator)
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'Finished' : 'Working On'}: {task}</li>
//     )
// }

// Conditional Rendering Option-4 (&& operator)
// export default function Todo({ task, isDone }) {
//     return (
//         <h4>{task} {isDone && ': Done'}</h4>
//     )
// }

// Conditional Rendering Option-5 (|| operator)
// export default function Todo({ task, isDone }) {
//     return (
//         <h4>{task} {isDone || ': Do It'}</h4>
//     )
// }

// Conditional Rendering Option-6
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else {
        listItem = <li>Working On: {task}</li>
    }
    return listItem;
}