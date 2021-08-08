import ItemsList from './ItemsList';

function Cart() {
  return (
       
    <div className="Cart">
        <div className="product">
            <h1>image</h1>
            <h1>name</h1>
            <h1>price</h1>
        </div>
       <ItemsList />
    </div>
  );
}

export default Cart;