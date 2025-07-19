#!/bin/bash

echo "🚀 Setting up Blinkit Clone - Expo App"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if Yarn is installed
if ! command -v yarn &> /dev/null; then
    echo "❌ Yarn is not installed. Please install Yarn first."
    exit 1
fi

# Check if Expo CLI is installed
if ! command -v expo &> /dev/null; then
    echo "📦 Installing Expo CLI..."
    npm install -g @expo/cli
fi

echo "📦 Installing dependencies..."
yarn install

echo "✅ Setup complete!"
echo ""
echo "To start the app, run:"
echo "  yarn start"
echo ""
echo "Or use platform-specific commands:"
echo "  yarn ios     # For iOS"
echo "  yarn android # For Android"
echo "  yarn web     # For Web"
echo ""
echo "📱 Make sure you have the Expo Go app installed on your mobile device!" 