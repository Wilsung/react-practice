import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// Original Component function
// export default function ResultModal({result, targetTime}){
//     return (
//         <dialog className="result-modal" open>
//             <h2>You {result}</h2>
//             <p>The Target time was <strong>{targetTime} seconds</strong></p>
//             <p>You stopped timer with <strong>X seconds left.</strong></p>
//             <form method="dialog">
//                 <button>
//                     Close
//                 </button>
//             </form>
//         </dialog>
//     );
// }

//This works, but if we work with other developers - need to foolproof.
// const ResultModal = forwardRef(function RM({ result, targetTime }, ref) {
//     return (
//         <dialog ref={ref} className="result-modal">
//             <h2>You {result}</h2>
//             <p>The Target time was <strong>{targetTime} seconds</strong></p>
//             <p>You stopped timer with <strong>X seconds left.</strong></p>
//             <form method="dialog">
//                 <button>
//                     Close
//                 </button>
//             </form>
//         </dialog>
//     );
// })

const ResultModal = forwardRef(function RM({ onRestart, targetTime, timeRemaining }, ref) {
    const dialog = useRef();

    const userLost = timeRemaining <= 0;
    const formattedTimeRemaining = (timeRemaining/1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
    
    //Returns an object.
    useImperativeHandle(ref, () => {
        return {
            //this can be any name.
            open (){
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onRestart}>
            {userLost ? <h2>You Lost</h2> : <h2>Your Score: {score}</h2>}
            <p>The Target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped timer with <strong>{formattedTimeRemaining} seconds left.</strong></p>
            <form method="dialog" onSubmit={onRestart}>
                <button>
                    Close
                </button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );  
})



export default ResultModal;