@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 20 or later is required. Install it, then reopen this file.
  pause
  exit /b 1
)
node -e "process.exit(Number(process.versions.node.split('.')[0]) >= 20 ? 0 : 1)"
if errorlevel 1 (
  echo Please use Node.js 20 or later.
  pause
  exit /b 1
)
echo Open http://127.0.0.1:4173/ in your browser.
echo Keep this window open. Press Ctrl+C to stop.
echo If EADDRINUSE appears, check whether the preview is already running.
node server.mjs
pause
