import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverViewComponent = ({income, expense, addTransaction}) => {

    const [isShow, setIsShow] = useState(false);
    return ( 
        <>
        <div className="balanceSection">
        <p>balance: {income - expense}</p>
         <button onClick={() => setIsShow((prevState) => !prevState)}
         className={`btn ${isShow && "cancel"}`}>
            {isShow ? "Cancel" : "Add"}
         </button>
        </div>

        {isShow &&<TransactionForm 
        addTransaction={addTransaction}
        setIsShow={setIsShow}/>}

        <div className="expenseSection">
         <div className="expense-box">
            Expense <span style={{color:"red"}}>{expense} $</span></div>
         
         <div className="expense-box">
            income <span>{income} $</span></div>
        </div>
    </>
     );
};
 
export default OverViewComponent;