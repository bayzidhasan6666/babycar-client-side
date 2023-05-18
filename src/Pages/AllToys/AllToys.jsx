import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import your Modal component here

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [toys, setToys] = useState([
    {
      id: 1,
      seller: 'John Doe',
      toyName: 'Teddy Bear',
      subCategory: 'Stuffed Animals',
      price: 19.99,
      quantity: 5,
      picture: 'https://example.com/teddybear.jpg',
      sellerEmail: 'johndoe@example.com',
      rating: 4.5,
      description: 'A cute and cuddly teddy bear for kids.',
    },
    {
      id: 2,
      seller: 'Jane Smith',
      toyName: 'Building Blocks',
      subCategory: 'Educational Toys',
      price: 29.99,
      quantity: 10,
      picture: 'https://example.com/buildingblocks.jpg',
      sellerEmail: 'janesmith@example.com',
      rating: 4.2,
      description: 'Colorful building blocks to stimulate creativity.',
    },
    // Add more toy objects here
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  const openModal = (toy) => {
    setSelectedToy(toy);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-400 rounded-md px-4 py-2 w-full"
        />
      </div>

      <table className="w-full border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Seller</th>
            <th className="border border-gray-400 px-4 py-2">Toy Name</th>
            <th className="border border-gray-400 px-4 py-2">Sub-category</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">
              Available Quantity
            </th>
            <th className="border border-gray-400 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.slice(0, 20).map((toy) => (
            <tr key={toy.id} className="bg-gray-100">
              <td className="border border-gray-400 px-4 py-2">{toy.seller}</td>
              <td className="border border-gray-400 px-4 py-2">
                {toy.toyName}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {toy.subCategory}
              </td>
              <td className="border border-gray-400 px-4 py-2">{toy.price}</td>
              <td className="border border-gray-400 px-4 py-2">
                {toy.quantity}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => openModal(toy)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedToy && (
        <Modal open={modalOpen} onClose={closeModal}>
          <div className="p-4">
            <img
              src={selectedToy.picture}
              alt={selectedToy.toyName}
              className="w-64 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{selectedToy.toyName}</h2>
            <p>Seller: {selectedToy.seller}</p>
            <p>Email: {selectedToy.sellerEmail}</p>
            <p>Price: {selectedToy.price}</p>
            <p>Rating: {selectedToy.rating}</p>
            <p>Available Quantity: {selectedToy.quantity}</p>
            <p>{selectedToy.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AllToys;
