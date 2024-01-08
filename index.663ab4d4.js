const input = {
    keys: {},
    mouse: {}
};
const game = {};
const CP_437 = [
    " ",
    "\u263A",
    "\u263B",
    "\u2665",
    "\u2666",
    "\u2663",
    "\u2660",
    "\u2022",
    "\u25D8",
    "\u25CB",
    "\u25D9",
    "\u2642",
    "\u2640",
    "\u266A",
    "\u266B",
    "\u263C",
    "\u25BA",
    "\u25C4",
    "\u2195",
    "\u203C",
    "\xb6",
    "\xa7",
    "\u25AC",
    "\u21A8",
    "\u2191",
    "\u2193",
    "\u2192",
    "\u2190",
    "\u221F",
    "\u2194",
    "\u25B2",
    "\u25BC",
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "{",
    "|",
    "}",
    "~",
    "\u2302",
    "\xc7",
    "\xfc",
    "\xe9",
    "\xe2",
    "\xe4",
    "\xe0",
    "\xe5",
    "\xe7",
    "\xea",
    "\xeb",
    "\xe8",
    "\xef",
    "\xee",
    "\xec",
    "\xc4",
    "\xc5",
    "\xc9",
    "\xe6",
    "\xc6",
    "\xf4",
    "\xf6",
    "\xf2",
    "\xfb",
    "\xf9",
    "\xff",
    "\xd6",
    "\xdc",
    "\xa2",
    "\xa3",
    "\xa5",
    "\u20A7",
    "\u0192",
    "\xe1",
    "\xed",
    "\xf3",
    "\xfa",
    "\xf1",
    "\xd1",
    "\xaa",
    "\xba",
    "\xbf",
    "\u2310",
    "\xac",
    "\xbd",
    "\xbc",
    "\xa1",
    "\xab",
    "\xbb",
    "\u2591",
    "\u2592",
    "\u2593",
    "\u2502",
    "\u2524",
    "\u2561",
    "\u2562",
    "\u2556",
    "\u2555",
    "\u2563",
    "\u2551",
    "\u2557",
    "\u255D",
    "\u255C",
    "\u255B",
    "\u2510",
    "\u2514",
    "\u2534",
    "\u252C",
    "\u251C",
    "\u2500",
    "\u253C",
    "\u255E",
    "\u255F",
    "\u255A",
    "\u2554",
    "\u2569",
    "\u2566",
    "\u2560",
    "\u2550",
    "\u256C",
    "\u2567",
    "\u2568",
    "\u2564",
    "\u2565",
    "\u2559",
    "\u2558",
    "\u2552",
    "\u2553",
    "\u256B",
    "\u256A",
    "\u2518",
    "\u250C",
    "\u2588",
    "\u2584",
    "\u258C",
    "\u2590",
    "\u2580",
    "\u03B1",
    "\xdf",
    "\u0393",
    "\u03C0",
    "\u03A3",
    "\u03C3",
    "\xb5",
    "\u03C4",
    "\u03A6",
    "\u0398",
    "\u03A9",
    "\u03B4",
    "\u221E",
    "\u03C6",
    "\u03B5",
    "\u2229",
    "\u2261",
    "\xb1",
    "\u2265",
    "\u2264",
    "\u2320",
    "\u2321",
    "\xf7",
    "\u2248",
    "\xb0",
    "\u2219",
    "\xb7",
    "\u221A",
    "\u207F",
    "\xb2",
    "\u25A0",
    " "
];
const COLORS = [
    "#ff0040",
    "#131313",
    "#1b1b1b",
    "#272727",
    "#3d3d3d",
    "#5d5d5d",
    "#858585",
    "#b4b4b4",
    "#ffffff",
    "#c7cfdd",
    "#92a1b9",
    "#657392",
    "#424c6e",
    "#2a2f4e",
    "#1a1932",
    "#0e071b",
    "#1c121c",
    "#391f21",
    "#5d2c28",
    "#8a4836",
    "#bf6f4a",
    "#e69c69",
    "#f6ca9f",
    "#f9e6cf",
    "#edab50",
    "#e07438",
    "#c64524",
    "#8e251d",
    "#ff5000",
    "#ed7614",
    "#ffa214",
    "#ffc825",
    "#ffeb57",
    "#d3fc7e",
    "#99e65f",
    "#5ac54f",
    "#33984b",
    "#1e6f50",
    "#134c4c",
    "#0c2e44",
    "#00396d",
    "#0069aa",
    "#0098dc",
    "#00cdf9",
    "#0cf1ff",
    "#94fdff",
    "#fdd2ed",
    "#f389f5",
    "#db3ffd",
    "#7a09fa",
    "#3003d9",
    "#0c0293",
    "#03193f",
    "#3b1443",
    "#622461",
    "#93388f",
    "#ca52c9",
    "#c85086",
    "#f68187",
    "#f5555d",
    "#ea323c",
    "#c42430",
    "#891e2b",
    "#571c27"
];
let Fonts = {};
let tick = 0;
const EDITOR = new URLSearchParams(window.location.search).get("editor") != null;
function preload() {
    Fonts = {
        pixel: loadFont("/static/font/PxPlus_IBM_EGA_8x8.ttf"),
        regular: loadFont("/static/font/LibreFranklin-Regular.ttf"),
        bold: loadFont("/static/font/LibreFranklin-Bold.ttf")
    };
}
function setup() {
    createCanvas();
    windowResized();
    textFont(Fonts.pixel);
    textSize(16);
    if (EDITOR) document.getElementById("editor").style.display = "block";
    game.world = new World();
    const naturalItems = REGISTRY.items.filter((item)=>item.tags.includes("natural")).map((item)=>item.id);
    const totalWeight = naturalItems.reduce((acc, id)=>acc + (REGISTRY.getItem(id).properties.weight ?? 1), 0);
    for(let i = 0; i < game.world.size * game.world.size / 16; i += 1){
        const x = floor(random(game.world.size));
        const y = floor(random(game.world.size));
        if (x < 4 || x > game.world.size - 4 || y < 4 || y > game.world.size - 4) continue;
        const w = random(totalWeight);
        let acc = 0;
        let item = null;
        for (const id of naturalItems){
            acc += REGISTRY.getItem(id).properties.weight ?? 1;
            if (acc >= w) {
                item = id;
                break;
            }
        }
        item = item || naturalItems[naturalItems.length - 1];
        game.world.set(x, y, new ItemState(item));
    }
    game.world.set(floor(game.world.size / 2), floor(game.world.size) / 2, new ItemState(57));
    game.camera = {
        x: 0,
        y: 0
    };
    game.people = [];
    game.groups = [];
    for(let i = 0; i < 5; i += 1){
        const group = generateGroup(0, game.world);
        game.groups.push(group[0].surname);
        game.people.push(...group);
    }
    assignReputations(game.people);
    game.acc = 0;
    game.worldMouseX = 0;
    game.worldMouseX = 0;
    game.mouseIndex = 0;
    game.tick = 0;
    game.selectedPerson = "";
    game.peopleGraph = new Array(50).fill(game.people.length);
    game.itemsCrafted = {};
    game.foodEaten = {};
    game.deepestItem = 0;
    game.deepestItemDepth = 0;
    game.deepestItemCredit = "";
    game.skip = 0;
    game.temp = 0;
    game.extraInfo = false;
    game.renderData = {};
// game.people = [ game.people[0] ];
// game.people[0].x = 49;
// game.people[0].y = 49;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function keyPressed() {
    input.keys[keyCode] = 0;
}
function keyReleased() {
    input.keys[keyCode] = -1;
}
function mousePressed() {
    input.mouse[mouseButton] = 0;
}
function mouseReleased() {
    input.mouse[mouseButton] = -1;
}
function updateInput() {
    for(let key in input.keys)if (input.keys[key] >= 0) input.keys[key] += 1;
    for(let button in input.mouse)if (input.mouse[button] >= 0) input.mouse[button] += 1;
}
function isWithin(tx, ty, x, y, w, h) {
    return tx >= x && tx <= x + w && ty >= y && ty <= y + h;
}
function mouseIsWithin(x, y, w, h) {
    return isWithin(mouseX, mouseY, x, y, w, h);
}
function runTick() {
    game.temp = sin(game.tick / 172800 * TWO_PI) * 10 - 5 - cos(game.tick / 1440 * TWO_PI) * 2;
    game.world.update(game.temp);
    for (const { item, x, y } of game.world.active()){
        const timed = item.item.usedIn.find((use)=>use.time);
        if (timed) {
            if (timed.willOccur(item, null, game.tick * 60)) {
                console.log("occured");
                const [result] = timed.getResults(item, null, Math.random());
                result.time = game.tick * 60;
                game.world.set(x, y, result);
                freeChunk(floor(x / CHUNK_SIZE) + floor(y / CHUNK_SIZE) * WORLD_SIZE);
            }
        }
    }
    for (const person of game.people)person.update(game.world, game.temp);
    for (const person of game.people)if (person.health <= 0) {
        game.world.set(person.x, person.y, new ItemState(86)); // grave
        freeChunk(floor(person.x / CHUNK_SIZE) + floor(person.y / CHUNK_SIZE) * WORLD_SIZE);
    }
    game.people = game.people.filter((person)=>person.health > 0);
    for (const person of game.people)person.think(game.world, game.people, game.tick * 60);
    let actions = {};
    for (const person of game.people){
        const action = person.act();
        if (action) actions[person.id] = action;
    }
    for (const person of game.people){
        const action = actions[person.id];
        if (action.type === "move") {
            const newX = person.x + (action.data.direction === 4 ? 1 : 0) + (action.data.direction === 2 ? -1 : 0);
            const newY = person.y + (action.data.direction === 3 ? 1 : 0) + (action.data.direction === 1 ? -1 : 0);
            if (newX < 0 || newX >= game.world.size || newY < 0 || newY >= game.world.size) continue;
            if (game.world.get(newX, newY) && game.world.get(newX, newY).item.tags.includes("blocking")) continue;
            if (game.people.find((p)=>p.x === newX && p.y === newY)) continue;
            person.x = newX;
            person.y = newY;
        } else if (action.type === "eat") {
            if (person.holding != null) {
                const item = person.holding.item;
                if (item.tags.includes("edible")) {
                    game.foodEaten[item.id] = (game.foodEaten[item.id] || 0) + 1;
                    person.hunger += item.properties["food"] || 0;
                    person.score += item.properties["food"] || 0;
                    person.holding = item.properties["leftovers"] ? new ItemState(item.properties["leftovers"]) : null;
                }
            }
        } else if (action.type === "interact") {
            const prev = game.world.get(person.x, person.y);
            let intX = person.x + (action.data.direction === 4 ? 1 : 0) + (action.data.direction === 2 ? -1 : 0);
            let intY = person.y + (action.data.direction === 3 ? 1 : 0) + (action.data.direction === 1 ? -1 : 0);
            if (person.holding === null && game.world.get(intX, intY) != null) {
                const item = game.world.get(intX, intY).item;
                if (!item.tags.includes("static")) {
                    person.holding = game.world.get(intX, intY);
                    game.world.set(intX, intY, null);
                    freeChunk(floor(intX / CHUNK_SIZE) + floor(intY / CHUNK_SIZE) * WORLD_SIZE);
                } else if (item.usedIn.find((use)=>!use.actor)) {
                    const recipe = item.usedIn.find((use)=>!use.actor);
                    const [origin, actor] = recipe.getResults(game.world.get(intX, intY), null, Math.random());
                    game.world.set(intX, intY, origin);
                    freeChunk(floor(intX / CHUNK_SIZE) + floor(intY / CHUNK_SIZE) * WORLD_SIZE);
                    person.holding = actor;
                    if (game.world.get(intX, intY)) {
                        game.world.get(intX, intY).time = game.tick * 60;
                        if (prev && origin.id !== prev.id) person.addItemToMemory(game.world, intX, intY, game.tick * 60);
                    }
                }
            } else if (person.holding != null && game.world.get(intX, intY) == null) {
                game.world.set(intX, intY, person.holding);
                freeChunk(floor(intX / CHUNK_SIZE) + floor(intY / CHUNK_SIZE) * WORLD_SIZE);
                game.world.get(intX, intY).time = game.tick * 60;
                person.holding = null;
            } else if (person.holding != null && game.world.get(intX, intY) != null) {
                const item = game.world.get(intX, intY).item;
                for (const recipe of item.usedIn)if (recipe.willOccur(game.world.get(intX, intY), person.holding, game.tick * 60)) {
                    const [origin, actor] = recipe.getResults(game.world.get(intX, intY), person.holding, Math.random());
                    game.world.set(intX, intY, origin);
                    freeChunk(floor(intX / CHUNK_SIZE) + floor(intY / CHUNK_SIZE) * WORLD_SIZE);
                    person.holding = actor;
                    if (game.world.get(intX, intY)) {
                        game.world.get(intX, intY).time = game.tick * 60;
                        if (prev && origin.id !== prev.id) person.addItemToMemory(game.world, intX, intY, game.tick * 60);
                    }
                    break;
                }
            }
            const runChecks = (item)=>{
                if (item.item.tags.includes("important")) person.score += item.item.depth() ** 2 * 10;
                console.log(item.item.name, item.item.depth());
                if (item.item.depth() > game.deepestItemDepth) {
                    game.deepestItem = item.id;
                    game.deepestItemDepth = item.item.depth();
                    game.deepestItemCredit = person.fullName;
                }
                game.itemsCrafted[item.item.id] = (game.itemsCrafted[item.item.id] || 0) + 1;
            };
            game.world.get(intX, intY) && game.world.get(intX, intY).id !== 0 && runChecks(game.world.get(intX, intY));
            person.holding && person.holding.id !== 0 && runChecks(person.holding);
        }
    }
    game.tick += 1;
    if (game.tick % 60 === 0) {
        game.peopleGraph.shift();
        game.peopleGraph.push(game.people.length);
    }
}
function update() {
    game.time = {
        minute: game.tick % 60,
        hour: floor(game.tick / 60) % 24,
        day: floor(game.tick / 60 / 24) % 30,
        month: floor(game.tick / 60 / 24 / 30) % 4,
        year: floor(game.tick / 60 / 24 / 30 / 4) + 1000
    };
    if (mouseIsWithin(0, 0, 800, 800)) {
        game.worldMouseX = floor(mouseX / 16) + game.camera.x;
        game.worldMouseY = floor(mouseY / 16) + game.camera.y;
    }
    if (input.keys[LEFT_ARROW] > 0) game.camera.x -= 1;
    if (input.keys[RIGHT_ARROW] > 0) game.camera.x += 1;
    if (input.keys[UP_ARROW] > 0) game.camera.y -= 1;
    if (input.keys[DOWN_ARROW] > 0) game.camera.y += 1;
    if (input.keys["Q".charCodeAt(0)] === 1) game.extraInfo = !game.extraInfo;
    if (input.keys["P".charCodeAt(0)] > 0) game.skip = 1440; // skip ahead 1 day
    if (input.keys["O".charCodeAt(0)] > 0) game.skip = 10080; // skip ahead 1 week
    if (input.keys["I".charCodeAt(0)] > 0) game.skip = 43200; // skip ahead 1 month
    if (input.keys["U".charCodeAt(0)] > 0) game.skip = 172800; // skip ahead 1 year
    if (game.skip > 0) {
        const start = millis();
        let i = 0;
        while(game.skip > 0 && millis() - start < 100){
            runTick();
            game.skip -= 1;
            i += 1;
        }
        game.tps = i / ((millis() - start) / 1000);
        return;
    }
    let dt = frameRate() > 0 ? 1 / frameRate() : 0;
    game.acc += dt * 2 * (input.keys["T".charCodeAt(0)] > 0 ? 100 : 1);
    game.acc = min(game.acc, 200);
    while(game.acc > 1){
        game.acc -= 1;
        runTick();
    }
    for (const person of game.people){
        if (mouseIsWithin(0, 0, 800, 800)) {
            if (person.x === game.worldMouseX && person.y === game.worldMouseY) game.selectedPerson = person.id;
        }
    }
}
function drawItem(display, x, y, to = window) {
    if (display.length === 0) return;
    const disp = display[tick % display.length];
    const { character, color } = disp;
    to.fill(COLORS[color]);
    to.textFont(Fonts.pixel);
    to.text(CP_437[character], x, y);
}
function drawNiceItem(display, x, y, size = 16) {
    textAlign(LEFT, TOP);
    textSize(size);
    stroke(30);
    fill(20);
    rect(x, y, size, size);
    noStroke();
    drawItem(display, x, y);
}
function drawNiceNoun(noun, x, y, size = 16) {
    let message = "";
    textAlign(LEFT, TOP);
    switch(noun.type){
        case "person":
            const person = game.people.find((person)=>person.id === noun.data.id);
            drawNiceItem((person || REGISTRY.getItem(86)).display, x, y, size);
            message = person ? person.fullName : "dead";
            break;
        case "place":
            stroke(30);
            fill(20);
            rect(x, y, size, size);
            noFill();
            stroke(255);
            const miniX = x + map(noun.data.x, 0, game.world.size, 0, size);
            const miniY = y + map(noun.data.y, 0, game.world.size, 0, size);
            line(miniX - 1, miniY - 1, miniX + 1, miniY + 1);
            line(miniX - 1, miniY + 1, miniX + 1, miniY - 1);
            message = `${noun.data.x}, ${noun.data.y}`;
            break;
        case "thing":
            const query = REGISTRY.query(noun.data.selector);
            let display = query.map((id)=>REGISTRY.getItem(id).display).flat();
            if (display.length === 0) display = REGISTRY.getItem(0).display;
            drawNiceItem(display, x, y, size);
            message = query.map((id)=>REGISTRY.getItem(id).name).join(", ");
            break;
    }
    if (mouseIsWithin(x, y, size, size)) {
        textFont(Fonts.regular);
        const w = min(textWidth(message), 300);
        textAlign(CENTER, BOTTOM);
        textSize(16);
        stroke(255);
        fill(0);
        rect(x - w / 2 - 10, y - 50, w + 20, 40);
        fill(255);
        noStroke();
        text(message, x, y - 20);
        textAlign(LEFT, TOP);
    }
}
function drawMemory(memory, x, y) {
    noStroke();
    switch(memory.type){
        case "exists":
            drawNiceNoun(memory.data.noun, x, y);
            textFont(Fonts.regular);
            fill(255);
            text("exists", x + 20, y);
            break;
        case "location":
            drawNiceNoun(memory.data.noun, x, y);
            textFont(Fonts.regular);
            fill(255);
            text("is at", x + 20, y);
            drawNiceNoun({
                type: "place",
                data: {
                    x: memory.data.x,
                    y: memory.data.y
                }
            }, x + 55, y);
            break;
        case "personKnows":
            drawNiceNoun(memory.data.person, x, y);
            textFont(Fonts.regular);
            fill(255);
            text("knows", x + 20, y);
            drawMemory(memory.data.memory, x + 50, y);
            break;
    }
}
function drawObjective(objective, x, y) {
    noStroke();
    textAlign(LEFT, TOP);
    textSize(16);
    textFont(Fonts.regular);
    fill(255);
    switch(objective.type){
        case "fulfillNeed":
            text(objective.data.need, x, y);
            break;
        case "obtain":
            text("obtain", x, y);
            drawNiceNoun(objective.data.noun, x + 60, y);
            if (objective.data.another) {
                textFont(Fonts.bold);
                text("(another)", x + 80, y);
            }
            break;
    }
}
function jumpToPerson(person) {
    game.camera.x = person.x - 25;
    game.camera.y = person.y - 25;
    game.selectedPerson = person.id;
}
function freeChunk(index) {
    if (game.renderData[index]) {
        game.renderData[index].static.remove();
        delete game.renderData[index];
    }
}
function drawStaticChunk(chunk) {
    const graphics = createGraphics(CHUNK_SIZE * 16, CHUNK_SIZE * 16);
    graphics.textSize(16);
    graphics.textAlign(LEFT, TOP);
    for(let x = 0; x < CHUNK_SIZE; x += 1)for(let y = 0; y < CHUNK_SIZE; y += 1){
        const item = chunk.items[x + y * CHUNK_SIZE];
        if (item && item.item.display.length === 1) drawItem(item.item.display, x * 16, y * 16, graphics);
    }
    return graphics;
}
function mod(n, m) {
    return (n % m + m) % m;
}
function draw() {
    tick = floor(millis() / 500);
    if (EDITOR) {
        updateInput();
        drawEditor();
        return;
    }
    update();
    updateInput();
    background(0);
    textSize(16);
    fill(255);
    textAlign(LEFT, TOP);
    textFont(Fonts.regular);
    if (game.skip > 0) {
        text("Skipping ahead... ticks: " + game.skip, 10, 10);
        text("tps: " + game.tps, 10, 30);
        text("people left: " + game.people.length, 10, 50);
        if (input.keys[ESCAPE] > 0) game.skip = 0;
        return;
    }
    noStroke();
    fill(10);
    rect(0, 0, 800, 800);
    fill(10);
    textAlign(LEFT, TOP);
    for(let x = 0; x < 50; x += 1)for(let y = 0; y < 50; y += 1){
        const cx = x + game.camera.x;
        const cy = y + game.camera.y;
        if (cx < 0 || cx >= game.world.size || cy < 0 || cy >= game.world.size) continue;
        const item = game.world.get(cx, cy);
        if (item != null && item.item.tags.includes("heatSource")) {
            stroke(255, 63, 0, 200);
            fill(255, 63, 0, 40);
            noStroke();
            ellipse((x + 0.5) * 16, (y + 0.5) * 16, 16 * item.item.properties.heat, 16 * item.item.properties.heat);
        }
    }
    stroke(30);
    beginShape(LINES);
    for(let i = 0; i < 50; i += 1){
        if (i + game.camera.x >= 0 && i + game.camera.x <= game.world.size) {
            vertex(i * 16, 0);
            vertex(i * 16, 800);
        }
        if (i + game.camera.y >= 0 && i + game.camera.y <= game.world.size) {
            vertex(0, i * 16);
            vertex(800, i * 16);
        }
    }
    stroke(50);
    for(let i = 0; i < 50; i += 1){
        if ((i + game.camera.x) % 10 === 0 && i + game.camera.x >= 0 && i + game.camera.x <= game.world.size) {
            vertex(i * 16, 0);
            vertex(i * 16, 800);
        }
        if ((i + game.camera.y) % 10 === 0 && i + game.camera.y >= 0 && i + game.camera.y <= game.world.size) {
            vertex(0, i * 16);
            vertex(800, i * 16);
        }
    }
    endShape();
    noFill();
    rect(0, 0, 800, 800);
    for(let x = 0; x <= 50 / CHUNK_SIZE; x += 1)for(let y = 0; y <= 50 / CHUNK_SIZE; y += 1){
        const cx = x + floor(game.camera.x / CHUNK_SIZE);
        const cy = y + floor(game.camera.y / CHUNK_SIZE);
        if (cx < 0 || cx >= WORLD_SIZE || cy < 0 || cy >= WORLD_SIZE) continue;
        const index = cx + cy * WORLD_SIZE;
        if (!game.renderData[index]) game.renderData[index] = {
            static: drawStaticChunk(game.world.chunks[index]),
            dynamic: Object.entries(game.world.chunks[index].items).filter(([i, item])=>item && item.item.display.length > 1).map(([i, item])=>({
                    x: i % CHUNK_SIZE * 16,
                    y: floor(i / CHUNK_SIZE) * 16,
                    item
                }))
        };
        if (game.renderData[index]) {
            image(game.renderData[index].static, x * CHUNK_SIZE * 16 - mod(game.camera.x, CHUNK_SIZE) * 16, y * CHUNK_SIZE * 16 - mod(game.camera.y, CHUNK_SIZE) * 16);
            noStroke();
            for (const { x: dx, y: dy, item } of game.renderData[index].dynamic)drawItem(item.item.display, x * CHUNK_SIZE * 16 - mod(game.camera.x, CHUNK_SIZE) * 16 + dx, y * CHUNK_SIZE * 16 - mod(game.camera.y, CHUNK_SIZE) * 16 + dy);
        }
    }
    for(const index in game.renderData){
        const x = index % WORLD_SIZE;
        const y = floor(index / WORLD_SIZE);
        if (x < floor(game.camera.x / CHUNK_SIZE) - 4 || x > floor((game.camera.x + 50) / CHUNK_SIZE) + 4 || y < floor(game.camera.y / CHUNK_SIZE) - 4 || y > floor((game.camera.y + 50) / CHUNK_SIZE) + 4) freeChunk(index);
    }
    for (const person of game.people)if (person.x > game.camera.x && person.x < game.camera.x + 50 && person.y > game.camera.y && person.y < game.camera.y + 50) {
        noFill();
        stroke(COLORS[person.altColor]);
        rect((person.x - game.camera.x) * 16 - 2, (person.y - game.camera.y) * 16 - 2, 20, 20);
        noStroke();
        drawItem(person.display, (person.x - game.camera.x) * 16, (person.y - game.camera.y) * 16);
    }
    stroke(255);
    fill(0);
    rect(810, 10, 200, 100);
    stroke(100);
    noFill();
    beginShape();
    const peopleGraphMax = max(...game.peopleGraph);
    for(let i = 0; i < game.peopleGraph.length; i += 1){
        const x = 820 + map(i, 0, game.peopleGraph.length - 1, 0, 100);
        const y = 110 - map(game.peopleGraph[i], 0, peopleGraphMax, 0, 30);
        vertex(x, y);
    }
    endShape();
    noStroke();
    fill(0);
    rect(0, 800, width, height - 800);
    rect(800, 0, width - 800, height);
    textFont(Fonts.regular);
    textSize(16);
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text(`${nf(game.time.hour, 2, 0)}:${nf(game.time.minute, 2, 0)}`, 820, 20);
    text(`${game.time.day + 1} ${[
        "Spring",
        "Summer",
        "Autumn",
        "Winter"
    ][game.time.month]}, Year ${game.time.year}`, 820, 40);
    text(`${game.people.length} people`, 820, 60);
    stroke(255);
    noFill();
    line(990, 20, 1000, 20);
    line(990, 100, 1000, 100);
    line(1000, 20, 1000, 100);
    const zeroY = map(0, -15, 5, 100, 20);
    line(990, zeroY, 1000, zeroY);
    const tempY = map(game.temp, -15, 5, 100, 20);
    if (tempY > zeroY) fill(0, 0, 255);
    else fill(255, 0, 0);
    noStroke();
    rect(990, tempY, 10, zeroY - tempY);
    textAlign(RIGHT, TOP);
    text(`${nf(game.temp, 1, 1)}`, 985, 90);
    if (mouseIsWithin(0, 0, 800, 800)) {
        const x = floor(mouseX / 16);
        const y = floor(mouseY / 16);
        noFill();
        stroke(255);
        rect(x * 16, y * 16, 16, 16);
        if (game.worldMouseX >= 0 && game.worldMouseY >= 0 && game.worldMouseX < game.world.size && game.worldMouseY < game.world.size) {
            const item = game.world.get(game.worldMouseX, game.worldMouseY);
            if (item) {
                stroke(255);
                fill(0);
                rect(810, 120, 200, 300);
                drawNiceItem(item.item.display, 820, 130, 64);
                textFont(Fonts.bold);
                textSize(16);
                fill(255);
                textAlign(LEFT, TOP);
                text(item.item.name, 820, 200);
                textSize(32);
                text(item.item.id, 890, 130);
                textSize(16);
                const age = game.tick * 60 - item.time;
                textFont(Fonts.regular);
                text(`Value: ${item.value}`, 820, 220);
                text(`Age: ${age / 60} ticks`, 820, 240);
                const usedIn = item.item.usedIn;
                const timed = usedIn.find((use)=>use.time);
                if (timed) {
                    fill(255);
                    noStroke();
                    rect(820, 260, map(age, 0, timed.time, 0, 140), 10);
                    stroke(255);
                    noFill();
                    rect(820, 260, 140, 10);
                    fill(255);
                    noStroke();
                    if (timed.results.length > 2 || timed.results.length === 0) text("?", 970, 255);
                    else {
                        const result = Recipe.getResult(item, timed.results[0].origin);
                        if (result) drawItem(result.item.display, 970, 257);
                        else text("?", 970, 255);
                    }
                }
                let y = 0;
                for (const recipe of usedIn){
                    if (recipe.time) continue;
                    drawNiceItem(REGISTRY.getItem(recipe.getAnOrigin()).display, 820, 282 + y * 20);
                    fill(255);
                    textFont(Fonts.bold);
                    if (recipe.actor) {
                        stroke(255);
                        noFill();
                        beginShape(LINES);
                        vertex(837, 290 + y * 20);
                        vertex(847, 290 + y * 20);
                        vertex(842, 285 + y * 20);
                        vertex(842, 295 + y * 20);
                        endShape();
                        drawNiceItem(REGISTRY.getItem(recipe.getAnActor()).display, 850, 282 + y * 20);
                    }
                    stroke(255);
                    noFill();
                    beginShape(LINES);
                    vertex(870, 290 + y * 20);
                    vertex(900, 290 + y * 20);
                    vertex(900, 290 + y * 20);
                    vertex(895, 295 + y * 20);
                    vertex(900, 290 + y * 20);
                    vertex(895, 285 + y * 20);
                    endShape();
                    let resIndex = 0;
                    for (const result of recipe.results){
                        const originResult = Recipe.getResult(new ItemState(recipe.getAnOrigin()), result.origin);
                        drawNiceItem(REGISTRY.getItem(originResult ? originResult.item.id : 0).display, 910, 282 + (y + resIndex) * 20);
                        if (result.actor.type === "SameItem" || result.actor.type === "NewItem") {
                            stroke(255);
                            noFill();
                            beginShape(LINES);
                            vertex(927, 290 + y * 20);
                            vertex(937, 290 + y * 20);
                            vertex(932, 285 + y * 20);
                            vertex(932, 295 + y * 20);
                            endShape();
                            const actorResult = Recipe.getResult(new ItemState(recipe.getAnActor()), result.actor);
                            drawNiceItem(REGISTRY.getItem(actorResult ? actorResult.item.id : 0).display, 940, 282 + (y + resIndex) * 20);
                        }
                    }
                    y += recipe.results.length;
                }
            } else {
                stroke(255);
                fill(0);
                rect(810, 120, 200, 50);
                textFont(Fonts.regular);
                textSize(16);
                fill(255);
                textAlign(LEFT, TOP);
                noStroke();
                text("None", 820, 135);
            }
        }
        const chunkX = floor(game.worldMouseX / CHUNK_SIZE);
        const chunkY = floor(game.worldMouseY / CHUNK_SIZE);
        if (chunkX >= 0 && chunkX < WORLD_SIZE && chunkY >= 0 && chunkY < WORLD_SIZE) {
            textAlign(RIGHT, TOP);
            fill(255);
            textSize(14);
            textFont(Fonts.bold);
            const heat = game.world.heat[chunkY * WORLD_SIZE + chunkX];
            text("Heat: " + nf(heat, 1, 2), 1000, 135);
            textSize(12);
            if (heat > game.temp) fill(255, 0, 0);
            else fill(0, 0, 255);
            text(nf(heat - game.temp, 1, 2), 1000, 150);
        }
    }
    textSize(16);
    if (!game.extraInfo) {
        textFont(Fonts.regular);
        fill(255);
        noStroke();
        textAlign(LEFT, TOP);
        text("Press Q for extra info", 820, 420);
        return;
    }
    stroke(255);
    noFill();
    rect(1020, 10, 200, 200);
    rect(1020, 220, 200, 200);
    rect(1020, 430, 510, 370);
    fill(255);
    noStroke();
    textFont(Fonts.bold);
    textAlign(LEFT, TOP);
    text("Groups", 1030, 20);
    text("Top", 1030, 230);
    text("Stats", 1030, 440);
    for(let i = 0; i < game.groups.length; i += 1){
        textAlign(LEFT, TOP);
        textFont(Fonts.regular);
        text(game.groups[i], 1030, 40 + i * 20);
        textFont(Fonts.bold);
        textAlign(RIGHT, TOP);
        text(game.people.reduce((acc, person)=>person.surname === game.groups[i] ? acc + 1 : acc, 0), 1210, 40 + i * 20);
        if (mouseIsWithin(1030, 40 + i * 20, 180, 20) && input.mouse[LEFT] === 1) jumpToPerson(game.people.find((person)=>person.surname === game.groups[i] && person.id !== game.selectedPerson));
    }
    const maxScore = game.people.reduce((acc, person)=>max(acc, person.score), 0);
    const topScorers = game.people.sort((a, b)=>b.score - a.score).slice(0, 5);
    for(let i = 0; i < topScorers.length; i += 1){
        const person = topScorers[i];
        fill(255);
        textAlign(LEFT, TOP);
        textFont(Fonts.regular);
        textSize(12);
        text(person.fullName, 1050, 250 + i * 30);
        textFont(Fonts.bold);
        textAlign(RIGHT, TOP);
        textSize(16);
        text(Math.round(person.score), 1210, 250 + i * 30);
        drawNiceItem(person.display, 1030, 250 + i * 30, 16);
        stroke(255);
        noFill();
        rect(1030, 270 + i * 30, 180, 5);
        noStroke();
        fill(255);
        rect(1030, 270 + i * 30, map(person.score, 0, maxScore, 0, 180), 5);
        if (mouseIsWithin(1030, 250 + i * 30, 180, 20) && input.mouse[LEFT] === 1) jumpToPerson(person);
    }
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(16);
    textFont(Fonts.bold);
    text("Deepest", 1030, 460);
    textFont(Fonts.regular);
    if (game.deepestItemDepth > 0) {
        drawNiceNoun({
            type: "thing",
            data: {
                selector: {
                    conditions: [
                        {
                            type: "Is",
                            data: game.deepestItem
                        }
                    ]
                }
            }
        }, 1100, 460);
        const person = game.people.find((person)=>person.fullName === game.deepestItemCredit);
        if (person) drawNiceNoun({
            type: "person",
            data: {
                id: person.id
            }
        }, 1120, 460);
        else {
            textFont(Fonts.regular);
            text("dead", 1080, 460);
        }
        textFont(Fonts.bold);
        fill(255);
        text(`(${game.deepestItemDepth})`, 1170, 460);
    } else text("none", 1100, 460);
    const topCrafters = Object.entries(game.itemsCrafted).sort((a, b)=>b[1] - a[1]).slice(0, 15);
    const mostCrafted = topCrafters.reduce((acc, [_, count])=>max(acc, count), 0);
    for(let i = 0; i < topCrafters.length; i += 1){
        const [id, count] = topCrafters[i];
        drawNiceNoun({
            type: "thing",
            data: {
                selector: {
                    conditions: [
                        {
                            type: "Is",
                            data: +id
                        }
                    ]
                }
            }
        }, 1030, 490 + i * 20);
        fill(255);
        textFont(Fonts.bold);
        textAlign(RIGHT, TOP);
        textSize(16);
        text(count, 1210, 490 + i * 20);
        stroke(255);
        noFill();
        rect(1050, 495 + i * 20, 120, 5);
        noStroke();
        fill(255);
        rect(1050, 495 + i * 20, map(count, 0, mostCrafted, 0, 120), 5);
    }
    textFont(Fonts.bold);
    textAlign(LEFT, TOP);
    text("Yummy Foods", 1230, 460);
    const topFoods = Object.entries(game.foodEaten).sort((a, b)=>b[1] - a[1]).slice(0, 15);
    const mostEaten = topFoods.reduce((acc, [_, count])=>max(acc, count), 0);
    for(let i = 0; i < topFoods.length; i += 1){
        const [id, count] = topFoods[i];
        drawNiceNoun({
            type: "thing",
            data: {
                selector: {
                    conditions: [
                        {
                            type: "Is",
                            data: +id
                        }
                    ]
                }
            }
        }, 1230, 490 + i * 20);
        fill(255);
        textFont(Fonts.bold);
        textAlign(RIGHT, TOP);
        textSize(16);
        text(count, 1410, 490 + i * 20);
        stroke(255);
        noFill();
        rect(1250, 495 + i * 20, 120, 5);
        noStroke();
        fill(255);
        rect(1250, 495 + i * 20, map(count, 0, mostEaten, 0, 120), 5);
    }
    const selected = game.people.find((person)=>person.id === game.selectedPerson);
    if (selected) {
        // draw view rectangle
        fill(255, 10);
        noStroke();
        rect(selected.x * 16 - game.camera.x * 16 - 144, selected.y * 16 - game.camera.y * 16 - 144, 304, 304);
        if (selected.short["goto"] != null) {
            stroke(255);
            noFill();
            ellipse((selected.short["goto"].x - game.camera.x) * 16 + 8, (selected.short["goto"].y - game.camera.y) * 16 + 8, 4, 4);
        }
        stroke(255);
        fill(0);
        rect(810, 430, 200, 300);
        noStroke();
        fill(255);
        drawNiceItem(selected.display, 820, 440, 64);
        textFont(Fonts.bold);
        textSize(16);
        fill(255);
        textAlign(LEFT, TOP);
        text(selected.name, 890, 440);
        fill(COLORS[selected.color]);
        text(selected.surname, 890, 460);
        textFont(Fonts.regular);
        fill(255);
        text(`Age: ${nf((game.tick - selected.born) / 4 / 30 / 24 / 60, 0, 4)} years`, 820, 510);
        fill(150, 0, 0);
        rect(820, 540, map(selected.health, 0, 100, 0, 140), 10);
        text(Math.round(selected.health), 970, 535);
        stroke(255);
        noFill();
        rect(820, 540, 140, 10);
        noStroke();
        fill(0, 150, 0);
        rect(820, 560, map(selected.hunger, 0, 100, 0, 140), 10);
        text(Math.round(selected.hunger), 970, 555);
        stroke(255);
        noFill();
        rect(820, 560, 140, 10);
        noStroke();
        fill(0, 0, 200);
        rect(820, 580, 30, 10);
        fill(0, 0, 100);
        rect(850, 580, 30, 10);
        fill(100, 0, 0);
        rect(900, 580, 30, 10);
        fill(200, 0, 0);
        rect(930, 580, 30, 10);
        stroke(255);
        noFill();
        rect(820, 580, 140, 10);
        let tempX = map(selected.temperature, -15, 15, 0, 1);
        noFill();
        stroke(tempX * 255, 0, tempX * -255 + 255);
        line(820 + tempX * 140, 580, 820 + tempX * 140, 590);
        triangle(820 + tempX * 140 - 5, 595, 820 + tempX * 140 + 5, 595, 820 + tempX * 140, 590);
        noStroke();
        fill(tempX * 255, 0, tempX * -255 + 255);
        text(Math.round(selected.temperature * 10) / 10, 970, 575);
        stroke(255);
        noFill();
        rect(820, 600, 140, 10);
        noStroke();
        colorMode(HSB, 255);
        fill(millis() / 10 % 255, 255, 255);
        text(Math.round(selected.score), 970, 595);
        rect(820, 600, map(selected.score, 0, maxScore, 0, 140), 10);
        colorMode(RGB);
        stroke(255);
        noFill();
        rect(820, 620, 140, 10);
        const totalNeeds = Object.values(selected.needs).reduce((acc, need)=>acc + need, 0);
        let x = 0;
        for(const need in selected.needs){
            const w = map(selected.needs[need], 0, totalNeeds, 0, 140);
            switch(need){
                case "hunger":
                    fill(0, 150, 0);
                    break;
                case "temperature":
                    fill(0, 0, 200);
                    break;
                case "health":
                    fill(150, 0, 0);
                    break;
                case "boredom":
                    fill(100);
                    break;
            }
            rect(820 + x, 620, w, 10);
            x += w;
        }
        stroke(255);
        fill(0);
        rect(1230, 10, 300, 410);
        textFont(Fonts.bold);
        textSize(16);
        fill(255);
        noStroke();
        textAlign(LEFT, TOP);
        text("Objectives", 1240, 20);
        let y = 0;
        for (const objective of selected.objectives){
            textAlign(LEFT, TOP);
            drawObjective(objective, 1250, 40 + y * 20);
            stroke(100);
            noFill();
            const children = objective.type === "obtain" ? objective.data.children : [];
            for (const child of children){
                const y2 = child;
                const mid = (y + y2) / 2;
                const diff = y2 - y - 1;
                bezier(1245, 50 + y * 20, 1240 - diff * 5, 50 + mid * 20, 1240 - diff * 5, 50 + mid * 20, 1245, 50 + y2 * 20);
            }
            y += 1;
            if (y >= 20) break;
        }
    } else {
        stroke(255);
        fill(0);
        rect(810, 430, 200, 50);
        noStroke();
        fill(255);
        textFont(Fonts.regular);
        textSize(16);
        textAlign(LEFT, TOP);
        text("None", 820, 445);
    }
}

//# sourceMappingURL=index.663ab4d4.js.map
