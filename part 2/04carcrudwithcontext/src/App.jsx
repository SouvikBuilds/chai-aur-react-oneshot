import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CarProvider } from "./context/CarContext.js";
import Container from "./components/Container.jsx";

function App() {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars((prev) => [...prev, { id: Date.now(), ...car }]);
  };

  const deleteCar = (id) => {
    if (confirm("Are You Sure To delete This Car's Details?")) {
      setCars((prev) => prev.filter((car) => car.id !== id));
    } else {
      return;
    }
  };

  const editCar = (id, updateCar) => {
    if (confirm("Are You Sure To Edit This Car's Details?")) {
      setCars((prev) =>
        prev.map((car) => (car.id === id ? { ...car, ...updateCar } : car))
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    const cars = JSON.parse(localStorage.getItem("cars"));
    if (cars && cars.length > 0) setCars(cars);
  }, []);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  return (
    <CarProvider value={{ cars, addCar, deleteCar, editCar }}>
      <Container />
    </CarProvider>
  );
}

export default App;
