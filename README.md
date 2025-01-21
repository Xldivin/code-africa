# Financial Tracker Application Documentation

## Overview
The Wallet Application is a user-friendly platform designed to help individuals effectively manage their finances. The app provides features for tracking transactions, generating financial reports, setting budgets, and visualizing financial data. It supports categorization of expenses, allowing users to analyze their spending habits more effectively.

## Features

### 1. Track Transactions
- Log all incoming and outgoing transactions from different accounts.

### 2. Generate Reports
- Create detailed financial reports for a specified time range.
- Reports can include income, expenses, and downloaded in cvc.

### 3. Budget Notifications
- Set a budget limit for your expenses which is 300,000 rwf .
- Receive notifications when expenses exceed the predefined budget.

<!-- ### 4. Categories and Subcategories
- Add custom categories and subcategories to classify your expenses.
- Link each transaction to a related category or subcategory for better analysis. -->

### 5. Transaction Summaries
- Display a summary of all transactions in a visualized format.
- Use charts and graphs to provide an overview of financial data, including income vs. expenses.

## Getting Started

### Prerequisites
Ensure the following tools and dependencies are installed:
- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Steps to Start the Application Locally

1. Clone the Repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Start the Development Server:
   ```bash
   npm run dev
   ```

4. Access the Application:
   Open your browser and navigate to `http://localhost:3000`.

### Public Preview Link
A publicly accessible preview of the application can be found at:
[Financial Tracker Application](https://code-africa-tmg8.vercel.app)

## Usage Instructions

1. **Sign Up and Log In**:
   - Create an account or log in using your existing credentials.
   - Your data will be securely saved in local storage.

2. **Add Transactions**:
   - Navigate to the "Transactions" section.
   - Enter the amount, description, date, type (income/expense), and category.

3. **View and Analyze Data**:
   - Use the "Dashboard" section to view visualized data for your transactions.
   - Generate reports.

4. **Budgets**:
   - Receive alerts when your spending exceeds the budget.

5. **Manage Categories**:
   - Add, edit, or delete categories and subcategories.
   - Link transactions to categories for a better overview.

## Application Workflow

1. **Data Storage**:
   - User transactions are stored in `localStorage` and are linked to the logged-in user.
   - Data is structured as a JSON object where each user has a unique key.

   Example:
   ```json
   {
       "Joe": [
           {
               "amount": 3000,
               "description": "Refund",
               "date": "2020-10-10",
               "type": "income",
               "category": "bank"
           }
       ]
   }
   ```

2. **Retrieve Transactions**:
   - Upon login, the application fetches data for the logged-in user.
   - Data is displayed in a categorized and visualized format.

3. **Logout**:
   - Logging out removes user-specific data from the state.
   - The user is redirected to the login screen.

## Contributing
Contributions are welcome! If you find any issues or have ideas for improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

For further assistance, feel free to contact the development team at [xldivin@gmail.com](mailto:xldivin@gmail.com).

