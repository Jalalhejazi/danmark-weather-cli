# Powershell 
# semantic git deploy 
param( $message )

git add .

npm version patch 

$package_version = node -p "require('./package.json').version"

git commit -am "$package_version $message"

git push origin master --force --follow-tags 

Write-Host  "Releasing Version: $package_version" -ForegroundColor Green