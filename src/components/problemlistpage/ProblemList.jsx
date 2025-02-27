import React, { useState } from "react";

// 문제 데이터
const problemData = [
    {
        "id": 1,
        "title": "Not given",
        "problem": "Which of the following statements is false regarding the Transformer model in the context?",
        "choices": {
            "A": "It is a sequence transduction model based on complex recurrent or convolutional neural networks.",
            "B": "The model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task.",
            "C": "The Transformer model is based solely on attention mechanisms.",
            "D": "It surpassed existing models including ensembles on the WMT 2014 English-to-German translation task.",
            "E": "It does not use recurrence and convolutions at all."
        },
        "answer": "A",
        "Explanation": "Choice A is false because the Transformer model is not based on complex recurrent or convolutional neural networks, but solely on attention mechanisms. It dispenses with recurrence and convolutions entirely."
    },
    {
        "id": 2,
        "title": "Neural Networks and the Transformer Model",
        "problem": "What is one of the primary features of the Transformer model in comparison to some other models?",
        "choices": {
            "A": "The Transformer model relies on sequential computation",
            "B": "The Transformer model uses convolutional neural networks as basic building blocks",
            "C": "The Transformer model utilizes recurrence and sequence alignment",
            "D": "The Transformer model uses an attention mechanism to draw global dependencies between input and output",
            "E": "The Transformer model uses self-attention to compute representations of its input and output with sequence-aligned RNNs or convolution"
        },
        "answer": "D",
        "Explanation": "The Transformer model is mentioned as relying entirely on an attention mechanism to draw global dependencies between input and output, allowing for significantly more parallelization."
    },
    {
        "id": 3,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 4,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 5,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 6,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 7,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 8,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 9,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 10,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 11,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }
    ,
    {
        "id": 12,
        "title": "Understanding the decoder in machine learning",
        "problem": "What is the purpose of third sub-layer that is inserted into the decoder in a machine learning model?",
        "choices": {
            "A": "To perform multi-head attention over the output of the encoder stack",
            "B": "To offset the output embeddings by one position",
            "C": "To produce outputs of dimension 512",
            "D": "To facilitate residual connections",
            "E": "To map a query and a set of key-value pairs to an output"
        },
        "answer": "A",
        "Explanation": "The text states that 'the decoder inserts a third sub-layer which performs multi-head attention over the output of the encoder stack.', hence option A is correct. The other options refer to different components or functions within the model, but they are not the primary purpose of the third sub-layer in the decoder."
    }

]

const ProblemList = ({ setSelectedProblem }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const problemsPerPage = 10;

    const indexOfLastProblem = currentPage * problemsPerPage;
    const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
    const currentProblems = problemData.slice(indexOfFirstProblem, indexOfLastProblem);

    const nextPage = () => {
        if (currentPage < Math.ceil(problemData.length / problemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div>
            {/* 문제 목록을 블록 형식으로 표시 */}

            {currentProblems.map((problem) => (
                <div key={problem.id} className="block mb-2 p-2 border border-gray-300 rounded cursor-pointer"
                    onClick={() => setSelectedProblem(problem)} // 문제 클릭 시 문제 정보 전달
                >
                    <h4 className="font-semibold">ID: {problem.id}</h4>
                    <p>Title: {problem.title}</p>
                </div>
            ))}
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
                >
                    {"<"} Prev
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(problemData.length / problemsPerPage)}
                    className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
                >
                    Next {">"}
                </button>
            </div>
        </div>
    );
};

export default ProblemList;
