import React, { useState } from 'react';
import '../../styles/components/cards/order-with-card.css';
const OrderCard = () => {
  const [selected, setSelected] = useState(null);

  const handleCheckboxChange = (event) => {
    setSelected(event.target.value);
  }
 

  /*
    BEST
    - eu nu vreau sa apara la fiecare ci la aia care are cel mai mic pret si timpul cel mai scurt de livrare
    
    scrisul ingrosat la optiunea selectata 
  */

  return (
    <div className="card">
      <div className="card-body">
        <label>
          <input type="checkbox" value="BoltFood" checked={selected === "BoltFood"} onChange={handleCheckboxChange} />

              <text className={selected === "BoltFood" ? "bold_text" : "regular_text"} >BoltFood</text>
          
          <text className='best-tag'>BEST</text>
        </label>
        
        <label>
          <input type="checkbox" value="UberEats" checked={selected === "UberEats"} onChange={handleCheckboxChange} />

          <text className={selected === "UberEats" ? "bold_text" : "regular_text"} >UberEats</text>
          
        </label>
        
        <label>
          <input type="checkbox" value="Tazz" checked={selected === "Tazz"} onChange={handleCheckboxChange} />
          
          <text className={selected === "Tazz" ? "bold_text" : "regular_text"} >Tazz</text>

        </label>
        
        <label>
          <input type="checkbox" value="Glovo" checked={selected === "Glovo"} onChange={handleCheckboxChange} />
          
          <text className={selected === "Glovo" ? "bold_text" : "regular_text"} >Glovo</text>

        </label>
      </div>
      <div className="card-footer">
        <p className='delivery'>Delivery Fee:
        
        <text> {selected === "BoltFood" ? "20 lei" : selected === "Tazz" ? "10 lei" : selected === "UberEats" ? "25 lei" : selected === "Glovo" ? "35 lei":""}</text>
        </p>
        <p className='delivery'>Delivery Time:
        
        <text> {selected === "BoltFood" ? "30 min" : selected === "Tazz" ? "40 min" : selected==="UberEats"? "50 min": selected==="Glovo"? "60 min":""}</text>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;