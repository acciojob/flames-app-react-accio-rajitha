import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      result: "",
      error: ""
    };
  }

  // Function to handle string manipulation and calculate the relationship
  calculateRelationship = () => {
    const { name1, name2 } = this.state;
    if (name1 === "" || name2 === "") {
      this.setState({
        error: "Please Enter valid input",
        result: ""
      });
      return;
    }

    // Clear error message if input is valid
    this.setState({ error: "" });

    let str1 = name1.split("");
    let str2 = name2.split("");

    let i = 0;
    while (i < str1.length) {
      if (str2.includes(str1[i])) {
        const pos = str2.indexOf(str1[i]);
        str2.splice(pos, 1);
        str1.splice(i, 1);
      } else {
        i++;
      }
    }

    // Calculate the remaining character count
    const remainingCount = str1.length + str2.length;
    const modResult = remainingCount % 6;

    const relationshipStatus = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy"
    ];

    // Set the result in the state
    this.setState({
      result: relationshipStatus[modResult]
    });
  };

  // Clear the input and result
  clearForm = () => {
    this.setState({
      name1: "",
      name2: "",
      result: "",
      error: ""
    });
  };

  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name1, name2, result, error } = this.state;

    return (
      <div id="main">
        <div>
          <input
            data-testid="input1"
            name="name1"
            type="text"
            placeholder="Enter first name"
            value={name1}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            data-testid="input2"
            name="name2"
            type="text"
            placeholder="Enter second name"
            value={name2}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button
            data-testid="calculate_relationship"
            name="calculate_relationship"
            onClick={this.calculateRelationship}
          >
            Calculate Relationship Future
          </button>
          <button
            data-testid="clear"
            name="clear"
            onClick={this.clearForm}
          >
            Clear
          </button>
        </div>

        {/* Always render h3, either displaying the error or result */}
        <h3 data-testid="answer">{error || result}</h3>
      </div>
    );
  }
}

export default App;

/*import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      result: "",
      error: ""
    };
  }

  // Function to handle string manipulation and calculate the relationship
  calculateRelationship = () => {
    const { name1, name2 } = this.state;
    if (name1 === "" || name2 === "") {
      this.setState({
        error: "Please Enter valid input",
        result: ""
      });
      return;
    }

    // Clear error message if input is valid
    this.setState({ error: "" });

    let str1 = name1.split("");
    let str2 = name2.split("");

    // Remove common letters from both strings
    str1.forEach((letter, index) => {
      if (str2.includes(letter)) {
        const pos = str2.indexOf(letter);
        str2.splice(pos, 1);
        str1.splice(index, 1);
      }
    });

    // Calculate the remaining character count
    const remainingCount = str1.length + str2.length;
    const modResult = remainingCount % 6;

    const relationshipStatus = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy"
    ];

    // Set the result in the state
    this.setState({
      result: relationshipStatus[modResult]
    });
  };

  // Clear the input and result
  clearForm = () => {
    this.setState({
      name1: "",
      name2: "",
      result: "",
      error: ""
    });
  };

  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name1, name2, result, error } = this.state;

    console.log(result, error);  // Debugging

    return (
      <div id="main">
        <div>
          <input
            data-testid="input1"
            name="name1"
            type="text"
            placeholder="Enter first name"
            value={name1}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            data-testid="input2"
            name="name2"
            type="text"
            placeholder="Enter second name"
            value={name2}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button
            data-testid="calculate_relationship"
            name="calculate_relationship"
            onClick={this.calculateRelationship}
          >
            Calculate Relationship Future
          </button>
          <button
            data-testid="clear"
            name="clear"
            onClick={this.clearForm}
          >
            Clear
          </button>
        </div>

        {error && <h3>{error}</h3>}
        {result && <h3 data-testid="answer">{result}</h3>}
      </div>
    );
  }
}

export default App;

/*
import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      result: "",
      error: ""
    };
  }

  // Function to handle string manipulation and calculate the relationship
  calculateRelationship = () => {
    const { name1, name2 } = this.state;
    if (name1 === "" || name2 === "") {
      this.setState({
        error: "Please Enter valid input",
        result: ""
      });
      return;
    }

    // Clear error message if input is valid
    this.setState({ error: "" });

    let str1 = name1.split("");
    let str2 = name2.split("");

    // Remove common letters from both strings
    str1.forEach((letter, index) => {
      if (str2.includes(letter)) {
        const pos = str2.indexOf(letter);
        str2.splice(pos, 1);
        str1.splice(index, 1);
      }
    });

    // Calculate the remaining character count
    const remainingCount = str1.length + str2.length;
    const modResult = remainingCount % 6;

    const relationshipStatus = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy"
    ];

    // Set the result in the state
    this.setState({
      result: relationshipStatus[modResult]
    });
  };

  // Clear the input and result
  clearForm = () => {
    this.setState({
      name1: "",
      name2: "",
      result: "",
      error: ""
    });
  };

  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name1, name2, result, error } = this.state;

    return (
      <div id="main">
       

        <div>
          <input
            data-testid="input1"
            name="name1"
            type="text"
            placeholder="Enter first name"
            value={name1}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            data-testid="input2"
            name="name2"
            type="text"
            placeholder="Enter second name"
            value={name2}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button
            data-testid="calculate_relationship"
            name="calculate_relationship"
            onClick={this.calculateRelationship}
          >
            Calculate Relationship Future
          </button>
          <button
            data-testid="clear"
            name="clear"
            onClick={this.clearForm}
          >
            Clear
          </button>
        </div>

        {error && <h3>{error}</h3>}
        {result && <h3 data-testid="answer">{result}</h3>}
      </div>
    );
  }
}

export default App;
*/