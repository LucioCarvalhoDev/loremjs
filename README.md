# Loremjs

*Loremjs is a simple tool to generate placeholder valid code, like lorem ipsum is for text.*

## Usage

For a fast look run with a `-p` flag and the output will be print on terminal
```
$ deno run --allow-read=./data --allow-write "https://raw.githubusercontent.com/LucioCarvalhoDev/loremjs/main/main.ts" -p
```

Run the script without any argument to be promted about settings

```
$ deno run --allow-read=./data --allow-write "https://raw.githubusercontent.com/LucioCarvalhoDev/loremjs/main/main.ts"
? Size of output (5) 
? Save output in a file? 
? print [Y/n] (y) 
? Number of tab spaces (4)

let chance = 0.426;
chance = "et" + "et" + "postmeridianam"
let rate = 0.392;
chance = "tuis"
if (chance > rate) {
    let title = "/[a-z]/";
    chance = "ad"
    let msg = "TAB";
}
```

## Flags

| Flag | Effect | Exemple
|----|---|----|
| `-S <file>` or `--save <file>` | saves output on `<file>` | `-S ./output.js`|
| `-p` or `--print` | in union with `-o`, forces print of output | `-p -S ./output.js` |
| `-s <number>` or `--size <number>` | define the `<number>` of elements generated | `-s 10`
| `-t <number>` or `--tab <number` | set the `<number>` of spaces used on indentation | `-t 2`
