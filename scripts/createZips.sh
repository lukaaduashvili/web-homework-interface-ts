#!/usr/bin/env sh

rm -r dist 2> /dev/null
for hw in $(/bin/ls homeworks)
do
	mkdir -p dist/$hw
	zip -rj dist/$hw/$hw.zip homeworks/$hw/ -x \
		\*solution\* \*server.js \*extras.js \*tests.js \*main.js \*animation.js
done