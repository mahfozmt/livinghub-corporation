@echo off
setlocal enabledelayedexpansion

title Livinghub Corporation - cPanel Build & Zip Package Generator
cd /d "%~dp0"

echo ======================================================================
echo    LIVINGHUB CORPORATION - CPANEL PRODUCTION PACKAGE BUILDER
echo ======================================================================
echo.

echo [1/3] Running production build with Vite...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Build failed! Please check the errors above.
    echo.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] Verifying dist directory contents...
if not exist "dist" (
    echo [ERROR] 'dist' folder not found!
    echo.
    pause
    exit /b 1
)

:: Ensure .htaccess is present in dist for cPanel Apache routing
if exist "public\.htaccess" (
    copy /y "public\.htaccess" "dist\.htaccess" >nul
)

echo.
echo [3/3] Compressing dist contents into dist-ready-for-cpanel.zip...
if exist "dist-ready-for-cpanel.zip" (
    del /f /q "dist-ready-for-cpanel.zip"
)

powershell -NoProfile -ExecutionPolicy Bypass -Command "Compress-Archive -Path 'dist\*' -DestinationPath 'dist-ready-for-cpanel.zip' -Force"
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Failed to create zip file with PowerShell.
    echo.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ======================================================================
echo  [SUCCESS] dist-ready-for-cpanel.zip is READY!
echo ======================================================================
echo.
echo  File location: %~dp0dist-ready-for-cpanel.zip
echo.
echo  How to deploy to cPanel:
echo   1. Log into your cPanel -> Open "File Manager".
echo   2. Navigate to your target domain folder (e.g., "public_html").
echo   3. Click "Upload" and select "dist-ready-for-cpanel.zip".
echo   4. Right-click the zip file on cPanel and click "Extract".
echo.
echo ======================================================================
pause
