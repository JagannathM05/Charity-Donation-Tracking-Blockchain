# Charity Donation Tracking Blockchain

Charity Donation Tracking Blockchain is a decentralized application (dApp) built using **React**, **TypeScript**, **Vite**, and **Ethers.js**. It allows users to submit, validate, and donate to charity cases securely using blockchain technology integrated with MetaMask.

## **Features**
- **Role-Based Access Control**:
  - `Needy`: Submit charity cases.
  - `Trustee`: Validate submitted cases.
  - `Donor`: Donate to validated cases.
- **MetaMask Integration**: Secure wallet connection for Ethereum transactions.
- **Case Management**:
  - Submit new cases for review.
  - Validate or reject cases.
  - Donate to approved cases.
- **Real-Time Status Updates**:
  - Track case statuses (`pending`, `validated`, `funded`).

---

## **Technologies Used**
- **Frontend:** React, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Blockchain Integration:** Ethers.js
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Type Checking:** TypeScript

---

## **Getting Started**

### **Prerequisites**
- Node.js (v18 or higher)
- MetaMask browser extension
- Git

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/JagannathM05/Charity-Donation-Tracking-Blockchain
   cd charity-donation-tracking-blockchain
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## **Project Structure**
```
project/
├── index.html
├── tsconfig.node.json
├── vite.config.ts
├── tsconfig.app.json
├── postcss.config.js
├── tsconfig.json
├── tailwind.config.js
├── eslint.config.js
├── package.json
├── .bolt/
│   └── config.json
└── src/
    ├── vite-env.d.ts
    ├── index.css
    ├── App.tsx
    ├── main.tsx
    ├── hooks/
    │   └── useMetaMask.ts
    ├── components/
    │   ├── NewCaseForm.tsx
    │   ├── WalletButton.tsx
    │   └── CaseCard.tsx
    └── types/
        └── types.ts
```

---

## **Usage**
1. **Connect Wallet:** Click the "Connect Wallet" button to link your MetaMask wallet.
2. **Switch Roles:** Use the role buttons (`Needy`, `Trustee`, `Donor`) to switch between user roles.
3. **Submit a Case (Needy):**
   - Fill out the form to submit a new charity case.
4. **Validate a Case (Trustee):**
   - Click the "Validate" button on pending cases.
5. **Donate (Donor):**
   - Click the "Donate 0.01 ETH" button on validated cases.

---

## **Available Scripts**
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code issues.
- `npm run preview`: Preview the production build locally.

---

## **Contributing**
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## **Acknowledgments**
- [Vite](https://vitejs.dev/) for the fast development setup.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- [Ethers.js](https://docs.ethers.org/) for blockchain interactions.
- [MetaMask](https://metamask.io/) for wallet integration.

### Portfolio : https://sites.google.com/kletech.ac.in/jagannaths-portfolio-bc/home
