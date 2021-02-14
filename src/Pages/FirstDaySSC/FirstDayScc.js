import React, { useState } from 'react';
import FirstQuiz from './FirstQuiz';

const FirstDayScc = () => {
    return (
        <div className='mt-5 container'>
            <h3 className='text-center'> প্রথম দিন </h3>
            <div>
                <p>আজকের টাস্ক খুব সহজ। আজকে আমাদের কিছু বিষয় মুখস্থ করার দিন যেগুলো পরের চ্যালেঞ্জ গুলোতে আমরা ব্যবহার করতে থাকব ।
                    <br />
                    <strong className='text-success'>Task1:</strong>কয়েকজন পদার্থবিদের অবদান মুখস্থ ।</p>
                <table className='table border'>
                    <tr>
                        <th>নাম</th>
                        <th>অবদান</th>
                    </tr>
                    <tr>
                        <td>থেলিস</td>
                        <td>সূর্য গ্রহনের ভবিস্যত বাণী, লোডস্টনের চৌম্বক ধর্ম</td>
                    </tr>
                    <tr>
                        <td>থেলিস</td>
                        <td>সূর্য গ্রহনের ভবিস্যত বাণী, লোডস্টনের চৌম্বক ধর্ম</td>
                    </tr>
                    <tr>
                        <td>ডেমোক্রিটাস</td>
                        <td>পদার্থের অবিভাজ্য একক এটম এর ধারণা</td>
                    </tr>
                    <tr>
                        <td>আর্কিমিডিস</td>
                        <td>প্লবতা, সোনায় খাদের পরিমাণ, গোলীয় আয়নায় প্রতিফলন</td>
                    </tr>
                    <tr>
                        <td>আর্যভট্ট</td>
                        <td>শূন্যের সঠিক ব্যবহার</td>
                    </tr>
                    <tr>
                        <td>আল খোয়ারিজমি</td>
                        <td>তার লিখা বই 'আল-জাবির' বই হতে 'Algebra' উদ্ভুত</td>
                    </tr>
                    <tr>
                        <td>ইবনে আল হাইয়ান</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>নিউটন</td>
                        <td>গতিবিদ্যা, বলবিদ্যা, ক্যালকুলাস</td>
                    </tr>
                </table>
            </div>
            <div>
                <FirstQuiz />
            </div>
        </div>
    );
};

export default FirstDayScc;