@echo off
echo 🚀 Setting up Blinkit Clone - Expo App
echo ======================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if Yarn is installed
yarn --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Yarn is not installed. Please install Yarn first.
    pause
    exit /b 1
)

REM Check if Expo CLI is installed
expo --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing Expo CLI...
    npm install -g @expo/cli
)

echo 📦 Installing dependencies...
yarn install

echo ✅ Setup complete!
echo.
echo To start the app, run:
echo   yarn start
echo.
echo Or use platform-specific commands:
echo   yarn ios     # For iOS
echo   yarn android # For Android
echo   yarn web     # For Web
echo.
echo 📱 Make sure you have the Expo Go app installed on your mobile device!
pause 