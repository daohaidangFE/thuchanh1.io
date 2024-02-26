// Danh sách các câu hỏi
var questions = [
    {
      type: "trueFalse",
      question: "Câu 1: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 2: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 3: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 4: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 5: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 6: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 7: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 8: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 9: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "trueFalse",
      question: "Câu 10: Trái đất hình vuông?",
      answer: true
    },
    {
      type: "multipleChoice",
      question: "Câu 11: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 12: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 13: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 14: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 15: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 16: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 17: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 18: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 19: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleChoice",
      question: "Câu 20: Ngôn ngữ nào dễ học?",
      choices: ["Java", "Python", "JavaScript", "C"],
      answer: "JavaScript"
    },
    {
      type: "multipleAnswer",
      question: "Câu 21:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 22:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 23:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 24:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 25:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 26:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 27:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 28:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 29:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "multipleAnswer",
      question: "Câu 30:HTML viết tắt của?",
      choices: ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: ["Hyper Text Markup Language"]
    },
    {
      type: "text",
      question: "Câu 31: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 32: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 33: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 34: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 35: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 36: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 37: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 38: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 39: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
    {
      type: "text",
      question: "Câu 40: Ngôn ngữ ưu thích của bạn?",
      answer: "PHP"
    },
  ];

  var questionContainer = document.getElementById("questionContainer");

  questions.forEach(function(questionObj, index) {
    var questionElement = document.createElement("div");
    questionElement.classList.add("question");

    var questionText = document.createElement("p");
    questionText.textContent = questionObj.question;
    questionElement.appendChild(questionText);
//Câu hỏi đúng sai
    if (questionObj.type === "trueFalse") {
      var trueFalseId = "question" + (index + 1) + "True";
      var trueFalseInput = document.createElement("input");
      trueFalseInput.type="radio";
      trueFalseInput.name = "question" + (index + 1);
      trueFalseInput.id = trueFalseId;
      trueFalseInput.value = "true";
      questionElement.appendChild(trueFalseInput);

      var trueFalseLabel = document.createElement("label");
      trueFalseLabel.textContent = "Đúng";
      trueFalseLabel.htmlFor = trueFalseId;
      questionElement.appendChild(trueFalseLabel);

      var trueFalseId = "question" + (index + 1) + "False";
      var trueFalseInput = document.createElement("input");
      trueFalseInput.type = "radio";
      trueFalseInput.name = "question" + (index + 1);
      trueFalseInput.id = trueFalseId;
      trueFalseInput.value = "false";
      questionElement.appendChild(trueFalseInput);

      var trueFalseLabel = document.createElement("label");
      trueFalseLabel.textContent = "Sai";
      trueFalseLabel.htmlFor = trueFalseId;
      questionElement.appendChild(trueFalseLabel);
//chọn 1 đáp án 
    } else if (questionObj.type === "multipleChoice") {
      questionObj.choices.forEach(function(choice, choiceIndex) {
        var choiceId = "question" + (index + 1) + "Choice" + (choiceIndex + 1);
        var choiceInput = document.createElement("input");
        choiceInput.type = "radio";
        choiceInput.name = "question" + (index + 1);
        choiceInput.id = choiceId;
        choiceInput.value = choice;
        questionElement.appendChild(choiceInput);

        var choiceLabel = document.createElement("label");
        choiceLabel.textContent = choice;
        choiceLabel.htmlFor = choiceId;
        questionElement.appendChild(choiceLabel);
      });
//chọn nhiều đáp án
    } else if (questionObj.type === "multipleAnswer") {
      questionObj.choices.forEach(function(choice, choiceIndex) {
        var choiceId = "question" + (index + 1) + "Choice" + (choiceIndex + 1);
        var choiceInput = document.createElement("input");
        choiceInput.type = "checkbox";
        choiceInput.name = "question" + (index + 1) + "[]";
        choiceInput.id = choiceId;
        choiceInput.value = choice;
        questionElement.appendChild(choiceInput);

        var choiceLabel = document.createElement("label");
        choiceLabel.textContent = choice;
        choiceLabel.htmlFor = choiceId;
        questionElement.appendChild(choiceLabel);
      });
//tự luận
    } else if (questionObj.type === "text") {
      var textInput = document.createElement("input");
      textInput.type = "text";
      textInput.name = "question" + (index + 1);
      questionElement.appendChild(textInput);
    }

    questionContainer.appendChild(questionElement);
  });

  //hàm so sánh bài làm với đáp án
  function arraysEqual(arr1, arr2) {

    if (!arr1 || !arr2) {
        return false;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

  function submitQuiz(event) {
    event.preventDefault();

    var resultElement = document.getElementById("result");
//   resultElement.textContent  = "Bạn đã trả lời đúng " + correctCount + " câu.";

      var name = localStorage.getItem('name');
      var dob = localStorage.getItem('dob');

      var studentId = localStorage.getItem('studentId');
      var className = localStorage.getItem('className');
     
      resultElement.innerText  = 'Sinh viên: ' + name + "\r\n"   ;
      resultElement.innerText  += 'Ngày sinh: ' + dob  + "\r\n" ;
      resultElement.innerText  += 'Mã sinh viên: ' + studentId  + "\r\n" ;
      resultElement.innerText  += 'Lớp: ' + className + "\r\n"  ;

      var answers = [];
    var questionElements = document.getElementsByClassName("question");

    for (var i = 0; i < questionElements.length; i++) {
        var questionElement = questionElements[i];
        var questionType = questions[i].type;

        if (questionType === "trueFalse") {
            var selectedAnswer = questionElement.querySelector("input:checked");
            if (selectedAnswer) {
                if (selectedAnswer) {
                    answers.push(selectedAnswer.value === "true");
                } else {
                    answers.push("");
                }
            }
        } else if (questionType === "multipleChoice") {
            var selectedAnswer = questionElement.querySelector("input:checked");
            if (selectedAnswer) {
                answers.push(selectedAnswer.value);
            }else{
                answers.push("");
            }
        } else if (questionType === "multipleAnswer") {
            var selectedAnswers = [];
            var selectedCheckboxes = questionElement.querySelectorAll("input:checked");
            if (selectedCheckboxes) {
                selectedCheckboxes.forEach(function(checkbox) {
                    selectedAnswers.push(checkbox.value);
                });
            }else{
                selectedAnswers.push([]);
            }
            answers.push(selectedAnswers);
        } else if (questionType === "text") {
            var textInput = questionElement.querySelector("input[type='text']");
            if (textInput) {
                answers.push(textInput.value);
            }else{
                answers.push("");
            }
        }
    }

    // Kiểm tra đáp án và đếm số câu trả lời đúng
    var correctCount = 0;
    for (var j = 0; j < questions.length; j++) {
        var question = questions[j];
        var userAnswer = answers[j];
        var correctAnswer = question.answer;

        if (Array.isArray(correctAnswer)) {
            if (arraysEqual(userAnswer, correctAnswer)) {
                correctCount++;
            }
        } else {
            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        }
    }
 
    // Hiển thị kết quả
    resultElement.innerHTML += 'Kết quả: ' + correctCount + ' câu đúng.';
    resultElement.style.display = 'block';

    return false;
  }

    function saveInputValue() {
      var name = document.getElementById('name').value;
      var dob = document.getElementById('dob').value;
      var studentId = document.getElementById('studentId').value;
      var className = document.getElementById('class').value;

      localStorage.setItem('name', name);
      localStorage.setItem('dob', dob);
      localStorage.setItem('studentId', studentId);
      localStorage.setItem('className', className);

      document.getElementById('name').value = '';
      document.getElementById('dob').value = '';
      document.getElementById('studentId').value = '';
      document.getElementById('class').value = '';

      var loginForm = document.getElementById('loginForm');
      loginForm.style.display = 'none';

      var quizContainer = document.getElementById('quizContainer');
      quizContainer.style.display = 'block';

      return false;
    }