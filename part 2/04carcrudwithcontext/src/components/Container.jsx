import React, { useState } from "react";
import { useCar } from "../context/CarContext";

const Container = ({ allCars }) => {
  const [car, setCar] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { cars, addCar, deleteCar, editCar } = useCar();

  const add = (e) => {
    e.preventDefault();
    if (!car || !model || !price || !year) return;
    if (isEditing) {
      editCar(editId, {
        id: editId,
        car,
        model,
        price: Number(price),
        year,
      });
      setIsEditing(false);
      setEditId(null);
    } else {
      addCar({
        id: Date.now(),
        car,
        model,
        price: Number(price),
        year,
      });
    }
    reset();
  };

  const reset = () => {
    setCar("");
    setModel("");
    setPrice("");
    setYear("");
  };

  const startEdit = (car) => {
    setCar(car.car);
    setModel(car.model);
    setPrice(car.price);
    setYear(car.year);
    setEditId(car.id);
    setIsEditing(true);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 p-6">
      <h1 className="heading text-2xl sm:text-3xl font-bold text-center">
        Car Crud App 🚙
      </h1>

      <form
        action=""
        className="formGroup flex flex-col justify-center items-center gap-4 w-full max-w-md"
        onSubmit={add}
      >
        <input
          type="text"
          name=""
          id=""
          value={car}
          onChange={(e) => setCar(e.target.value)}
          className="w-full sm:w-[400px] px-5 py-2 rounded-lg shadow-lg border border-gray-300"
          placeholder="Enter Brand"
          required
        />
        <input
          type="text"
          name=""
          id=""
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full sm:w-[400px] px-5 py-2 rounded-lg shadow-lg border border-gray-300"
          placeholder="Enter Model"
          required
        />
        <input
          type="number"
          name=""
          id=""
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full sm:w-[400px] px-5 py-2 rounded-lg shadow-lg border border-gray-300"
          placeholder="Enter Price"
          required
        />
        <input
          type="number"
          name=""
          id=""
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full sm:w-[400px] px-5 py-2 rounded-lg shadow-lg border border-gray-300"
          placeholder="Enter Year"
          required
        />

        <div className="buttonSection flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 rounded-lg text-white shadow-lg bg-red-400 active:bg-red-500 duration-300 cursor-pointer"
          >
            {isEditing ? "Update Details" : "Add Details"}
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 rounded-lg text-white shadow-lg bg-blue-400 active:bg-indigo-500 duration-300 cursor-pointer"
            onClick={reset}
          >
            Clear Details
          </button>
        </div>
      </form>

      <div className="w-full max-w-md space-y-4">
        {cars.map((car) => {
          return (
            <div
              key={car.id}
              className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg shadow-lg p-5 gap-4"
            >
              <div className="flex flex-col items-start flex-grow">
                <div className="font-semibold text-indigo-900">
                  {car.model} ({car.year})
                </div>
                <div className="font-normal text-gray-600">{car.car}</div>
                <div className="font-normal text-gray-600">${car.price}</div>
              </div>
              <div className="flex flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-white shadow-lg bg-yellow-400 active:bg-yellow-500 duration-300 cursor-pointer"
                  onClick={() => startEdit(car)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-white shadow-lg bg-red-400 active:bg-red-500 duration-300 cursor-pointer"
                  onClick={() => deleteCar(car.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
