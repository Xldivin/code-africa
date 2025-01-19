'use client'
import React from 'react';
import TransctionsForm from './Addform';

export default function Transctions() {
  return (
    <div className="flex-1 p-6 bg-black text-black dark:text-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-500">Transactions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-500">Record Transactions</h2>
          <TransctionsForm />
        </div>
      </div>
    </div>
  );
};
