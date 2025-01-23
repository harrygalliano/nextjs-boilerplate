'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    locationsInclude: "",
    locationsExclude: "",
    constraints: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to /availability (form data can be sent to an API if needed)
    router.push("/availability");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Availability Form</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="block text-gray-700 font-semibold mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* End Date */}
        <div>
          <label htmlFor="endDate" className="block text-gray-700 font-semibold mb-2">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Locations to Include */}
        <div>
          <label htmlFor="locationsInclude" className="block text-gray-700 font-semibold mb-2">
            Locations to Include
          </label>
          <input
            type="text"
            id="locationsInclude"
            name="locationsInclude"
            value={formData.locationsInclude}
            onChange={handleChange}
            placeholder="Enter locations separated by commas"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Locations to Exclude */}
        <div>
          <label htmlFor="locationsExclude" className="block text-gray-700 font-semibold mb-2">
            Locations to Exclude
          </label>
          <input
            type="text"
            id="locationsExclude"
            name="locationsExclude"
            value={formData.locationsExclude}
            onChange={handleChange}
            placeholder="Enter locations separated by commas"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Constraints */}
        <div>
          <label htmlFor="constraints" className="block text-gray-700 font-semibold mb-2">
            Constraints
          </label>
          <textarea
            id="constraints"
            name="constraints"
            value={formData.constraints}
            onChange={handleChange}
            placeholder="Enter any constraints or notes here..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}