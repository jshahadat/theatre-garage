import React from 'react';

const Blog = () => {
    return (
        <div className=' lg:pl-20 pl-5 lg:pr-20 pr-5 mt-10'>

            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>The Four Kinds of React State to Manage
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:  Local state,Global state. erver state & URL state</p>
                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> How does prototypical inheritance work?</h2>
                    <p>For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We wouldd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.In JavaScript, objects have a special hidden property Prototype as named in the specification, that is either null or references another object That object is called “a prototype”:</p>

                </div>
            </div>
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.</p>
                    <p>They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>

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

                                        <td>React is a UI library</td>
                                        <td> Angular is a fully-fledged front-end framework</td>
                                        <td>Vue. js is a progressive framework</td>
                                    </tr>

                                    <tr>
                                        <th>2</th>

                                        <td>Everything is on JavaScript</td>
                                        <td>Based on TypeScript</td>
                                        <td>Based on JavaScript snd HTML</td>
                                    </tr>

                                    <tr>
                                        <th>3</th>

                                        <td>Based on Virtual DOM </td>
                                        <td>Based on MVC.</td>
                                        <td>Based on Virtual DOM</td>
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