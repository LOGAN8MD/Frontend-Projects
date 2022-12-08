import React from "react";
import CartContext from "../CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
    let showCart = false;

    const { setCartItems, cartItems } = useContext(CartContext);
    const HandleBuy = () => {
        setCartItems([]);
    };

    const amounts = cartItems.map((item) => item.price);

    let totalAmount = amounts.reduce((prev, nxt) => prev + nxt, 0);
    console.log(totalAmount);
    if (totalAmount > 1) {
        showCart = true;
    }
    return (
        <div className=" bg-gray-900 border-t-2 border-white h-screen">
            {showCart ? (
                <div className="flex justify-evenly py-5">
                    <div>
                        <h2>
                            Total : <span>{totalAmount}</span>
                        </h2>
                    </div>
                    <div>
                        <Link to="/placed">
                            <button
                                className=" bg-slate-50 p-2 rounded text-black"
                                onClick={() => HandleBuy()}
                            >
                                {" "}
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className=" h-screen flex justify-center items-center">
                    <div>
                        <h1>CART IS EMPTY :( </h1>
                        <Link to="/allProducts">
                            <button className=" p-2 bg-white rounded text-black mt-5">
                                Lets Save More...
                            </button>
                        </Link>
                    </div>
                </div>
            )}

            {cartItems.map((item) => (
                <div className="flex w-1/2 justify-between mx-auto p-5 bg-gradient-to-br from-gray-300 to bg-gray-200 rounded mb-0 mt-5 text-black h-32 pb-5 ">
                    <div>
                        <img
                            src={item.url}
                            alt={item.name}
                            className=" w-24 h-24 rounded border-2 border-black"
                        />
                    </div>
                    <div className="flex justify-around">
                        <h2 className="m-10">{item.name}</h2>
                    </div>
                    <div>
                        <h2 className="m-10"> {item.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
