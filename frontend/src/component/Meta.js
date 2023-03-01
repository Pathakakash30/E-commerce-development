import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "TechZoo - Tech at your door",
  description: "we sell the best products for cheap",
  keywords: "electronics, buy eletronics, cheap electronics",
};

export default Meta;
