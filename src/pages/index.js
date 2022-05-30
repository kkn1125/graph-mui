import * as React from "react";
import Container from "@mui/material/Container";
import GraphProvider from "../components/graph/GraphContext";
import GraphApp from "../components/graph/GraphApp";

export default function Index(props) {
  return (
    <Container maxWidth="desktop">
      <GraphProvider>
        <GraphApp
          show={false}
          type="vertical"
          title="Task Graph"
          subtitle="Work Graph"
          explains=""
        />
      </GraphProvider>
    </Container>
  );
}
