import React, { useState, FunctionComponent, useEffect } from "react";
import axios from "axios";
import InputField from "../components/InputField";

const Table: FunctionComponent = () => {
  const [count, setCount] = useState<number>();
  const [categories, setCategories] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("https://api.publicapis.org/categories");
        setCount(result?.data?.count);
        setCategories(result?.data?.categories);
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, []);

  return (
    <div className="p-2">
      <InputField
        className="pb-10"
        onChange={(value) => setInputValue(value)}
      />
      <h1>Table</h1>
      <table className="border border-black w-2/6">
        <tbody>
          <>
            <tr className="border border-black">
              <th>Categories</th>
            </tr>
            {categories
              .filter((category) => {
                if (!inputValue) {
                  return category;
                } else if (
                  category
                    .toLocaleLowerCase()
                    .includes(inputValue.toLocaleLowerCase())
                ) {
                  return category;
                }
              })
              .map((value, index) => {
                return (
                  <tr className="border border-black" key={index}>
                    <td>{value}</td>
                  </tr>
                );
              })}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
