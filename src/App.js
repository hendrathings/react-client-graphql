import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_HELLO = gql`
  query {
    hello
  }
`;

const Fetching = () => (
  <div>
    <p>Fetching...</p>
  </div>
);

const Error = (props) => (
  <div>
    {console.error(props.error)}
    <p>Oh no! Something went wrong.</p>
    <img src="https://2b9sqw2iiqxr36ntqa1exnal-wpengine.netdna-ssl.com/wp-content/uploads/2010/05/sad-dog.jpg" alt="" />
    <p>Please refresh and try again.</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={GET_HELLO}>
          {({ loading, error, data, refetch }) => {
            if (error) return <Error error={error} />;
            if (loading || !data) return <Fetching />;

            return <p>hello {data.hello}, bro!</p>;
          }}
        </Query>
      </div>
    );
  }
}

export default App;
