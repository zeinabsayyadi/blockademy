# Blockademy - ETHSofia 2024

## Overview

Blockademy is a decentralized, blockchain-powered content delivery platform that allows creators to securely share their digital content (videos, images, documents, etc.) with users. It leverages Web3 technologies to ensure user privacy, content ownership, and fair access control by utilizing the iExec Data Protector SDK for secure consumption of digital assets.

Blockademy aims to redefine how users rent, subscribe to, and consume digital content through a fully decentralized and permissionless platform. It is built for ETHSofia2024 and envisions an ecosystem where creators retain full control over their content, and users can rent or subscribe to content seamlessly, ensuring transparency and security in the process.

## Features

- **Decentralized Content Hosting**: All content is stored and delivered using decentralized storage solutions to ensure security, availability, and immutability.
- **iExec Data Protector Integration**: The platform integrates iExec's Data Protector to securely handle access to content while preserving privacy and controlling permissions.
- **Content Rentals and Subscriptions**: Users can rent or subscribe to digital content, ensuring they pay for what they consume and can access content within defined terms.
- **Secure Payment Mechanism**: Blockademy allows payments in cryptocurrency, offering transparent transactions between creators and consumers.
- **Content Access Control**: Only users who have valid subscriptions or rentals can view the content, ensuring that digital assets are protected.
- **Auto-Download & View Capabilities**: After renting or subscribing, users can instantly view or download content based on the permissions set by the creator.
- **Digital Ownership Tracking**: Every piece of content has verifiable ownership recorded on the blockchain, ensuring that creators' rights are fully protected.

## Technology Stack

- **Next.js**: For building the front-end application and managing the content viewer.
- **React Query**: Used for state management and server data synchronization.
- **iExec Data Protector SDK**: For ensuring secure content delivery and privacy protection.
- **Web3.js / Ethers.js**: Used to handle interactions with the blockchain, user wallet, and contract deployments.
- **Tailwind CSS**: For responsive and modern UI design.
- **Smart Contracts (Solidity)**: For managing rental agreements, subscriptions, and payments.

## Getting Started

### Prerequisites

1. **Node.js**: Make sure Node.js is installed on your machine.
2. **MetaMask or Web3 Wallet**: To interact with the platform, users need a Web3 wallet such as MetaMask.
3. **Ethereum Test Network**: Blockademy currently supports the Ethereum test network for demo purposes. Ensure you have some test ETH.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blockademy.git
   cd blockademy
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file with the required configurations:

   ```
   NEXT_PUBLIC_PROTECTED_DATA_DELIVERY_DAPP_ADDRESS=your_data_delivery_dapp_address
   NEXT_PUBLIC_WORKERPOOL_ADDRESS=your_workerpool_address
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Smart Contract Deployment

Make sure to deploy the rental and subscription smart contracts using Remix or Hardhat, and link them with your frontend.

## Usage

1. **Content Creation**: Creators can upload their content to Blockademy via decentralized storage, set rental parameters (price, duration), and control subscription access.
2. **Rent or Subscribe**: Users can browse available content, rent or subscribe to it, and pay with cryptocurrency.
3. **Accessing Content**: After payment, users can either view the content directly on the platform or download it securely for offline access.

## Security

Blockademy ensures the following security measures:

- **Encrypted Content**: All digital assets are encrypted and delivered securely.
- **Decentralized Storage**: Content is stored using decentralized storage networks to ensure data availability and privacy.
- **Blockchain Auditing**: Every transaction related to content consumption is recorded on the blockchain for transparency.

## Contributing

We welcome contributions from the community to improve Blockademy. Please submit issues or pull requests on the [GitHub repository](https://github.com/yourusername/blockademy).

## License

Blockademy is open-source and available under the [MIT License](LICENSE).

---

### Built with love for ETHSofia 2024 🌍

# Blockademy - ETHSofia 2024

## Overview

Blockademy is a decentralized, blockchain-powered content delivery platform that allows creators to securely share their digital content (videos, images, documents, etc.) with users. It leverages Web3 technologies to ensure user privacy, content ownership, and fair access control by utilizing the iExec Data Protector SDK for secure consumption of digital assets.

Blockademy aims to redefine how users rent, subscribe to, and consume digital content through a fully decentralized and permissionless platform. It is built for ETHSofia2024 and envisions an ecosystem where creators retain full control over their content, and users can rent or subscribe to content seamlessly, ensuring transparency and security in the process.

## Features

- **Decentralized Content Hosting**: All content is stored and delivered using decentralized storage solutions to ensure security, availability, and immutability.
- **iExec Data Protector Integration**: The platform integrates iExec's Data Protector to securely handle access to content while preserving privacy and controlling permissions.
- **Content Rentals and Subscriptions**: Users can rent or subscribe to digital content, ensuring they pay for what they consume and can access content within defined terms.
- **Secure Payment Mechanism**: Blockademy allows payments in cryptocurrency, offering transparent transactions between creators and consumers.
- **Content Access Control**: Only users who have valid subscriptions or rentals can view the content, ensuring that digital assets are protected.
- **Auto-Download & View Capabilities**: After renting or subscribing, users can instantly view or download content based on the permissions set by the creator.
- **Digital Ownership Tracking**: Every piece of content has verifiable ownership recorded on the blockchain, ensuring that creators' rights are fully protected.

## Technology Stack

- **Next.js**: For building the front-end application and managing the content viewer.
- **React Query**: Used for state management and server data synchronization.
- **iExec Data Protector SDK**: For ensuring secure content delivery and privacy protection.
- **Web3.js / Ethers.js**: Used to handle interactions with the blockchain, user wallet, and contract deployments.
- **Tailwind CSS**: For responsive and modern UI design.
- **Smart Contracts (Solidity)**: For managing rental agreements, subscriptions, and payments.

## Getting Started

### Prerequisites

1. **Node.js**: Make sure Node.js is installed on your machine.
2. **MetaMask or Web3 Wallet**: To interact with the platform, users need a Web3 wallet such as MetaMask.
3. **Ethereum Test Network**: Blockademy currently supports the Ethereum test network for demo purposes. Ensure you have some test ETH.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blockademy.git
   cd blockademy
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file with the required configurations:

   ```
   NEXT_PUBLIC_PROTECTED_DATA_DELIVERY_DAPP_ADDRESS=your_data_delivery_dapp_address
   NEXT_PUBLIC_WORKERPOOL_ADDRESS=your_workerpool_address
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Smart Contract Deployment

Make sure to deploy the rental and subscription smart contracts using Remix or Hardhat, and link them with your frontend.

## Usage

1. **Content Creation**: Creators can upload their content to Blockademy via decentralized storage, set rental parameters (price, duration), and control subscription access.
2. **Rent or Subscribe**: Users can browse available content, rent or subscribe to it, and pay with cryptocurrency.
3. **Accessing Content**: After payment, users can either view the content directly on the platform or download it securely for offline access.

## Security

Blockademy ensures the following security measures:

- **Encrypted Content**: All digital assets are encrypted and delivered securely.
- **Decentralized Storage**: Content is stored using decentralized storage networks to ensure data availability and privacy.
- **Blockchain Auditing**: Every transaction related to content consumption is recorded on the blockchain for transparency.

## Contributing

We welcome contributions from the community to improve Blockademy. Please submit issues or pull requests on the [GitHub repository](https://github.com/yourusername/blockademy).

## License

Blockademy is open-source and available under the [MIT License](LICENSE).

---

### Built with love for ETHSofia 2024 🌍
