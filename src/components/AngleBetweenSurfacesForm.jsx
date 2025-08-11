import React, { useState } from "react";

const AngleBetweenSurfacesForm = ({ onSubmit }) => {
  const [equation1, setEquation1] = useState("x^2 + y^2");
  const [equation2, setEquation2] = useState("x^2 - y^2");
  const [x0, setX0] = useState(1);
  const [y0, setY0] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      equation1,
      equation2,
      x0: parseFloat(x0),
      y0: parseFloat(y0),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-[#0f172a]  border border-purple-400 p-6 rounded-lg text-white">
      <div className="mb-4 ">
        <label className="block mb-2">Surface 1 Equation (in x and y):</label>
        <input
          type="text"
          value={equation1}
          onChange={(e) => setEquation1(e.target.value)}
          className="w-full p-2 rounded bg-[#1e293b] border border-gray-600 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Surface 2 Equation (in x and y):</label>
        <input
          type="text"
          value={equation2}
          onChange={(e) => setEquation2(e.target.value)}
          className="w-full p-2 rounded bg-[#1e293b] border border-gray-600 text-white"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block mb-2">x₀:</label>
          <input
            type="number"
            value={x0}
            onChange={(e) => setX0(e.target.value)}
            className="w-full p-2 rounded bg-[#1e293b] border border-gray-600 text-white"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2">y₀:</label>
          <input
            type="number"
            value={y0}
            onChange={(e) => setY0(e.target.value)}
            className="w-full p-2 rounded bg-[#1e293b] border border-gray-600 text-white"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 transition cursor-pointer"
      >
        Compute Angle
      </button>
    </form>
  );
};

export default AngleBetweenSurfacesForm;
