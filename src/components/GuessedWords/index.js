import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const GuessedWords = () => {
  let name = "joe";
  return <div>{name}</div>;
};

export default GuessedWords;

GuessedWords.propTypes = {
  name: PropTypes.string,
};
