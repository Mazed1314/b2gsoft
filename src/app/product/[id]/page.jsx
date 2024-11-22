import React from "react";

const page = ({ params }) => {
  console.log(params.id);
  return (
    <div>
      <h2>details page</h2>
    </div>
  );
};

export default page;
