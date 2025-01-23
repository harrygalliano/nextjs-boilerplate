'use client';

import React from "react";

const accountsData = [
  { name: "Nestle", revenue: "$92B", tenure: "12 years", contact: "John Doe" },
  { name: "Procter & Gamble", revenue: "$80B", tenure: "10 years", contact: "Jane Smith" },
  { name: "Coca-Cola", revenue: "$42B", tenure: "15 years", contact: "Michael Brown" },
  { name: "Unilever", revenue: "$68B", tenure: "8 years", contact: "Sarah Wilson" },
  { name: "PepsiCo", revenue: "$83B", tenure: "14 years", contact: "Emily Davis" },
  { name: "Johnson & Johnson", revenue: "$95B", tenure: "20 years", contact: "David Lee" },
  { name: "Kraft Heinz", revenue: "$26B", tenure: "5 years", contact: "Linda Martinez" },
  { name: "L'Oréal", revenue: "$38B", tenure: "6 years", contact: "Sophia Garcia" },
  { name: "Nike", revenue: "$46B", tenure: "9 years", contact: "Chris Hernandez" },
  { name: "Adidas", revenue: "$25B", tenure: "7 years", contact: "Anthony Clark" },
];

export default function Accounts() {
  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Accounts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {accountsData.map((account, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-700">{account.name}</h2>
            <p className="text-gray-600 mt-2">
              <strong>Revenue:</strong> {account.revenue}
            </p>
            <p className="text-gray-600 mt-1">
              <strong>Tenure:</strong> {account.tenure}
            </p>
            <p className="text-gray-600 mt-1">
              <strong>Contact:</strong> {account.contact}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="#"
                className="bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
              >
                Orders
              </a>
              <a
                href="#"
                className="bg-green-500 text-white text-center py-2 rounded hover:bg-green-600"
              >
                Content Upload
              </a>
              <a
                href="#"
                className="bg-gray-500 text-white text-center py-2 rounded hover:bg-gray-600"
              >
                Availability
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}