import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpreadSheetListing from "./pages/SpreadSheetListing";
import SpreadsheetDetails from "./pages/SpreadsheetDetails";
import { Breadcrumb, Layout, theme } from "antd";
import Sidebar from "./layout/Sidebar";
import { Content } from "antd/es/layout/layout";

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout>
        <Layout>
          <Sidebar />
          <Layout
            style={{
              padding: "0 30px 30px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Spreadsheet</Breadcrumb.Item>
              <Breadcrumb.Item>{"spread sheet name"}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/" element={<SpreadSheetListing />} />
                <Route
                  path="/spreadsheet/:id"
                  element={<SpreadsheetDetails />}
                />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
