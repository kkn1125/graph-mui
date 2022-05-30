import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton, Paper, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useGraphDispatch } from "../../hooks/graph/useGraphHooks";

const GraphBlock = styled(Box)(({ theme, total, completes }) => ({
  // something css properties setting
  background: "lightgray",
  minWidth: parseInt(total / completes),
  width: 15,
  maxWidth: 200,
  height: "100%",
  position: "relative",
  transition: "300ms ease-in-out",
  "&::after": {
    content: '"' + parseFloat(((completes / total) * 100).toFixed(2)) + '%"',
    background: "#3ddd96",
    height: (completes / total) * 100 + "%",
    width: "inherit",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    lineHeight: 0,
    transition: "300ms ease-in-out",
  },
  transition: "300ms ease-in-out",
}));

const DateText = styled(Typography)(({ theme }) => ({
  // something css properties setting
  position: "absolute",
  left: "50%",
  bottom: "-30px",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
}));

function GraphBar({ graphId, tasks, show, date }) {
  const dispatch = useGraphDispatch();
  const [open, setOpen] = useState(false);
  const total = tasks.length;
  const completes = tasks.filter((task) => task.done);
  const boxRef = useRef();

  useEffect(() => {
    const save = boxRef.current;
    if (!boxRef.current) return;

    const { width, height, top, left } =
      boxRef.current?.getBoundingClientRect();

    const leftToWidth = width + left;
    const totalWidth = window.innerWidth - 17;
    const startPoint = totalWidth - left;

    if (totalWidth * 0.8 < leftToWidth) {
      boxRef.current.style.right = `${width}px`;
    } else {
      boxRef.current.style.left = `100%`;
    }

    if (leftToWidth > totalWidth) {
      boxRef.current.style.minWidth = `${500}px`;
    }

    return () => {
      save.removeAttribute("style");
    };
  }, [open]);

  useEffect(() => {
    function handleClosePop(e) {
      if (e.target.closest("ol")) return;
      setOpen(false);
    }

    window.addEventListener("mousedown", handleClosePop);

    return () => window.removeEventListener("mousedown", handleClosePop);
  }, []);

  return (
    <GraphBlock
      onClick={(e) => {
        if (!open) setOpen(true);
      }}
      completes={completes.length}
      total={total}>
      {open && (
        <Paper
          ref={boxRef}
          elevation={3}
          sx={{
            minWidth: 200,
            width: "100vw",
            maxWidth: 500,
            position: "relative",
            zIndex: 5,
            px: 1.5,
            py: 1,
          }}>
          <ol
            style={{
              paddingLeft: 30,
            }}>
            {tasks.map((task, idx) => (
              <li
                key={task.task}
                style={{
                  padding: 0,
                  color: task.done ? "green" : "gray",
                }}>
                {task.task}
                <IconButton
                  onClick={() =>
                    dispatch({ type: "TOGGLE", id: graphId, idx })
                  }>
                  <CheckIcon
                    sx={{
                      fontSize: 15,
                    }}
                  />
                </IconButton>
              </li>
            ))}
          </ol>
        </Paper>
      )}
      <DateText>
        {new Date(date).toLocaleString("ko-kr", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </DateText>
    </GraphBlock>
  );
}

export default GraphBar;
