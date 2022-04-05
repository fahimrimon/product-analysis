import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <div className="question">
            <h2>Q-1: What is Context API? and how it works?</h2>
            <p>We Know, The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc. <br />React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className="question">
                <h2>Q-2: What is Semantic Tag?</h2>
                <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. A semantic tags clearly describes its meaning to both the browser and the developer. Examples of non-semantic tags: 'div' and 'span'. Examples of semantic tags: 'form' , 'table' and 'article'.</p>
                <p style={{"font-weight":"bold"}}>Some Semantic HTML Tags:</p>
                <ul>
                    <li>header</li>
                    <li>nav</li>
                    <li>section</li>                 
                    <li>main</li>
                    <li>article</li>           
                    <li>details</li>
                    <li>summary</li>
                    <li>mark</li>
                    <li>footer</li>
                </ul>
               </div>
        </div>
    );
};

export default Blogs;