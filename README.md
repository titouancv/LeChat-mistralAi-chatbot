
# Le Chat Mistral AI chatbot by Titouan Carion-Vignaud

This project is built using [Next.js](https://nextjs.org), initialized with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

Ensure you have the following installed:

- **Node.js 18.18 or later** - [Download here](https://nodejs.org/en/download/package-manager)
- **Next.js** - [Installation guide](https://nextjs.org/docs/app/getting-started/installation)

## Setup

### 1. Install Dependencies

To install the necessary packages, run the following command in your project directory:

```bash
npm install
```

### 2. Set Up Environment Variables

Create or edit a `.env` file at the root of your project, and add your **Mistral API key**:

```plaintext
NEXT_PUBLIC_MISTRAL_API_KEY=your_mistral_api_key_here
```

> **Note:** Never share your `.env` file publicly, as it contains sensitive information.

## Getting Started

To start the development server, you can use any of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Development Tips

You can modify the main page by editing the `src/app/page.js` file. Changes will automatically reflect in your browser, allowing you to see updates live.

