install:
	npm ci
	npm link

gendiff:
	node bin/gendiff.js

publish:
	npm publish --dry-run

make lint:	
	npx eslint .

test:
	npx -n --experimental-vm-modules jest

test-watch:
	npm test -s -- --watch

test-coverage: # Run coverage tests
	npm test -- --coverage --coverageProvider=v8