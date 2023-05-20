import React, { useEffect, useState } from 'react';
import useTitle from '../../PageTitle/useTitle';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);

  // pagination start
  const [totalToys, setTotalToys] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const totalPages = Math.ceil(totalToys / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch('http://localhost:5000/totalToys')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.totalToys);
        setTotalToys(data.totalToys);
      })
      .catch((error) => console.log(error));
  }, []);
  // pagination end

  useEffect(() => {
    AOS.init();
  }, []);

  useTitle('All Toys');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/addToys?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setAllToys(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

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

  const options = [10, 15, 20];
  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  return (
    <div
      data-aos="fade-down"
      className="bg-gray-900 text-gray-400 min-h-screen p-8"
    >
      <div className="text-center">
        <h1 className="text-2xl text-purple-600 font-semibold mb-4">
          Here Are the {filteredToys.length} Toy Cars Available In This Page
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
                <Link to={`/allToys/${toy._id}`}>
                  <button className="text-purple-500 border border-purple-500 px-2">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mx-auto flex w-fit space-x-2">
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={` ${
              currentPage === number
                ? 'px-3 py-1 border-none bg-purple-700 text-white mt-5'
                : 'px-3 py-1 border border-purple-600 mt-5'
            }`}
            key={number}
          >
            {number}
          </button>
        ))}
        <select
          className="border text-teal-500 bg-transparent border-teal-500 px-2 mt-5 "
          value={itemsPerPage}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option
              className="border text-teal-500"
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AllToys;
