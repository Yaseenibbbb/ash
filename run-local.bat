@echo off
cd /d "%~dp0frontend\build"
echo Ashraf frontend is running at http://localhost:3000
echo Keep this window open while you view the site.
"C:\Users\yasee\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 3000 --bind 127.0.0.1
pause
