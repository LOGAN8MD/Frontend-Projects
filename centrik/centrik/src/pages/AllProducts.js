import React from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import SearchFilter from "../components/SearchFilter";


const AllProducts = () => {
    return (
        <div className=" static">
            <SearchFilter />

            <div className=" flex">
                <Filter></Filter>
                <Card />
            </div>
        </div>
    );
};

export default AllProducts;
