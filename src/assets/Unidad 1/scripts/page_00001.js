//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS_WITH_POINT;
    const questionIndex = 0;
    var weight = DecodeNumber('V8Cmz96c4KA=', 243, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "¿Cuales invenciones se asocian con la definición moderna de la ingeniería?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('cKAzZClEhEU=', 245, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, DecodeNumber('V8Cmz96c4KA=', 243, -9999, 99999), DecodeNumber('gE371kTM2Ik=', 243, -9999, 99999), '');
    answer1.shortTextAnswer = "Palanca";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('o/Jv2N2GCeU=', 247, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, DecodeNumber('cKAzZClEhEU=', 245, -9999, 99999), DecodeNumber('MBakIOWQS9g=', 245, -9999, 99999), '');
    answer2.shortTextAnswer = "Fuego";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0HwyAhTnykg=', 608, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, DecodeNumber('jnllqor8QdI=', 606, -9999, 99999), DecodeNumber('0S3zYRrIzXM=', 606, -9999, 99999), '');
    answer3.shortTextAnswer = "Polea";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Gy3CIm5oh78=', 610, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, DecodeNumber('0HwyAhTnykg=', 608, -9999, 99999), DecodeNumber('4ajZJGiYHuc=', 608, -9999, 99999), '');
    answer4.shortTextAnswer = "Rueda";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}






