import PropTypes from "prop-types";

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
