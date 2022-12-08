import React from "react";
import { useState } from "react";
import data from "../database";

import {useSelector, useDispatch } from "react-redux";
import { rating,discount,prize } from "./actions/index";

const SearchFilter = () => {

    const getData=useSelector((state)=>state.sendTheData)
    console.log(getData)

    const [filterProduct, setFilterProduct] = useState([]);


    const dispatch=useDispatch()

    function sorting(e) {
        if (e.target.value === "prize") {
            data.map((product) =>
                setFilterProduct(filterProduct.push(product.price))
            );
            console.log(filterProduct);

            return <>filterProduct</>;
        }
    }

    return (
        <div className="flex justify-end my-5  border-black border-solid  ">
            <form action="#">
                <h1>{getData}</h1>
                <input
                    type="text"
                    placeholder="Search "
                    className="p-2  bg-slate-50 text-black w-60 rounded"
                />
                <select
                    className="mx-5 w-40 p-2 bg-slate-50 text-black border-0 rounded"
                    name="sort"
                    id="sort"
                    onChange={sorting}
                >
                    <option value="#">Sort by</option>
                    <option value="rating" onClick={()=>{dispatch(rating)}}>Rating</option>
                    <option value="discount" onClick={()=>{dispatch(discount)}}>Discount</option>
                    <option value="prize" onClick={()=>{dispatch(prize)}}>Prize</option>
                </select>
            </form>
        </div>
    );
};

export default SearchFilter;
