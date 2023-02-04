import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCheck, getUsers } from "../Post/post";

export default function CheckList() {
  const [data, setData] = useState([]);
  const [dataCheck, setDataCheck] = useState([]);
  const [dataCheckFiltered, setDataCheckFiltered] = useState([]);
  const location = useLocation();
  const id = parseInt(location.state?.data);
  console.log(id);

  // fetching data from api to get user information
  const fetchData = async () => {
    await getUsers(id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
    await getCheck(id)
      .then((res) => {
        setDataCheck(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // filtering todose base on user id
    const filteredCheck = dataCheck.filter((item) => item.userId === id);

  // console.log(dataCheck);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(dataCheck);
  console.log(dataCheckFiltered);
  return (
    <div>
      <div className="bg-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <h1 className="text-lg font-bold">{data.name}</h1>
              <p className="text-gray-600">{data.email}</p>
            </div>
          </div>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
              Logout
            </button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Checklist</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <ul className="list-disc pl-4">
            {dataCheck.map((item) => (
              <li key={item.id} className="list-none">
                <input
                  type="checkbox"
                  className="mr-2"
                  id="item1"
                  checked={item.completed}
                />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
