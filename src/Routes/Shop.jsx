import { useEffect } from "react";
import ShopCard from "../Components/ShopCard";
import { useOutletContext } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const url = `https://fakestoreapi.com/products?limit=18`;

const Shop = () => {
  const { collectionData, cartData } = useOutletContext();
  const [collection, setCollection] = collectionData;
  const [cart, setCart] = cartData;

  function View(item){
    return (
      <div className="flex flex-col justify-between items-center w-72 bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="p-8 rounded-t-lg"
            src={item.image}
            alt={item.title}
            width={300}
          />  
        <div className="px-5 pb-5 w-full">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900">
              {item.title} 
            </h5>
          <div className="flex items-center justify-around">
            <span className="text-2xl font-bold font-bebas text-orange-700">
              ${item.price}
            </span>
          </div>
        </div>
      </div>
    );
  }


  function addToCart(item) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If the item exists, update its count
      setCart((prevCart) => {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      });
    } else {
      // If the item doesn't exist, add it to the cart with count 1
      setCart((prevCart) => [...prevCart, { ...item, count: 1 }]);
    }
  }

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getProducts = async function () {
      try {
        if (collection === null) {
          console.log("ran");
          const response = await fetch(url);
          const data = await response.json();
          setCollection(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 w-full justify-items-center content-center  p-6 pt-10 md:px-8 xl:px-16 2xl:px-32  ">
      {collection &&
        collection.map((item) =>
          item.category !== "electronics" ? (
            <ShopCard
              key={item.id}
              {...item}
              addToCart={() => addToCart(item)}
              
            ></ShopCard>
          ) : null
        )}
    </section>
  );
};

export default Shop;