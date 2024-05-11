import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//  each componen can return one element not two elements as we have here if i put the <pizza> from pizza component or function to return from the app component

//  VERY IMPORTANT TO NOTICE : we should never write one function inside the other (it does not mean nesting components)
function App() {
  return (
    //  in JSX we can not use class , instead we should use className
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //  first pinkie one is going to javascript mode in the style after the equal sign and then second one or the blue pranthesis is for the javascript object in
  //  order to define INLINE CSS
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* with turnery operator rendering */}

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italien cuisine . 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaobj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still Working on our Menu. Please come back Later :)</p>
      )}

      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza pizzaobj={pizza} key={pizza.name} />;
          })}
        </ul>
      )} */}

      {/* <ul className="pizzas">
        {pizzas.map((pizza) => {
          return <Pizza pizzaobj={pizza} key={pizza.name} />;
        })}
      </ul> */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, 
         spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato , Mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

//  create a new component
function Pizza({ pizzaobj }) {
  // Destructuring
  //  Immediately destructure the props into the object we recieved
  // console.log(props);

  // if (pizzaobj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? " SOLD OUT" : pizzaobj.price + 3}</span>
      </div>
    </li>
  );
  // return null; it should return a markup usually JSX but also we can return nth or null
}

function Footer() {
  // writing the javascript Logic
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // rendering or putting the javascript if else statement and the first
  //  conditional return
  // if (!isOpen) {
  //   return (
  //     <p>
  //       We are Happy to welcome you between {openHour}:00 and {closeHour}:00.
  //     </p>
  //   );
  // }

  // if (hour >= openHour && hour <= closeHour) alert("we are currently Open!");
  // else alert("Sorry we're closed!");
  // instead of the jsx we are using the createElment , the second argument is null because it is for props
  // the argument after props it is the child element , which can be string also
  // return React.createElement("footer", null, " we're currently open! ");
  return (
    <footer className="footer">
      {/* CONDITIONAL RENDERING WITH SHORT CIRCURTING */}
      {isOpen && <Order closeHour={closeHour} openHour={openHour} />}

      {/* {new Date().toLocaleTimeString()} We're currently open{" "} */}
    </footer>
  );
}

//  this is how to recieve multiple props and also recieve it in
// the functional component
function Order({ closeHour, openHour }) {
  // console.log(props);
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">order</button>
    </div>
  );
}

// React rendering our root in version 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// wrapping our App component in the strict mode
// it would render the component twice during the development and also
// react would check if we are using outdated parts of react apis
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
