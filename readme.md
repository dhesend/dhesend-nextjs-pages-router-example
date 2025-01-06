# Dhesend Integration with Next.js (Pages Router)

This repository demonstrates how to integrate **Dhesend** with [Next.js](https://nextjs.org) using the Pages Router.

## Getting Started

Follow the steps below to set up and run the application locally.

### Prerequisites

- [Node.js](https://nodejs.org) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup Instructions

1. **Clone the repository**  
   Clone this repository to your local machine:  
   ```bash
   git clone https://github.com/dhesend/dhesend-nextjs-app-router-example.git
   cd dhesend-nextjs-app-router-example
   ```

2. **Configure environment variables**  
   Create a `.env` file using the provided example:  
   ```bash
   cp .env.example .env
   ```  
   Update the `.env` file with your environment-specific variables.

3. **Install dependencies**  
   Install the required packages:  
   ```bash
   npm install
   ```

4. **Start the development server**  
   Run the Next.js development server:  
   ```bash
   npm run dev
   ```  
   Your application will be available at [http://localhost:3000](http://localhost:3000).

5. **Test the API**  
   Use `curl` or any HTTP client to make a test request to the email-sending endpoint:  
   ```bash
   curl -X POST http://localhost:3000/api/send-email \
   -H "Content-Type: application/json" \
   -d '{
       "from": "Example <send@example.com>"
       "to": ["example@example.com"],
       "subject": "Test Email",
       "textBody": "This is a test email sent from Dhesend integration."
   }'
   ```

## License

MIT License.