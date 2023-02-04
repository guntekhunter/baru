import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CheckBox from "../Conponent/CheckBox";
import { getCheck, getUsers } from "../Post/post";

export default function CheckList() {
  const [data, setData] = useState([]);
  const [dataCheck, setDataCheck] = useState([]);
  const [check, setCheck] = useState();
  const [checked, setChecked] = useState();
  const location = useLocation();
  const id = parseInt(location.state?.data);

  // fetching data from api to get user information
  const fetchData = async () => {
    // get user
    await getUsers(id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // get todos
    await getCheck(id)
      .then((res) => {
        setDataCheck(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkCallBack = (checked) => {
    setChecked(checked);
  };

  // console.log(dataCheck);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-gray-100 p-6 px-[10rem]">
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

      <div className="p-6 px-[10rem]">
        <h1 className="text-2xl font-bold mb-4">Checklist</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <ul className="list-disc pl-4">
            {dataCheck.map((item) => (
              <li key={item.id} className="list-none">
                {item.completed === true ? (
                  <CheckBox
                    checked={item.completed}
                    id={item.id}
                    checkCallBack={checkCallBack}
                  />
                ) : (
                  <CheckBox
                    checked={checked}
                    checkCallBack={checkCallBack}
                  />
                )}
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
