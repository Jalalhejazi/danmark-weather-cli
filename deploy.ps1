# Powershell 
# semantic git deploy 

$package_version = node -p "require('./package.json').version"

git add .
git commit -am "Fix: $package_version"
npm version patch 
git push origin master --force --follow-tags
