#!/usr/bin/env bash

# Stop tracking certain files that were pulled from the template.
git rm --cached ./ts/tslint.json ./.gitignore

# Delete the readmes that were used to track otherwise-empty dirs.
rm ./.d.ts/readme.md ./js/readme.md ./ts/readme.md ./ts/tests/readme.md

# Install the missing packages from our package.json file.
npm install

# Remind the user to update relevant package information from the template and commit the above changes.
echo "Remember to modify the package.json, license.md, and readme.md to correct the relevant package information."
echo "Also remember to commit the changes that this script has made."

echo "All done, bye!"

# Make the script remove itself.
rm -- "$0"
