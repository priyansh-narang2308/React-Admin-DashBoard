import React from "react";
import styled from "styled-components";
import DashBoard from "./components/DashBoard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Div>
      <Sidebar />
      <DashBoard />
    </Div>
  );
}

const Div = styled.div``;
