import React, { useState } from 'react';
import firstDayQuiz from '../../quiz/firstDayQuiz';

const FirstQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionClick = isCorrect => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const next = currentQuestion + 1;
        if (next < firstDayQuiz.length) {
            setCurrentQuestion(next)
        } else {
            setShowScore(true)
        }
    }

    return (
        <div className="bg-warning p-4">
            {
                showScore ? (
                    <div>
                        <p className="">Your score {score} out of {firstDayQuiz.length}</p>
                    </div>
                ) : (
                        <div className="bg-warning p-4">
                            <div>
                                <p>Question {currentQuestion + 1} / {firstDayQuiz.length} </p>
                            </div>
                            <hr />
                            <div>
                                <h4 className='text-success'> {firstDayQuiz[currentQuestion].questionText} </h4>
                            </div>
                            <div>
                                {
                                    firstDayQuiz && firstDayQuiz[currentQuestion].answerOptions.map(option => {
                                        return <ul>
                                            <li className='form-control' onClick={() => handleOptionClick(option.isCorrect)}> {option.answer} </li>
                                        </ul>
                                    })
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default FirstQuiz;