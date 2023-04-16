import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #8388A4;
  border-radius: 3px;
  border: none;
  color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export default class CancelButton extends React.Component {
    render() {
        return <Button onClick={this.props.change}> {this.props.text}</Button>;
    }
}
