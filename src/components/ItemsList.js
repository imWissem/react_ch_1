import { useState } from "react";
import Item from "./Item";
import PropTypes from "prop-types";

import iph11 from "./iph11.jfif"
import pc from "./pc.jfif"
import R8 from "./R8.jfif"

const ItemsList = () => {
  const [items] = useState([
    { image: iph11 , name: 'iphone 11', price: 1349.99, id: 1 },
    { image: pc, name: 'Razer blade', price: 7633.64, id: 2 },
    { image: R8, name: 'Audi R8', price: 216.245, id: 3 }
  ])
  const handleName = (id) => {
    const res = items.find(it => it.id == id ) ;
    alert(` This is , ${res.name} ! `);  
  } 
 
  return (
    <div className="ItemsList">
      <Item items={items} handleName={handleName}  />
    </div>
  );
}

ItemsList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
 
export default ItemsList;