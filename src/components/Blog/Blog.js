import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Question and Answer</h1>
            <hr></hr>
            <h3>1. What is Context API , use and purpose?</h3>
            <h6> Context API is  to solve the issue of sharing state between multiple components within an app. If we don't use to drilling props then we have to use Context API.The Context API is used to share data with multiple components, without having to pass data through props manually. Then have to export , for using another place. React.createContext() is all you need. It bears a consumer and a provider. Provider is a component that as it's name suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so occurs is a component that consumes and utilizes the state. </h6>
            <br/>
            <h3>2. What is Semantic tag?</h3>
            <h6>Semantic tag means meaningful. They are HTML5 tag , where we use article tag for blog without using div . HTML5 semantic tags describe the purpose of the segment. By using semantic markup, you allow the browser understand the meaning of the content instead of just viewing it. By providing this extra level of transparency, HTML5 semantic features also help search engines to read the page and find the demanded information faster </h6>
        </div>
    );
};

export default Blog;