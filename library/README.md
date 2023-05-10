<h1 align="center"><code>passwagen.js</code></h1>
<p align="center">Password generator with multiple options</p>

## ⚙️ Installation

```terminal
npm i passwagen
```

## 📖 Usage

#### ▣ Import

```js
// ES6
import passwagen from "passwagen";

// commonjs
const passwagen = require("passwagen");
```

#### ▣ Generate

```js
const password = passwagen();

console.log(password);
```

#### ▣ Generate with options for characters

```js
const password = passwagen({
    numbers: true,      // (Boolean) Include numbers
    uppercase: true,    // (Boolean) Include uppercase letters
    lowercase: true,    // (Boolean) Include lowercase letters
    symbols: true,      // (Boolean) Include symbols "!@#$%^&*()_+-="
    punctuation: true,  // (Boolean) Include punctuations "!@#$%^&*()_+~`|}{[]\:;?><,./-="
    characters: "abc"   // (String) Add characters that may also be used
});

console.log(password);
```

#### ▣ Generate with options for length and amount

```js
const password = passwagen({
    length: 10, // (Number) Length of password
    amount: 20  // (Number) Amount of passwords to generate
});

console.log(password);
```

If the amount is one (by default) then it will return a string otherwise it will return an array of strings.

#### ▣ Generate with strict mode

```js
const password = passwagen({
    strict: true // (Boolean)
});

console.log(password);
```

strict mode will make sure that the password uses atleast one character from each field (numbers, lowercase, etc.)

But for example, if punctuation is set to false (by default) strict mode won't make the password include punctuation.

#### ▣ Generate with custom character set

```js
const password = passwagen({
    characters: "abc",  // (String)
    custom: true        // (Boolean)
});

console.log(password);
```

Setting `custom` to true will make it use only the characters that you provide.

---

[Support me on Patreon](https://www.patreon.com/axorax) - 
[Check out my socials](https://github.com/axorax/socials)