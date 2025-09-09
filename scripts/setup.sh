#!/bin/bash

# Seven Healer counsultancy Pvt.Ltd - Setup Script

echo "🏥 Setting up Seven Healer counsultancy Pvt.Ltd project..."

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p backend/static/uploads
mkdir -p logs

# Copy environment files
echo "📋 Setting up environment files..."
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Created .env file from template. Please update with your values."
fi

if [ ! -f backend/.env ]; then
    cp backend/env.example backend/.env
    echo "✅ Created backend/.env file from template. Please update with your values."
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
pip install -r requirements.txt
cd ..

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update .env files with your configuration"
echo "2. Start the backend: cd backend && uvicorn app.main:app --reload"
echo "3. Start the frontend: npm run dev"
echo "4. Visit http://localhost:3000 to see the website"
