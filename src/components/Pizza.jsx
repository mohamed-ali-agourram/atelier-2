const Pizza = ({ pizza }) => {
 return (
  <div className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
   <img src={pizza.photoName} alt={pizza.name + "_img"} />
   <p>{pizza.name}</p>
   <p>{pizza.price}DHs</p>
   {pizza.soldOut && <span>Sold Out</span>}
  </div>
 );
};

export default Pizza;
