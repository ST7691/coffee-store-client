import React from 'react'
import { useLoaderData } from 'react-router'

const CoffeeDetail = () => {
    const { name, Photo, quantity, Price, Details, Supplier, Taste } =
      useLoaderData();
  return (
    <div className="flex justify-around items-center mx-auto  bg-[#F5F4F1] shadow-sm lg:mr-[300px] lg:ml-[300px] mt-10">
      <figure>
        <img className="lg:w-[351px] lg:h-[450px]" src={Photo} alt="Movie" />
      </figure>
      <div className="">
        <h2 className="card-title">Niceties </h2>
        <p>Name : {name}</p>
        <p>Quantity : {quantity}</p>
        <p>Price : {Price}</p>
        <p>Details : {Details}</p>
        <p>Supplier: {Supplier}</p>
        <p>Taste: {Taste}</p>
      </div>
    </div>
  );
}

export default CoffeeDetail