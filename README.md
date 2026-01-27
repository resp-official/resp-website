# RESP - Deep Space Mining Frontier

RESP is a high-fidelity web application built for the first interplanetary asteroid mining guild. It leverages AI-powered spectroscopic analysis to provide real-time data on celestial bodies.

## 🚀 Key Features

- **Dynamic Space Visualization**: High-performance Framer Motion animations simulating launch and extraction phases.
- **AI-Driven Asteroid Scanner**: Powered by Google Gemini 3 with Search Grounding to analyze real-world astronomical data.
- **Web3 Integration**: Ethereum wallet connectivity and a Treasury Matrix minting protocol simulation.
- **Mission Hub**: Strategic briefing system for decentralized resource sovereignty.
- **Modern UI**: Dark-mode optimized, responsive design using Tailwind CSS and Outfit/Space Grotesk typography.

## 🛠 Technology Stack

- **Framework**: React 19
- **Animation**: Framer Motion
- **AI Integration**: @google/genai (Gemini API)
- **Icons**: Lucide React
- **Blockchain Interface**: Ethers.js v6
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- A Google Gemini API Key from [AI Studio](https://aistudio.google.com/app/apikey)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/resp-space.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root and add your API key:
   ```env
   VITE_GEMINI_API_KEY=your_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### GitHub Deployment
This project is ready for **GitHub Pages**. 
1. Run `npm run build`.
2. Push the contents of the `dist` folder to your `gh-pages` branch.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*“Beyond Earth. Beyond Limits.”*