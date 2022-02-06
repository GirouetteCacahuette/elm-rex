// Survey

export type Survey = {
  questions: string[];
  userAnswers: string[];
};

const badSurvey: Survey = {
  questions: [],
  userAnswers: ["Yes !"],
};

type Question = {
  question: string;
  userAnswer: string | null;
};

type Survey_ = {
  questions: Question[];
};

const goodSurvey: Survey_ = {
  questions: [
    { question: "What's your name ?", userAnswer: "Michel" },
    { question: "What's your favourite color ?", userAnswer: null },
  ],
};

// Question creation / deletion

type ActionStatus = {
  status: "Question created !" | "Question deleted !";
  questionToRestore: Question | null;
};

const badActionStatus: ActionStatus = {
  status: "Question created !",
  questionToRestore: { question: "What's your name ?", userAnswer: "Michel" },
};

const badActionStatusBis: ActionStatus = {
  status: "Question deleted !",
  questionToRestore: null,
};

type ActionStatus_ =
  | { status: "Question created !" }
  | { status: "Question deleted !"; questionToRestore: Question };

const goodActionStatus: ActionStatus_ = {
  status: "Question deleted !",
  questionToRestore: { question: "What's your name ?", userAnswer: "Michel" },
};

const goodActionStatusBis: ActionStatus_ = {
  status: "Question created !",
};

// Survey with History

type SurveyWithHistory = {
  questions: Question[];
  current: Question;
};

const badSurveyWithHistory: SurveyWithHistory = {
  questions: [],
  current: { question: "What's your name ?", userAnswer: "Michel" },
};

type SurveyWithHistory_ = {
  firstQuestion: Question;
  questions: Question[];
  current: Question;
};

const badSurveyWithHistory2: SurveyWithHistory_ = {
  firstQuestion: { question: "What's your name ?", userAnswer: "Michel" },
  questions: [{ question: "Where do you live ? ", userAnswer: null }],
  current: {
    question: "What's your favourite color ? ",
    userAnswer: null,
  },
};

type SurveyWithHistory__ = {
  previousQuestions: Question[];
  current: Question;
  remainingQuestions: Question[];
};

const surveyWithOnlyOneQuestion: SurveyWithHistory__ = {
  previousQuestions: [],
  current: {
    question: "What's your favourite color ? ",
    userAnswer: null,
  },
  remainingQuestions: [],
};
