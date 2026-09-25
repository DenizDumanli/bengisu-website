$ErrorActionPreference = 'Stop'

# Derive a stable per-worktree port so parallel worktrees do not collide.
$sha1 = [System.Security.Cryptography.SHA1]::Create()
$bytes = [System.Text.Encoding]::UTF8.GetBytes($PWD.Path.ToLowerInvariant())
$hex = ($sha1.ComputeHash($bytes) | ForEach-Object { $_.ToString('x2') }) -join ''
$port = 4300 + ([Convert]::ToInt32($hex.Substring(0, 4), 16) % 500)

Write-Host "Starting Astro dev server on http://localhost:$port  ($PWD.Path)"

& npm.cmd run dev -- --host --port $port
exit $LASTEXITCODE
