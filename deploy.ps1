# Powershell 
# semantic git deploy 
param( 
    [Parameter(Mandatory=$false)] 
    [String] [ValidateSet("broken","feature","fix")] 
    $version  = "fix"  
)

git add .
git commit -am $version

switch ($version) {
    "broken"  { npm version major }
    "feature" { npm version minor }
    Default   { npm version patch }
}

git push origin master --force --follow-tags --quiet

