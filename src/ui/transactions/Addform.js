import React, { useState, useEffect } from 'react';

const TransctionsForm = () => {
    const [loading, setLoading] = useState(false);

    const handleAddItem = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        // Retrieve logged-in user
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    
        if (!loggedInUser || !loggedInUser.username) {
            alert("No user is logged in. Please log in to save transactions.");
            setLoading(false);
            return;
        }
    
        const data = new FormData(event.currentTarget);
        const formData = Object.fromEntries(data.entries());
    
        // Format the data
        const formattedData = {
            amount: parseFloat(formData.amount),
            description: formData.description,
            date: formData.date, // Keep as a string if it's a date
            type: formData.type,
            category: formData.category,
        };
    
        // Retrieve existing data for the logged-in user
        const allData = JSON.parse(localStorage.getItem("financialData")) || {};
        const userTransactions = allData[loggedInUser.username] || [];
    
        // Add the new transaction
        userTransactions.push(formattedData);
    
        // Update the storage with the user's transactions
        allData[loggedInUser.username] = userTransactions;
        localStorage.setItem("financialData", JSON.stringify(allData));
    
        alert("Transaction Saved!");
    
        event.currentTarget.reset();
        setLoading(false);
    };    
    

    return (
        <form
            onSubmit={handleAddItem}
            className="bg-[#151515] text-gray-500 p-6 shadow rounded-lg space-y-4"
        >
            <div>
                <label className="block text-gray-700 font-bold mb-2">
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        required
                        className="w-full bg-[#151515] text-[#fff] px-3 py-2 border border-gray-300 rounded"
                    />
                </label>
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">
                    Date:
                    <input
                        type="date"
                        name="date"
                        required
                        className="w-full bg-[#151515] text-[#fff] px-3 py-2 border border-gray-300 rounded"
                    />
                </label>
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">
                    Description:
                    <textarea
                        name="description"
                        required
                        className="w-full bg-[#151515] text-[#fff] px-3 py-2 border border-gray-300 rounded"
                    ></textarea>
                </label>
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">
                    Type:

                    <select
                        name="type"
                        className="w-full bg-[#151515] text-[#fff] px-3 py-2 border border-gray-300 rounded"
                        defaultValue=""
                    >
                        <option value="">
                            Select a type
                        </option>
                        <option value='income'>income</option>
                        <option value='expense'>expense</option>
                    </select>

                </label>
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">
                    Category:

                    <select
                        name="category"
                        className="w-full bg-[#151515] text-[#fff] px-3 py-2 border border-gray-300 rounded"
                        defaultValue=""
                    >
                        <option value="" className='text-gray-500'>
                            Select a category
                        </option>
                        <option value='mobile money'>momo</option>
                        <option value='bank'>bank</option>
                        <option value='cash'>cash</option>
                    </select>

                </label>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Record Transction'}
            </button>
        </form>
    );
};

export default TransctionsForm;
