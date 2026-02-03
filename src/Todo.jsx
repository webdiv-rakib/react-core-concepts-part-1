// export default function Todo({ task, isDone }) {
//     return (
//         <h4>Task: {task}</h4>
//     )
// }

// Conditional Rendering Option-1
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Working On: {task}</li>
//     }
// }

// Conditional Rendering Option-2
export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished: {task}</li>
    }
    return <li>Working On: {task}</li>
}