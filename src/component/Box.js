import React, { Component } from "react";

class Box extends Component {
  render() {
    const { title, item, result } = this.props;
    const borderColor = result === "win" ? "green" : result === "lose" ? "red" : "black";

    return (
      <div style={{
        border: `4px solid ${borderColor}`,
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        width: "200px"
      }}>
        <h2>{title}</h2>
        {item && (
          <>
            <img src={item.img} alt={item.name} style={{ width: "100px", height: "100px" }} />
            <h3>{item.name}</h3>
          </>
        )}
        <h3>{result}</h3>
      </div>
    );
  }
}

export default Box;