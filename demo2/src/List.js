import react from "react";
import Responding_to_event from './Responding_to_event'
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
export default function Display(){
    return(
        <>
          <ShoppingList/>
        <Responding_to_event/><br></br>

        </>
      
    )
}
 function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
    
  );

  return (
    <ul>{listItems}</ul>

  );
}


