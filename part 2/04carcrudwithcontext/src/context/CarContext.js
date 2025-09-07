import React, { createContext, useContext } from "react";

export const CarContext = createContext({
  cars: [
    {
      id: 1,
      car: "Chai Aur Code",
      model: "chai aur react",
      price: 10000,
      year: 2022,
    },
  ],
  addCar: () => {},
  deleteCar: (id) => {},
  editCar: (id, car) => {},
});

export const useCar = () => {
  return useContext(CarContext);
};

export const CarProvider = CarContext.Provider;
