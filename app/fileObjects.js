var testObject = {
  quizUploads: {
    headers: [
      {
        name: "My Upcoming Midterm 5/25",
        images: [
          {
            name: "Old Quiz 3.png",
            image: "blob://old-quiz-3.png",
          },
          {
            name: "Old Quiz 1.png",
            image: "blob://old-quiz-1.png",
          },
          {
            name: "Old Quiz 6.png",
            image: "blob://old-quiz-6.png",
          },
          {
            name: "Old Quiz 5.png",
            image: "blob://old-quiz-5.png",
          },
        ],
      },
      {
        name: "My Upcoming Final 6/10",
        images: [
          {
            name: "My Quiz 1.png",
            image: "blob://my-quiz-1.png",
          },
          {
            name: "Old Quiz 2.png",
            image: "blob://my-quiz-2.png",
          },
          {
            name: "Hello Quiz 4.png",
            image: "blob://my-quiz-4.png",
          },
          {
            name: "hard quiz 5.png",
            image: "blob://my-quiz-5.png",
          },
        ],
      },
    ],
  },
  mockExams: {
    headers: [
      {
        name: "My Upcoming Midterm 5/25",
        images: [
          {
            name: "My Upcoming Midterm.pdf",
            image: "blob://my-upcoming-midterm.png",
          },
          {
            name: "My Upcoming Midterm - Answer Key.pdf",
            image: "blob://my-upcoming-midterm-answers.png",
          },
        ],
      },
      {
        name: "My Upcoming Final 6/10",
        images: [
          {
            name: "My Upcoming Final.pdf",
            image: "blob://my-upcoming-final.png",
          },
          {
            name: "My Upcoming Final - Answer Key.pdf",
            image: "blob://my-upcoming-final-answers.png",
          },
        ],
      },
    ],
  },
};

var defaultObject = {
  quizUploads: {
    headers: [
      {
        name: "",
        images: [],
      },
      {
        name: "",
        images: [],
      },
    ],
  },
  mockExams: {
    headers: [
      {
        name: "",
        images: [],
      },
      {
        name: "",
        images: [],
      },
    ],
  },
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { testObject, defaultObject };
