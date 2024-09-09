# MMMMMai: Make Less With Less

## About
MMMMMai is a project intended to be completely useless, but also hilarious. Curb your hunger by generating disgusting, inedible recipes with the ingredients you have at home! MMMMMai will not only generate the recipe but also create a sample image of the meal using cutting-edge AI—don’t be fooled by the strategic plating—you will not want to eat again after trying these recipes.

## Features
- **Bad Recipe Generator**: Input random ingredients you have at home, and MMMMMai will create the most awful, unappetizing recipes using Cloudflare’s LLaMA-3.1-8B-Instruct model.
- **AI-Generated Meal Images**: Generates an image of your disgusting meal using the Stable-Diffusion-XL-Lightning model, so you can visualize the horror before you decide to (not) cook.

## Requirements
- Node.js (v14 or higher)
- Cloudflare Account with access to Workers AI (LLaMA-3.1-8B-Instruct, Stable-Diffusion-XL-Lightning)
- API Tokens for Cloudflare Workers AI

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/MMMMMai.git
cd MMMMMai/workers/typescript-based-api
```

### 2. Intall Dependencies
```bash
npm install
```

### 3. Initialize the Project
```bash
npm init
```

### 4. Run the Development Server
```bash
npm run dev
```

## Usage
- Enter Ingredients: Open the app in your browser, and input a list of ingredients you have at home.
- Generate Recipe: Click "Generate Recipe" to receive a hilariously bad recipe.
- View the Image: See the AI-generated image of your unappetizing meal.
- Laugh: Be prepared to laugh at how bad the result looks and sounds!

## Technologies Used
- Cloudflare Workers AI:
    LLaMA-3.1-8B-Instruct: For generating absurd recipe descriptions.
    Stable-Diffusion-XL-Lightning: For generating corresponding images based on the recipe.
- Node.js: Server-side environment for running the application.
- Hono: Lightweight web framework for handling API requests and responses.

## Example

https://github.com/user-attachments/assets/58799b85-3398-4c9a-919c-f4e09fd56660

![Screenshot 2024-09-09 at 11 27 00 AM](https://github.com/user-attachments/assets/829efa96-b273-441a-9521-13ab34b155bb)
