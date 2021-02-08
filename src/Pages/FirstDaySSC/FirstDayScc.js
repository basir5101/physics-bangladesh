import React, { useState } from 'react';
import FirstQuiz from './FirstQuiz';

const FirstDayScc = () => {
    const [showQuiz, setShowQuiz] = useState(false);
    const handleShowQuiz = e => {
        setShowQuiz(true);
    }
    return (
        <div className='mt-5 container'>
            <h3 className='text-center'> প্রথম দিন </h3>
            <div>
                <p>আজকের টাস্ক খুব সহজ। আজকে আমাদের কিছু বিষয় মুখস্থ করার দিন যেগুলো পরের চ্যালেঞ্জ গুলোতে আমরা ব্যবহার করতে থাকব ।
                    <br />
                    <strong className='text-success'>Task1:</strong>   আমরা কয়েকজন পদার্থবিদের অবদান মুখস্থ ।</p>
                {
                    showQuiz ? <FirstQuiz /> :
                        <button className='btn btn-success' onClick={handleShowQuiz}>Start Quiz</button>
                }
            </div>
        </div>
    );
};

export default FirstDayScc;