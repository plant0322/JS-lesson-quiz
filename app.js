const question = '目を覚ますとそこは無人島でした';
const answers = [
  '近くにあった小屋を探索する',
  '森の中を探索する',
  'その場で助けを待つ',
  'いったん寝る',
];
const correct = '近くにあった小屋を探索する';

const $button = document.getElementsByTagName('button');

// 問題をHTMLに反映
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let btnIndex = 0;
  let btnLength = $button.length;
  while (btnIndex < btnLength){
    $button[btnIndex].textContent = answers[btnIndex];
    btnIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('次の選択肢へ');
  } else {
    window.alert('脱出失敗');
  }
}

// 判定
let handlerIndex = 0;
const btnLength = $button.length;
while (handlerIndex < btnLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}