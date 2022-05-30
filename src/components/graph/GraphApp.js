import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GraphBar from "./GraphBar";
import styled from "@emotion/styled";

import { format } from "../../utils/common";
import {
  useGraphDispatch,
  useGraphNextId,
  useGraphState,
} from "../../hooks/graph/useGraphHooks";
import PropTypes from "prop-types";

const Input = styled("input")(({ theme }) => ({
  // something css properties setting
  border: "1px solid #66666677",
  height: "2rem",
  borderRadius: 5,
  outline: "none",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  width: 300,
  fontSize: 16,
}));

const GraphAppBlock = styled(Box)(({ theme }) => ({
  // something css properties setting
}));

const GraphBlock = styled(Box)(({ theme }) => ({
  // something css properties setting
  borderBottom: "1px solid black",
  minHeight: 300,
  height: 300,
  display: "flex",
  justifyContent: "space-around",
  marginTop: 50,
  marginBottom: 50,
}));

function GraphApp({ type, title, subtitle, explains, show }) {
  const now = new Date();
  const dispatch = useGraphDispatch();
  const [tasks, setTasks] = useState({
    task: "",
    date: format(now, "yyyy-MM-dd", true),
  });
  const nextId = useGraphNextId();
  const graphList = useGraphState();

  const onClick = (e) => {
    dispatch({
      type: "CREATE",
      id: nextId.current,
      task: tasks.task,
      date: tasks.date,
    });

    nextId.current += 1;

    setTasks({
      task: "",
      date: format(now, "yyyy-MM-dd", true),
    });
  };

  const onChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <GraphAppBlock>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
          }}>
          {title}
        </Typography>
        <div
          style={{
            display: "flex",
            gap: 15,
          }}>
          <Input
            type="date"
            name="date"
            value={tasks.date}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="task"
            placeholder="할 일 입력"
            value={tasks.task}
            onChange={onChange}
            required
          />
          <button onClick={onClick}>확인</button>
        </div>
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
        }}>
        {subtitle}
      </Typography>
      <GraphBlock>
        {graphList
          .sort((a, b) => {
            const date1 = a.date.replace(/[-]/g, "");
            const date2 = b.date.replace(/[-]/g, "");
            return parseInt(date1) - parseInt(date2);
          })
          .map(({ id, tasks, date }) => (
            <GraphBar
              key={id}
              graphId={id}
              tasks={tasks}
              show={show}
              date={date}
            />
          ))}
      </GraphBlock>
      <Typography variant="body1">{explains}</Typography>
    </GraphAppBlock>
  );
}

GraphApp.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  explains: PropTypes.string,
  show: PropTypes.bool,
};

export default GraphApp;
