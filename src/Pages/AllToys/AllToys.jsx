import React, { useEffect, useState } from 'react';

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addToys')
      .then((response) => response.json())
      .then((data) => {
        setAllToys(data);
        setFilteredToys(data.slice(0, 20)); // Display 20 results by default
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Filter toys based on search query
    const filtered = allToys.filter((toy) => {
      const name = toy.name ? toy.name.toLowerCase() : '';
      return name.includes(searchQuery.toLowerCase());
    });
    setFilteredToys(filtered);
  }, [searchQuery, allToys]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const viewDetails = (toyId) => {
    // Implement the logic to view details of a toy
  };

  return (
    <div className="bg-gray-900 text-gray-400 min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-2xl text-purple-600 font-semibold mb-4">
          Here Are the {filteredToys.length} Toy Cars Available
        </h1>
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-teal-500 rounded px-2 py-1 bg-gray-800"
        />
      </div>
      <table className="min-w-full  bg-opacity-10 border border-teal-500">
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
          {filteredToys.map((toy) => (
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
                <button
                  className="text-teal-500"
                  onClick={() => viewDetails(toy.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
