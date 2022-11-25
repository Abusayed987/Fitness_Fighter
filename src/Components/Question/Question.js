import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <div className='question-container'>
                <hr />
                <h1>Question Here!</h1>
            </div>
            <div className='question'>
                <h2><span className='color'> Question 01: </span> How Does React Works
                </h2>
                <h3>Ans:  </h3>
            </div>
            <div className='question'>
                <h2><span className='color'> Question 02: </span> What is the difference between props and state in react component?
                </h2>
                <h3>Ans: (1). Props are read only but , state changes can be asynchronous.
                    (2) Props can not be modified But state can be modified using this.state  </h3>
            </div>
            <div className='question'>
                <h2><span className='color'> Question 03: </span>
                    What are the benefits of using Hooks without data load ?
                </h2>
                <h3>Ans: The useEffect Hook is to eliminate the side-effects of using class-based components. (1) It tasks like updating the DOM.
                    (2) It revolutionizes the way you write components.
                    (3)  fetching data from API end-points.
                    (4) Hooks are simpler to work with and test. Code would appear cleaner and easier to read.
                    (5) Hooks would work more efficiently with the future React optimizations.  </h3>
            </div>
        </div>
    );
};

export default Question;