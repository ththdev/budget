import HomeLayout from "components/base/HomeLayout";
import Budget from "components/budget/Budget";
import React from "react";

function Home() {
  return (
    <HomeLayout>
      <Budget />
    </HomeLayout>
  );
}

export default Home;
