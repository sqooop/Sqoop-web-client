const SET_ANSWER = 'USER_CARD_INFO/SET_ANSWER';
const SET_QUESTION = 'USER_CARD_INFO/SET_QUESTION';
const SET_TITLE = 'USER_CARD_INFO/SET_TITLE';
const SET_ID = 'USER_CARD_INFO/SET_ID';
const SET_GUIDE = 'USER_CARD_INFO/SET_GUIDE';

export const setAnswer = (string, idx) => ({
  type: SET_ANSWER,
  string,
  idx,
});
export const setQuestion = (string, idx) => ({
  type: SET_QUESTION,
  string,
  idx,
});
export const setGuide = (string, idx) => ({
  type: SET_GUIDE,
  string,
  idx,
});
export const setTitle = string => ({
  type: SET_TITLE,
  string,
});
export const setID = number => ({
  type: SET_ID,
  number,
});

const initialState = {
  id: 0,
  title: '활동 이름',
  questions: [
    '활동을 하게 된 이유는 무엇인가요?',
    '활동을 시작할 당시의 목표는 무엇이었나요?',
    '활동을 하며, 당신이 맡은 주요 역할과 그에 따른 과제는 무엇이었나요?',
    '가장 힘들었던 문제 상황은 무엇이었나요? 구체적으로 어떤 상황이었나요?',
    '문제 상황을 해결했던 과정을 순서대로 떠올려 볼까요?',
    '보다 효과적으로 수행하기 위해 어떤 노력을 했나요?',
    '해당 방법을 선택한 이유는 무엇인가요?',
    '이 활동에서 가장 크게 성취한 것은 무엇인가요?',
    '반면, 가장 아쉬운 것은 무엇인가요?',
    '활동을 통해 배운 점은 무엇인가요? 나의 관심 분야·직무에서 어떻게 도움이 될까요?',
    '???',
  ],
  answers: ['', '', '', '', '', '', '', '', '', ''],
  guide: ['', '', '', '', '', '', '', '', '', ''],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      state.answers[action.idx] = action.string;
      return state;
    case SET_QUESTION:
      state.questions[action.idx] = action.string;
      return state;
    case SET_GUIDE:
      state.guide[action.idx] = action.string;
      return state;
    case SET_TITLE:
      return {
        ...state,
        title: action.string,
      };
    case SET_ID:
      return {
        ...state,
        id: action.number,
      };
    default:
      return state;
  }
}
