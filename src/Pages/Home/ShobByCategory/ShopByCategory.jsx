import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ShopByCategory = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleViewDetails = (toyName) => {
    if (isLoggedIn) {
      // Redirect to toy details page
      history.push(`/toy/${toyName}`);
    } else {
      // Show login message and redirect to login page
      alert('You have to log in first to view details');
      history.push('/login');
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        <Tabs>
          <TabList className="flex mb-4">
            <Tab className="mr-4 border-b-2 border-transparent hover:border-blue-500">
              Category 1
            </Tab>
            <Tab className="mr-4 border-b-2 border-transparent hover:border-blue-500">
              Category 2
            </Tab>
            <Tab className="mr-4 border-b-2 border-transparent hover:border-blue-500">
              Category 3
            </Tab>
          </TabList>

          <TabPanel>
            <h3>Sub-Category 1</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Toy 1 */}
              <div className="bg-white p-4 rounded shadow">
                <img
                  src="toy1.jpg"
                  alt="Toy 1"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-lg font-bold mb-2">Toy 1 Name</h4>
                <p className="text-gray-700 mb-2">$19.99</p>
                <p className="text-gray-700 mb-2">Rating: 4.5</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleViewDetails('toy1')}
                >
                  View Details
                </button>
              </div>

              {/* Toy 2 */}
              <div className="bg-white p-4 rounded shadow">
                <img
                  src="toy2.jpg"
                  alt="Toy 2"
                  className="w-full h-48 object-cover mb-4"
                />
                <h4 className="text-lg font-bold mb-2">Toy 2 Name</h4>
                <p className="text-gray-700 mb-2">$24.99</p>
                <p className="text-gray-700 mb-2">Rating: 4.2</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleViewDetails('toy2')}
                >
                  View Details
                </button>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <h3>Sub-Category 2</h3>
            {/* Add toys for Sub-Category 2 */}
          </TabPanel>

          <TabPanel>
            <h3>Sub-Category 3</h3>
            {/* Add toys for Sub-Category 3 */}
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ShopByCategory;
