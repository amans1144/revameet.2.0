import React from "react";
import { Home } from "./HomeScreen.render";

const HomeScreen = () => {
  return (
    <>
      <Home />
    </>
  );
};
export const vid = async () => {
  const response = await fetch("/api", {
    method: "get",
  });
  const url = response.url;
  document.getElementById("Take-class").innerHTML =
    "->" + "<a href='" + url + "'>Start Class</a>";
  console.log("Completed!", response.url);
};

export default HomeScreen;
