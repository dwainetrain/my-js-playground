import React from "react";

const Practice5 = () => {
  const user = {
    id: 1,
    username: "zgordon",
    firstName: "Zac",
    lastName: "Gordon",
    preferredName: "Zac",
    url: "https://zacgordon.com",
    twitter: "zgordon"
  };
  return (
    <div className="practice">
      {/*         
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
      <User {...user}/>
    </div>
  );
};

/*
  2. Destructure all of the props you will need 
  3. Pass the firstName and lastName to <FullName />
  4. Pass the username to <Username />
  5. Pass the url and twitter to <Social />
*/
const User = ({firstName, lastName, username, ...rest}) => {
  return (
    <div className="user">
      <FullName firstName={firstName} lastName={lastName}/>
      <Username username={username}/>
      <Social url={rest.url} twitter={rest.twitter}/>
    </div>
  );
};

/*
  6. Destructure the props needed
*/
const FullName = ({firstName, lastName}) => (
  <h1>
    {firstName} {lastName}
  </h1>
);

/*
  7. Create a <Username /> component that displays the username
*/
const Username = props => (
  <h4>
    username: {props.username}
  </h4>
);

/*
  8. Destructure the props you will need
  9. Make the Website and Twitter links work based on props
*/
const Social = props => {
  return (
    <ul className="social">
      <li>
        <a href={props.url}>Website</a>
      </li>
      <li>
        <a href={`https://twitter.com/${props.twitter}`}>Twitter</a>
      </li>
    </ul>
  );
};

export default Practice5;
