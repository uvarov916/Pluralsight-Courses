# Some Notes

## Bower Basics

Installing bower globally (node should be installed in advance):
```
$ npm install -g bower
```

Basic commands:
```
$ bower install package_name
$ bower uninstall package_name
$ bower install package_name#2.2.1
```

To show info of a package:
```
$ bower info package_name
```

To update all packages:
```
$ bower update
```

Listing all packages:
```
$ bower list
```

To find a package:
```
$ bower search some_word
```

## Bower Configuration

Creating bower.json file:
```
$ bower init
```

To change location of bower files, create file named `.bowerrc` in the root directory with the following contents:
```
{
    "directory": "path_to_directory"
}
```

Installing and uninstalling packages with updates added to `bower.json` file:
```
$ bower install package_name --save
$ bower install package_name --save-dev
$ bower uninstall package_name --save
```

## Advanced stuff

Listing cached packages:
```
$ bower cache list
```

Installing a package offline:
```
$ bower install package_name -o
```

Installing only production:
```
$ bower install --production
```

To uninstall all dependencies that are not in bower.json file:
```
$ bower prune
```