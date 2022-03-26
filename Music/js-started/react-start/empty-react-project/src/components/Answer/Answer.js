import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div className='answer'>
            <h3>hwo react work</h3>
            <p>
                ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for building a user interface (UI) called a component.

                It is important to note that ReactJS is not a JavaScript framework. Because it is only responsible for rendering the contents of the view layer of an application. Most front-end JavaScript developers combine it with angular and Vue-like frameworks to create complex functions.
                some time it's fake ui and if i change any thing in ui it's searching all area it's jsut look just wherwe change and
                so the react js is to faste then any other js -libray


            </p>
            <h3>what is the differnet between props and state</h3>
            <p>Data is transmitted from one element to another. The information is only passed into the material.
                It is immutable (cannot be changed). It is changeable (can be changed).
                Props can be used with state and functional elements. State can only be used with State Component / Class Component .
                Props read only. The state is both read and written.</p>



        </div>
    );
};

export default Answer;