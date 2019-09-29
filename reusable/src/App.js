import React from 'react';
import logo from './logo.svg';
import './App.css';
import JobDescription from './JobDescription'
import 'bootstrap/dist/css/bootstrap.min.css';
/*

    jobTitle: PropeTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    postTime: PropTypes.instanceOf(Date).isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
*/
function App() {
  const jobTitle = "Software Engineer II";
  const companyName = "Amazon";
  const postTime = new Date("27 August 2019 13:30:00 GMT+05:45");
  const content = "You need to be familiar with all technologies related to SDE. Interviews will be harsh!";
  const link = "https://www.google.com";
  return (
    <div className="App" >
    <div style={{marginLeft: "20%",marginRight: "20%"}}>
    <h2><strong>Demo of my reusable component</strong></h2>
    <h3>Component name: JobDescription</h3>
    <h4>Usage: </h4>
    <p><strong>you can pass in the following props to use it:</strong></p>
    <ul>
        <li>jobTitle: Required, String</li>
        <li>companyName: Required, String</li>
        <li>postTime: Required, Date</li>
        <li>content: Required, String</li>
        <li>link: Required, String</li>

    </ul>
    <h4>Inspiration and Purpose:</h4>
    <p>Sometimes it is tedious to style a JD or anything 
    that describes a specific role. This reusable component 
    aims to solve this problem. <br/>Name of the component is  
    JobDescription, which describes its purpose. <br/>All its props are the 
    description of a specific entry. for example, description
    just means the description of a job.<br/> It is perfectly reusable,
    since this is really a general use case and anybody can 
    setup a job description with this component by passing in the appropriate
    props.
    </p>
    <h4><strong>Demo:</strong></h4>
    </div>
      <JobDescription jobTitle={jobTitle} 
      companyName={companyName}
      postTime={postTime}
      description={content}
      link={link}
      />
    </div>
  );
}

export default App;
