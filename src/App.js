import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Egypt" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    console.log("Loading data...");
    console.log(this);
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>

        <div>
          <input
            type="text"
            value={this.state.location}
            placeholder="Search for location"
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>

        <button onClick={this.fetchWeather}>Get Weather</button>
      </div>
    );
  }
}

export default App;
