import "./App.css";
import Pizza from "./components/Pizza";
import pizzaJsonData from "./data.json";

function App() {

 return (
  <main className="container">
   <div className="header">
    <h1>Tous Les HIBA</h1>
   </div>
   <div className="menu">
    <div className="pizzas">
     {pizzaJsonData.map((pizza, index) => (
      <Pizza key={index} pizza={pizza} />
     ))}
    </div>
   </div>

   <div className="header">
    <h1>Produits Filtrés</h1>
   </div>
   <div className="menu">
    <div className="pizzas">
     {pizzaJsonData.map((pizza, index) => {
      if (pizza.price >= 15) {
       return <Pizza key={index} pizza={pizza} />;
      }
     })}
    </div>
   </div>
  </main>
 );
}

export default App;
