import { format } from "../common";

export const tasksList = [
  {
    id: 0,
    tasks: [
      {
        task: "test",
        done: true,
      },
      {
        task: "task",
        done: false,
      },
    ],
    date: format(new Date(2022, 4, 20), "yyyy-MM-dd", true),
  },
  {
    id: 1,
    tasks: [
      {
        task: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sint consectetur, perferendis ab praesentium a tempora dignissimos libero, quisquam velit animi sit optio blanditiis illo adipisci incidunt rerum! Molestiae, architecto!",
        done: true,
      },
      {
        task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque.",
        done: false,
      },
    ],
    date: format(new Date(2022, 4, 21), "yyyy-MM-dd", true),
  },
  {
    id: 2,
    tasks: [
      {
        task: "Lorem ipsum dolor sit amet consectetur.",
        done: true,
      },
      {
        task: "Lorem, ipsum dolor.",
        done: false,
      },
    ],
    date: format(new Date(2022, 4, 22), "yyyy-MM-dd", true),
  },
  {
    id: 3,
    tasks: [
      {
        task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odit ratione iste unde totam sapiente, aliquid voluptatem soluta doloribus ipsa fuga quis earum eos harum animi et perferendis assumenda cum.",
        done: true,
      },
      {
        task: "Lorem ipsum dolor sit amet.",
        done: false,
      },
    ],
    date: format(new Date(2022, 4, 23), "yyyy-MM-dd", true),
  },
];
