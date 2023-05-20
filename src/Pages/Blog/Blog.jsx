import React, { useState } from 'react';
import { FaDatabase, FaCode, FaCogs } from 'react-icons/fa';
import useTitle from '../../PageTitle/useTitle';

const Blog = () => {
  useTitle('Blog Page');

  const [pinnedBlogs, setPinnedBlogs] = useState([]);

  const handlePinToggle = (blog) => {
    if (isPinned(blog)) {
      unpinBlog(blog);
    } else {
      pinBlog(blog);
    }
  };

  const isPinned = (blog) => {
    return pinnedBlogs.some((pinnedBlog) => pinnedBlog === blog);
  };

  const pinBlog = (blog) => {
    setPinnedBlogs([...pinnedBlogs, blog]);
  };

  const unpinBlog = (blog) => {
    setPinnedBlogs(pinnedBlogs.filter((pinnedBlog) => pinnedBlog !== blog));
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center mb-5 justify-center space-x-4">
        <FaDatabase className="text-4xl text-blue-500" />
        <FaCode className="text-4xl text-purple-500" />
        <FaCogs className="text-4xl text-green-500" />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Access Token and Refresh Token
        </h2>
        <p>
          An access token is a credential used to authenticate and authorize
          access to protected resources. It is usually a JSON web token (JWT)
          that contains information about the user and their permissions. Access
          tokens have a limited lifespan and are used to make authorized API
          requests.
        </p>
        <p>
          A refresh token is a longer-lived token used to obtain a new access
          token without requiring the user to log in again. When an access token
          expires, the refresh token can be used to obtain a new access token.
          Refresh tokens are securely stored and should be kept confidential.
        </p>
        <p>
          On the client-side, access tokens are typically stored in memory or
          browser storage (e.g., local storage or session storage). Refresh
          tokens, on the other hand, should be securely stored in an HTTP-only
          cookie to protect against cross-site scripting (XSS) attacks.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">SQL vs NoSQL Databases</h2>
        <p>
          SQL (Structured Query Language) databases are relational databases
          that store data in tables with predefined schemas. They use SQL for
          querying and manipulating data. SQL databases provide strong
          consistency, support complex relationships between entities, and are
          suitable for structured data with strict integrity requirements.
        </p>
        <p>
          NoSQL (Not Only SQL) databases, on the other hand, are non-relational
          databases that store data in flexible schemas like key-value pairs,
          documents, or graphs. They provide scalability, high availability, and
          flexible data models. NoSQL databases are suitable for handling
          unstructured or semi-structured data, and they often prioritize high
          performance and horizontal scalability.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Express.js and Nest.js</h2>
        <p>
          Express.js is a popular web application framework for Node.js. It
          provides a minimalist and flexible approach to building web servers
          and APIs. Express.js allows you to handle routes, middleware, and HTTP
          requests easily, making it a great choice for building RESTful APIs
          and web applications.
        </p>
        <p>
          Nest.js is a progressive TypeScript framework for building scalable
          and maintainable server-side applications. It is built on top of
          Express.js and provides additional features and architectural patterns
          inspired by Angular. Nest.js promotes the use of decorators, modules,
          and dependency injection to create structured and extensible
          applications.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">MongoDB Aggregate</h2>
        <p>
          MongoDB Aggregate is a framework within MongoDB that allows you to
          perform advanced data processing and analysis operations on the data
          stored in MongoDB collections. It provides a way to perform complex
          aggregations, transformations, and computations on the data using a
          pipeline of stages.
        </p>
        <p>
          The aggregation pipeline consists of multiple stages, such as
          filtering, grouping, sorting, and projecting data. Each stage takes
          input from the previous stage and passes the transformed data to the
          next stage. Aggregation operations can include various operators and
          expressions to manipulate and process the data.
        </p>
        <p>
          MongoDB Aggregate is a powerful tool for performing analytical
          queries, generating reports, and obtaining insights from your MongoDB
          data.
        </p>
      </div>

      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center space-x-4">
          <FaDatabase
            className={`text-4xl ${
              isPinned('access-token') ? 'text-blue-800' : 'text-blue-500'
            }`}
            onClick={() => handlePinToggle('access-token')}
          />
          <FaCode
            className={`text-4xl ${
              isPinned('sql-nosql') ? 'text-purple-800' : 'text-purple-500'
            }`}
            onClick={() => handlePinToggle('sql-nosql')}
          />
          <FaCogs
            className={`text-4xl ${
              isPinned('express-nest') ? 'text-green-800' : 'text-green-500'
            }`}
            onClick={() => handlePinToggle('express-nest')}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
