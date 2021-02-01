import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => this.setState({ greeting: data.greeting }));
  }

  render() {
    const { greeting } = this.state;
    return <div className="App">{greeting}</div>;
  }
}

export default App;
