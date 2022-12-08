import { React } from "react";
import CartContext from "../CartContext";
import ProductContext from "../ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";





const Card = () => {


  
    const getData=useSelector((state)=>state.sendTheData)
    
   
    const { ProductItems } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    // const {Gbrand}  =useContext(Brand);
    

    return (
        <div className=" flex flex-wrap justify-evenly text-center text-black border-t-2 border-white">
           <h1>{getData}</h1>
            {ProductItems.map((product) => (
               
                <Link 
                to={`/items/${product.id}`}
                    className=" w-1/4 p-5  m-5 bg-gradient-to-br from-gray-300 to bg-gray-200 rounded hover:scale-105 ease-in-out"
                    key={product.id}
                >
                    <div className="flex-col  ">
                        <div>
                            {" "}
                            <img
                                src={product.thumbnail}
                                alt=""
                                className=" m-auto  h-48 w-40 rounded border-2 border-black"
                            />
                        </div>
                        <h2 className=" p-2"> {product.title}</h2>
                        <div className=" flex justify-between m-5">
                            <h2>
                                {" "}
                                {(
                                    product.price -
                                    (product.discountPercentage * product.price) / 100
                                ).toFixed(2)}
                            </h2>
                            <button
                                onClick={(e) =>
                                    addToCart(product.title, product.price, product.images[0]) ||
                                    e.preventDefault()
                                }
                            >
                                {" "}
                                <i className="fa-solid fa-bag-shopping m-2"></i>
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Card;
