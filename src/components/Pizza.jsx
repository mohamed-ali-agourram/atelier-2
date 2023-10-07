const Pizza = ({ pizza }) => {
 return (
  <div className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
   <img src={pizza.photoName} alt={pizza.name + "_img"} />
   <div>
    <h3>{pizza.name}</h3>
    <p>{pizza.price}DHs</p>
    {pizza.soldOut && <span>Sold Out</span>}
   </div>
  </div>
 );
};

export default Pizza;
