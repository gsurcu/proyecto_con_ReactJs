import React from "react";
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {
  
  return (
    <div>
      <h2>Productos</h2>
            <hr/>
            <div id="cards">
                {/* {items.map((prod) => <Item prod={prod}/>)} */}
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </div>
    </div>
  )
}