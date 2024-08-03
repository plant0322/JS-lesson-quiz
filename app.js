const quiz = [
  {
    question: '目を覚ますとそこは無人島でした',
    answers: [
      '近くにあった小屋を探索する',
      '森の中を探索する',
      'その場で助けを待つ',
      'いったん寝る'
    ],
    correct: '森の中を探索する'
  }, {
    question: '森の中で何を見つけましたか？',
    answers: [
      '食べれそうな果物',
      '火を起こせそうな木の枝',
      'けもの道',
      '水飲み場'
    ],
    correct: 'けもの道'
  }, {
    question: '道の先に巨大なビーバーがいました。あなたはどうしますか？',
    answers: [
      '逃げる',
      '攻撃する',
      '捕まえる',
      '助けを求める'
    ],
    correct: '助けを求める'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const btnLength = $button.length;

// 問題をHTMLに反映
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let btnIndex = 0;
  while (btnIndex < btnLength){
    $button[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    btnIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    score++;
    quizIndex++;

    window.alert('ステージ' + score + 'クリア。次の選択肢へ');

    if(quizIndex < quizLength){
      setupQuiz();
    } else {
      window.alert('season1クリア。次回へ続く');
    }
  } else {
    window.alert('脱出失敗');
  }
}

// 判定
let handlerIndex = 0;
while (handlerIndex < btnLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}