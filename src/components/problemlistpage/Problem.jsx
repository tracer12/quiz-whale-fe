import React from "react";

const Problem = ({ problem }) => {
    return (
        <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">{problem.title}</h2>
            <p className="mb-4">{problem.problem}</p>

            <div className="space-y-2">
                <p><strong>Choices:</strong></p>
                {Object.entries(problem.choices).map(([key, value]) => (
                    <div key={key} className="mb-1">
                        <strong>{key}:</strong> {value}
                    </div>
                ))}
            </div>

            <p className="mt-4">
                <strong>Answer:</strong> {problem.answer}
            </p>
        </div>
    );
};

export default Problem;
