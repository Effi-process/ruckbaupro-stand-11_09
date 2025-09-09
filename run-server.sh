#!/bin/bash

# RückbauPRO Development Server Startup Script
# Author: Claude Code
# Date: $(date +%Y-%m-%d)

echo "🚀 Starting RückbauPRO Development Server..."
echo "================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed  
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Display current directory
echo "📁 Current directory: $(pwd)"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Make sure you're in the correct directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies."
        exit 1
    fi
    echo "✅ Dependencies installed successfully."
fi

# Kill any existing processes on port 8000
echo "🔍 Checking for existing processes on port 8000..."
if lsof -ti:8000 > /dev/null 2>&1; then
    echo "⚡ Killing existing processes on port 8000..."
    lsof -ti:8000 | xargs kill -9
    sleep 2
fi

# Check if port 8000 is free now
if lsof -ti:8000 > /dev/null 2>&1; then
    echo "❌ Port 8000 is still in use. Please manually kill the process."
    exit 1
fi

echo "✅ Port 8000 is available."

# Start the development server
echo "🌐 Starting Next.js development server on port 8000..."
echo "📱 Access your website at: http://localhost:8000"
echo "================================================"
echo "⚠️  Press Ctrl+C to stop the server"
echo "================================================"

# Run the development server
npm run dev -- -p 8000

# If the script reaches here, the server was stopped
echo ""
echo "🛑 Development server stopped."
echo "Thanks for using RückbauPRO! 🏗️"