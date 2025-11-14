# SwasthaLink - Quick Installation Script
# Run this script in PowerShell to set up the project

Write-Host "================================" -ForegroundColor Cyan
Write-Host "SwasthaLink Setup" -ForegroundColor Cyan
Write-Host "India's Digital Health Bridge" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js $nodeVersion found" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found. Please install Node.js 18+ from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Display next steps
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Installation Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run development server: npm run dev" -ForegroundColor White
Write-Host "  2. Open browser: http://localhost:3000" -ForegroundColor White
Write-Host "  3. Build for production: npm run build" -ForegroundColor White
Write-Host ""
Write-Host "Project Structure:" -ForegroundColor Yellow
Write-Host "  / - Homepage" -ForegroundColor White
Write-Host "  /swasthpath - Patient Access Platform" -ForegroundColor White
Write-Host "  /arogyanet - AI Intelligence Core" -ForegroundColor White
Write-Host "  /jeevansetu - Emergency Response System" -ForegroundColor White
Write-Host ""
Write-Host "Happy coding! 🚀" -ForegroundColor Cyan
