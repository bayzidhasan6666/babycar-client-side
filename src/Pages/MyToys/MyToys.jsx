import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/addToys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-gray-900 text-gray-400 min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-2xl text-purple-600 font-semibold mb-4">
          Here Are the {myToys.length} Toy Cars Available
        </h1>
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="border border-teal-500 rounded px-2 py-1 bg-gray-800"
        />
      </div>
      <table className="min-w-full bg-opacity-10 border border-teal-500">
        <thead>
          <tr className="text-purple-500">
            <th className="border-b border-teal-500 py-2">Seller Name</th>
            <th className="border-b border-teal-500 py-2">Car Name</th>
            <th className="border-b border-teal-500 py-2">Sub-category</th>
            <th className="border-b border-teal-500 py-2">Price</th>
            <th className="border-b border-teal-500 py-2">
              Available Quantity
            </th>
            <th className="border-b border-teal-500 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy) => (
            <tr key={toy._id}>
              <td className="border-b border-purple-600 py-2">
                {toy.sellerName ? toy.sellerName : 'N/A'}
              </td>
              <td className="border-b border-purple-600 py-2">{toy.name}</td>
              <td className="border-b border-purple-600 py-2">
                {toy.subcategory}
              </td>
              <td className="border-b border-purple-600 py-2">${toy.price}</td>
              <td className="border-b border-purple-600 py-2">
                {toy.quantity}
              </td>

              <td className="border-b border-purple-600 py-2">
                <Link to={`/allToys/${toy._id}`}>
                  <button className="text-teal-500">View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
