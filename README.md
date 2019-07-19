# Installation / Setup 

Run `npm install` 
add `appconfig.js` in root directory 
go to https://open-platform.theguardian.com/documentation/ to create account and get a key
then in appconfig.js, add 
```
function config() {
  return {
    guardian: "your key"
  }
}

module.exports = config;
```
And replace `your key` with the key from the `guardian`


# Running code

__Note: examples in Jest101 directory are not configured with babel, so using node commands (`node whateverfile.js`) and will throw error because of ES6 export/import syntax__

To run vue app: `npm run dev`

# Running tests

Jest configuration is located in `jest.config.js` in root directory

package.json has several commands pre-configured to run different tests
