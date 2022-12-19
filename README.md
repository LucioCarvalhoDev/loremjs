# Loremjs

*Loremjs is a simple tool to generate placeholder valid code, like lorem ipsum is for text.*

## Usage

Run scripts from web on command line:
```
$ deno run --allow-read=./data --allow-write "https://raw.githubusercontent.com/LucioCarvalhoDev/loremjs/main/main.ts"
```
```
let minValue = 95;
let text = "\n";
if (text != text.toUpperCase()) {
	let text = "\n";
	let homeDir = "../quae/possit/eodem/optatius/eges:/facilis";
	text = text.trim() + text.trim()
}
if (minValue != minValue) {
	let name = "\n";
	text = text.toLowerCase() + text.toLowerCase() + text.toLowerCase()
	if (minValue < minValue + 19 / 10) {
		let text = "\n";
		text = text + text.toLowerCase()
		if (text != text.toUpperCase() + text + text) {
			let id = "b12-61";
			text = text
			text = text + text + text.toUpperCase()
		}
	}
}
```

## Flags

| Flag | Effect | Exemple
|----|---|----|
| `-o <file>` or `--output <file>` | saves output on `<file>` | `-o ./output.js`|
| `-p` or `--print` | in union with `-o`, forces print of output | `-p -o ./output.js` |
| `-s <number>` or `--size <number>` | define the `<number>` of elements generated | `-s 10`
| `-t <number>` or `--tab <number` | set the `<number>` of spaces used on indentation | `-t 2`
