import { useEffect, useState } from "react";

const TransactionComponent = (props) => {
    const [searchItem, setSearchItem] = useState('');
    const [filterTnx, setFilterTnx] = useState(props.transactions);

    const filterTransactions =(search) => {
        if(!search || search === "") {
            setFilterTnx(props.transactions);
            return;
        }
      const filtered = props.transactions.filter((t) => 
      t.desc.toLowerCase().includes(search.toLowerCase()));
        setFilterTnx(filtered);
    }

    const changeHandler = (e) => {
        setSearchItem(e.target.value);
        filterTransactions(e.target.value);
    }

    useEffect(() => {
        filterTransactions(searchItem);
    },[props.transactions])


    return (
        <section>
            <input type="text" 
            value={searchItem} 
            onChange={changeHandler}
            placeholder="search for tnx..."
            className="search"/>

            {filterTnx.length ?
            filterTnx.map((t) => (

            <div key={t.id} className="transaction"
            style={{borderRight: t.type === "expense" && "5px solid red"}}>
               <span>{t.desc}</span>
               <span>$ {t.amount}</span>
             </div>
            )) : "add some data"}
            </section>
   );
};
 
export default TransactionComponent;