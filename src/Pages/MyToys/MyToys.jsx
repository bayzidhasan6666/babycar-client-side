import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../PageTitle/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Pagination from 'react-paginate'; // Import the pagination component library

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Current page number
  const [itemsPerPage] = useState(10); // Number of items to display per page
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const url = `https://assignment-11-server-side-murex.vercel.app/myToys/${user?.email}`;

  useEffect(() => {
    AOS.init();
    fetchData();
  }, [sortOrder, searchQuery, currentPage]); // Include currentPage as a dependency for the useEffect

  const fetchData = () => {
    const offset = currentPage * itemsPerPage; // Calculate the offset based on current page
    const limit = itemsPerPage; // Set the limit to itemsPerPage

    fetch(`${url}?offset=${offset}&limit=${limit}`) // Update the API URL with pagination parameters
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // Filter toys based on search query
    const filtered = myToys.filter((toy) => {
      const name = toy.name ? toy.name.toLowerCase() : '';
      return name.includes(searchQuery.toLowerCase());
    });
    // Sort the filtered array based on the sort order
    const sorted = filtered.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setMyToys(sorted);
  }, [searchQuery, sortOrder]);

  const handleSortChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this toy?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-side-murex.vercel.app/myToys/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your Toy has been deleted.', 'success');
              fetchData(); // Fetch the updated data after deleting a toy
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  // Handle page change event
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useTitle('My Toys');

  // Calculate the total number of pages
  const pageCount = Math.ceil(myToys.length / itemsPerPage);

  return (
    <div className="bg-gray-900 text-gray-400 min-h-screen p-8">
      <div className="text-center">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl text-teal-600 font-semibold mb-4"
        >
          You Have {myToys.length} Toy Cars Available
        </h1>
        <button
          onClick={handleSortChange}
          className="text-teal-500 underline cursor-pointer"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Sort by Price {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <div
        className="flex justify-center my-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="border border-teal-500 rounded px-2 py-1 bg-gray-800"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <table
        className="min-w-full bg-opacity-10 border border-teal-500"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1500"
      >
        <thead>
          <tr className="text-teal-500">
            <th className="border-b border-teal-500 py-2">Seller Name</th>
            <th className="border-b border-teal-500 py-2">Car Name</th>
            <th className="border-b border-teal-500 py-2">Category</th>
            <th className="border-b border-teal-500 py-2">Price</th>
            <th className="border-b border-teal-500 py-2">
              Available Quantity
            </th>
            <th className="border-b border-teal-500 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {myToys
            .slice(
              currentPage * itemsPerPage,
              currentPage * itemsPerPage + itemsPerPage
            )
            .map((toy) => (
              <tr key={toy._id}>
                <td className="border-b border-teal-600 py-2">
                  {toy.sellerName ? toy.sellerName : 'N/A'}
                </td>
                <td className="border-b border-teal-600 py-2">{toy.name}</td>
                <td className="border-b border-teal-600 py-2">
                  {toy.subcategory}
                </td>
                <td className="border-b border-teal-600 py-2">${toy.price}</td>
                <td className="border-b border-teal-600 py-2">
                  {toy.quantity}
                </td>
                <td className="border-b border-teal-600 py-2">
                  <Link to={`/allToys/${toy._id}`}>
                    <button className="text-teal-500 border border-teal-500 px-2">
                      View Details
                    </button>
                  </Link>
                </td>
                <td className="border-b border-teal-600 py-2">
                  <Link to={`/updateToy/${toy._id}`}>
                    <button className="text-emerald-500 mr-2">
                      <FaEdit />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="flex justify-center"
          pageClassName="mx-1"
          activeClassName="text-teal-500"
          previousLabel="<"
          nextLabel=">"
        />
      </div>
    </div>
  );
};

export default MyToys;
