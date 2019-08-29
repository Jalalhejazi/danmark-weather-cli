$package_version=node -pe "console.log(require('./package.json').version)"

Write-Host $package_version -ForegroundColor Green