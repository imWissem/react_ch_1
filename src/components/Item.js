const Item = ({ items,handleName }) => {
    return (
      <div className="item">
        {items.map(it => (
          <div className="product" key={it.id} onClick={() => handleName(it.id)}>
            <img src={it.image} alt={it.name} />
            <p className="name">{ it.name }</p> 
            <p>{ it.price } $</p>
           
          </div>
        ))}
      </div>
    );
  }
   
  export default Item;