import React, { useState } from 'react';
import VelocityQuiz from '../../quiz/VelocityQuiz';
import logo from '../../images/physics.png';
import { Link } from 'react-router-dom';
import VelocityDetails from '../../Component/VelocityCalculate/VelocityDetails';
import { Check } from 'react-feather';

const SecondDaySSC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState([])
    const handleOption = (isCorrect, questionNumber) => {
        if (isCorrect) {
            setScore(score + 1);
        } else {
            wrongAnswer.push(questionNumber);
            console.log(wrongAnswer)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < VelocityQuiz.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowScore(true)
        }
    }

    const handleShowQuiz = e => {
        setShowQuiz(true)
    }
    return (
        <div className='mcq-holder'>
            <div className="bg-header">
                <Link to='/'> <img className='' src={logo} alt="" /></Link>
                <h1> বেগ </h1>
            </div>
            <hr />
            <div className="container">
                {
                    !showQuiz ?
                        <button onClick={handleShowQuiz} className="btn btn-success">Show Quiz</button>
                        :
                        showScore ? <div className="result-container">
                            <h4>You have got {score} out of {VelocityQuiz.length}</h4>

                            <p className='text-danger mt-4'>আপনার ভুল উত্তর গুলো যাচাই করে নিন</p>
                            {
                                wrongAnswer && wrongAnswer.map(number => (
                                    <div>
                                        <p> {number}. {VelocityQuiz[number].mcq} </p>
                                        {
                                            VelocityQuiz[number].options.map(option => {
                                                return <button className='btn w-50'>{option.isCorrect && <Check />} {option.answer} </button>
                                            })
                                        }
                                    </div>
                                ))
                            }
                        </div>
                            :
                            VelocityQuiz &&
                            <div className='mt-4'>
                                <p><strong> {currentQuestion + 1}. </strong> {VelocityQuiz[currentQuestion].mcq} </p>
                                {
                                    VelocityQuiz[currentQuestion].options.map(option => {
                                        return <button onClick={() => handleOption(option.isCorrect, currentQuestion)} className='btn text-success w-50'> {option.answer} </button>
                                    })
                                }
                            </div>
                }
            </div>
        </div>
    );
};

export default SecondDaySSC;