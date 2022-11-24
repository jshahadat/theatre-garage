import React from 'react';

const Blog = () => {
    return (
        <div className=' lg:pl-20 pl-5 lg:pr-20 pr-5'>

            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>JWT or JSON Web Token, is an open standard that allows a client and a server to exchange security-related data. Every JWT has a set of encoded JSON objects, including claims. To ensure that the claims cannot be changed after the token is issued, JWTs are signed using a cryptographic technique.</p>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>

                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> How does prototypical inheritance work?</h2>
                    <p>Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an endless loop that accepts and handles requests.</p>

                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an endless loop that accepts and handles requests.</p>

                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th></th>

                                        <th>React</th>
                                        <th>Angular</th>
                                        <th>Vue</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>

                                        <td>relational</td>
                                        <td>non-relational</td>
                                        <td>non-relational</td>
                                    </tr>

                                    <tr>
                                        <th>2</th>

                                        <td>use structured query language and have a predefined schema.</td>
                                        <td> NoSQL databases have dynamic schemas for unstructured data.</td>
                                        <td> NoSQL databases have dynamic schemas for unstructured data.</td>
                                    </tr>

                                    <tr>
                                        <th>3</th>

                                        <td>are vertically scalabled</td>
                                        <td>are horizontally scalable.</td>
                                        <td>are horizontally scalable.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;