@echo off
title CampusFind Portal Launcher
echo ========================================================
echo   Launching CampusFind - College Lost and Found Portal
echo ========================================================
echo.
echo Opening index.html in your default web browser...
start "" "%~dp0index.html"
echo Portal opened successfully!
timeout /t 3 >nul
exit
