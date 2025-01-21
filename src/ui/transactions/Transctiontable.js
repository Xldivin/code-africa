'use client';
import { useEffect, useState } from "react";

export default function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);
    const [sortConfig, setSortConfig] = useState(null);


    useEffect(() => {
        // Retrieve logged-in user
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");

        if (loggedInUser && loggedInUser.username) {
            // Retrieve all financial data
            const savedTransactions = localStorage.getItem("financialData");
            if (savedTransactions) {
                const parsedData = JSON.parse(savedTransactions);

                // Get transactions for the logged-in user
                const userTransactions = parsedData[loggedInUser.username] || [];
                setTransactions(userTransactions);
            }
        } else {
            console.log("No user is logged in.");
            setTransactions([]);
        }
    }, []);

    // Filtered Products based on search term
    const filteredTransactions  = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting
    const sortedTransactions  = sortConfig
        ? [...filteredTransactions].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        })
        : filteredTransactions;

    // Pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTransactions = sortedTransactions.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

    const exportToCSV = () => {
        if (transactions.length === 0) {
            alert("No data available to export.");
            return;
        }

        const headers = ["Amount", "Category", "Date", "Description", 'Type'];
        const rows = transactions.map(product => [
            product.amount,
            product.category,
            product.date,
            product.description,
            product.type
        ]);

        const csvContent = [headers, ...rows]
            .map(row => row.join(","))
            .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "transactions.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative w-[60%] overflow-x-auto shadow-md sm:rounded-lg">
            <button
                onClick={exportToCSV}
                className="mb-4 px-4 py-2 bg-blue-600 text-primary rounded hover:bg-blue-700"
            >
                Export to CSV
            </button>
            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[100%]">
                <thead className="text-xs text-gray-700 uppercase dark:bg-[#151515] dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3 cursor-pointer">
                            Description
                        </th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3 cursor-pointer" >
                            Type 
                        </th>
                        <th className="px-6 py-3 cursor-pointer" >
                            Category 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedTransactions.length > 0 ? (
                        paginatedTransactions.map((transaction, index) => (
                            <tr
                                key={index}
                                className="bg-[#151515] border-b dark:bg-[#151515] dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                                >
                                    {transaction.description}
                                </th>
                                <td className="px-6 py-4">{transaction.amount}</td>
                                <td className="px-6 py-4">{transaction.type}</td>
                                <td className="px-6 py-4">{transaction.category}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="p-2 text-center">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 space-x-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
