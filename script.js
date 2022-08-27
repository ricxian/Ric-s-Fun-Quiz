const quizData = [
    {
        question: "《巴啦啦小魔仙》中，魔仙小蓝变身后头发什么颜色？",
        a: '蓝色',
        b: '黄色',
        c: '粉色',
        d:'紫色',
        correct: 'b'
    },
        {
        question:"北京奥运会福娃中的'迎迎'是什么动物的化身？",
        a:'大熊猫',
        b:'燕子',
        c:'金丝猴',
        d:'藏羚羊',
        correct: 'd'
        },
    {
        question:'url的全称是什么？',
        a:'uniform resource locator',
        b:'unit record lookup',
        c:'universal record loader',
        d:'unique record link',
        correct: 'a'
        },
    {
        question:'历史典故中，是谁受了胯下之辱？',
        a:'刘邦',
        b:'韩信',
        c:'晏婴',
        d:'以上都不是',
        correct: 'b'
        },  
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>你答对了${quizData.length} 题中的${score}题！</h2>
                
                <button onclick="location.reload()">再试一次</button>
            `;
        }
    }
});