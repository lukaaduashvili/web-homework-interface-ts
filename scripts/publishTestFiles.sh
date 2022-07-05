#!/usr/bin/env sh

changes=$(git status --porcelain)
echo $changes
if [[ ! -z $changes ]]
then
	echo "changes exist in repository. commit first"
	exit 1
fi


current_branch=$(git branch --show-current)
rm -r dist 2> /dev/null
if [[ $1 == "zip" || $2 == "zip" || $3 == "zip" ]]
then
	yarn createZips
fi
# make sure changes are synced first
git checkout dist
git pull
# go back to build from source
git checkout $current_branch
yarn build-student-tests
# TODO
cp homeworks/hw8/animation.js dist/hw8 2> /dev/null
git checkout dist
cp -r dist/* docs/
git add docs/
git commit -m "auto commit"
git push
git checkout $current_branch

