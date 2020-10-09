# Focus College ACSD Final

This is the final exam for Developing Software:Introduction in the Advanced Certificate of Software Development program.

This project contains the following packages:

- Typescript Compiler
    - tsconfig.json

- Git Repository
    - .gitignore

- ESLint (Linting)
    - .eslintrc
    - .eslintrc.json
    - .eslintignore

- Prettier (Code Formatting)
    - .prettierrc.json
    - .prettierignore

- Mocha & Chai

- nyc
    - nycrc.json

- Yargs

## Installation Instructions

To install this package please run:

``` 
npm install 
```

## Yargs
To use the yargs commands:
```
npm run start:dev -- -- calc-house-materials --width [number] --length [number] --isFeet [boolean] --name [string]
```
OR
```
npm run start:dev -- -- get-house-materials --name [string]
```
Both yargs commands output a House object with relevant fields populated.

## Start Scripts

This project has the following scripts:

To compile the program use:
```
npm run build:compile
```

To run the program use:
```
npm run start
```

To run the linter use:
```
npm run lint
```

To run the code formatter use:
```
npm run prettier
```

To run the code tester use:
```
npm run test
```

To run the code tester with coverage report use:
```
npm run test:coverage
```

To compile and run the program use:
```
npm run start:dev
```

To lint, format, test, compile and run the program use:
```
npm run start:all
```