import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: green;
  border-radius: 3px;
  border: none;
  color: whitesmoke;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export default class SaveButton extends React.Component {
    render() {
        return <Button onClick={this.props.change}> {this.props.text}</Button>;
    }
}
