try {
    let index = 18; // any
    let score = 97; // any
    let fileLocation = "/virtutibus/expetenda/in/vitam/intercesserint/coniectura"; // path
    index = fileLocation.trim();
    fileLocation = fileLocation.toUpperCase();
    let id = 19; // any
    score = fileLocation.trim() + index.toUpperCase();

} catch (err) {
    Deno.exit(1);
}