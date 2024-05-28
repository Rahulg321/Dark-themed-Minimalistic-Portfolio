import Link from "next/link";
import React from "react"; // Assuming you are using react-router

const NotFound = () => {
  return (
    <div className={"styles.container"}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link href="/" style={styles.homeLink}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    color: "#343a40",
    textAlign: "center",
    padding: "20px",
  },
  header: {
    fontSize: "3rem",
    margin: "20px 0",
  },
  paragraph: {
    fontSize: "1.2rem",
    margin: "20px 0",
  },
  homeLink: {
    fontSize: "1rem",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default NotFound;
