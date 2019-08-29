# Powershell 
# semantic git deploy 
param( $message = "Fix" )

git add .

git commit -am "$message"

npm version patch 

git push origin master --force --follow-tags --quite

$package_version = node -p "require('./package.json').version"
Write-Host  "Releasing Version: $package_version" -ForegroundColor Green