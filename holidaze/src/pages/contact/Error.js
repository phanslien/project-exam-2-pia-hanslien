import React from "react";
import PropTypes from "prop-types";
import styles from "./Error.module.css";

export default function ValidationError({ children }) {
	return <div className={styles.form_error}>{children}</div>;
}

ValidationError.proptTypes = {
	children: PropTypes.node.isRequired,
};