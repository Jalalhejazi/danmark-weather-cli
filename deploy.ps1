# Powershell 
# semantic git deploy 
param( $message )

$package_version = node -p "require('./package.json').version"
Write-Host  "Releasing Version: $package_version" -ForegroundColor Green

git add .
git commit -am "$package_version $message"
npm version patch 
git push origin master --force --follow-tags 
