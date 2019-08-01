import React, { Component } from "react";
import { SimpleOffCanvasSide, SimpleOffCanvasMain } from "jag-react-components";
import "./SimpleOffcanvasDemo.css";

class SimpleOffcanvasDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLeft: false,
      openRight: false
    };
  }
  openLeft = () => {
    this.setState({ openLeft: true });
  };
  openRight = () => {
    this.setState({ openRight: true });
  };

  closeLeft = () => {
    this.setState({ openLeft: false });
  };

  closeRight = () => {
    this.setState({ openRight: false });
  };

  render() {
    return (
      <>
        <SimpleOffCanvasSide position="left" open={this.state.openLeft}>
          <div className="bg-grey" style={{ height: "100%" }}>
            <header>
              <div className="title">Left Title</div>
              <div>
                <span className="close-btn" onClick={this.closeLeft}>
                  &times;
                </span>
              </div>
            </header>
            <main>
              <h3>Left Content</h3>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
              </ul>
            </main>
          </div>
        </SimpleOffCanvasSide>
        <SimpleOffCanvasSide position="right" open={this.state.openRight}>
          <div className="bg-grey" style={{ height: "100%" }}>
            <header>
              <div className="title">Right Title</div>
              <div>
                <span className="close-btn" onClick={this.closeRight}>
                  &times;
                </span>
              </div>
            </header>
            <main>
              <h3>Right Content</h3>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
              </ul>
            </main>
          </div>
        </SimpleOffCanvasSide>
        <SimpleOffCanvasMain openLeft={this.state.openLeft} openRight={this.state.openRight}>
          <header className="bg-blue">
            <div>
              <span className="open-btn" onClick={this.openLeft}>
                &#9776;
              </span>
            </div>
            <div className="title">Title</div>
            <div>
              <span className="open-btn" onClick={this.openRight}>
                &#9776;
              </span>
            </div>
          </header>

          <main>
            <h3>Simple OffCanvas (Push) Example1</h3>
            <p>
              some text some text some text some text some text some text some text some text some
              text some text some text some text some text some text some text some text some text
              some text some text some text
            </p>
          </main>
        </SimpleOffCanvasMain>
      </>
    );
  }
}

export default SimpleOffcanvasDemo;
