param(
    $package
)

npm deprecate --force $package "this package has been deprecated"  

npm unpublish --force $package   