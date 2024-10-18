import React, { useState } from "react";

function Todo() {
    const [arr, setArr] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function addNewInp(e) {
        setInputValue(e.target.value);
    }

    function addToList() {
        if (inputValue.trim() !== "") {
            setArr((prevArr) => [
                ...prevArr,
                { text: inputValue, isCompleted: false }
            ]);
            setInputValue("");
        }
    }

    function checkedIt(index) {
        setArr((prevArr) =>
            prevArr.map((item, i) =>
                i === index ? { ...item, isCompleted: !item.isCompleted } : item
            )
        );
    }

    function delItem(index){
        setArr((prevArr) =>
            prevArr.filter((item, i) => i !== index)
        );
    }

    return (
        <div className="max-w-md mx-auto min-h-[400px] bg-white shadow-lg rounded-lg overflow-hidden mt-16">
            <div className="px-4 py-2">
                <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
            </div>
            <form className="w-full max-w-sm mx-auto py-2" onSubmit={(e) => e.preventDefault()}>
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input
                        value={inputValue}
                        onChange={addNewInp}
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Add a task"
                    />
                    <button
                        onClick={addToList}
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button"
                    >
                        Add
                    </button>
                </div>
            </form>
            <ul className="divide-y divide-gray-200 px-4">
                {arr.map((item, index) => (
                    <li key={index} className="py-4">
                        <div className="flex items-center">
                            <input
                                id={`todo${index}`}
                                type="checkbox"
                                checked={item.isCompleted}
                                onChange={() => checkedIt(index)}
                                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                            />
                            <div className="flex justify-between items-center w-[90%]">
                                <label className="ml-3 block text-gray-900">
                                    <span className={`text-lg font-medium ${item.isCompleted ? "line-through" : ""}`}>{item.text}</span>
                                </label>
                                <button onClick={() => delItem(index)} className="text-red-600 hover:underline">del</button>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
