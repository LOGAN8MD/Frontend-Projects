import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductContext from "../ProductContext";
import CartContext from "../CartContext";

const SingleProduct = () => {
    let params = useParams();
    const { ProductItems } = useContext(ProductContext);
    const { cartItems, addToCart } = useContext(CartContext);
    console.log(cartItems)
    const singleItem = ProductItems.filter((item) => item.id == params.id);
    let random = Math.floor(Math.random() * 1000);
    return (
        <div>
            <Link to="/allProducts">
                <span className="p-2 bg-white rounded text-black mx-5">
                    {" "}
                    <i
                        className="fa fa-arrow-left mt-5 mr-2"
                        aria-hidden="true"
                    ></i>Back{" "}
                </span>
            </Link>

            {singleItem.map((item) => (
                <div key={item.id} className="flex">
                    <div className=" w-40 m-5">
                        <img src={item.thumbnail} alt={item.title} className="my-3" />
                        {item.images.map((img) => (
                            <div>
                                <img src={img} alt={item.title} className="my-3" key={random} />
                            </div>
                        ))}
                    </div>
                    <div className=" m-5 w-1/2">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="px-10 m-10 w-1/3">
                        <div className="flex justify-between my-5">
                            <h3 className="text-xl ">{item.discountPercentage} % Off</h3>
                            <h3>{item.rating} &#9733;</h3>
                        </div>
                        <h2 className=" text-3xl">{item.title}</h2>
                        <p className="my-10">{item.description}</p>

                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-2xl ">
                                    Rs.
                                    {(
                                        item.price -
                                        (item.discountPercentage * item.price) / 100
                                    ).toFixed(2)}
                                </h3>
                                <h2 className=" line-through mx-5 ">{item.price}</h2>
                            </div>
                            <h3>{item.stock}</h3>
                        </div>

                        <div className=" text-center m-5">
                            <Link to="/placed">
                                <button className=" p-2 bg-white rounded text-black ml-4 mt-5 mx-5">
                                    Buy Now
                                </button>
                            </Link>

                            <button
                                className=" p-2 bg-white rounded text-black ml-4 mt-5 mx-5"
                                onClick={() => {
                                    addToCart(item.title, item.price, item.images[0]);
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SingleProduct;
