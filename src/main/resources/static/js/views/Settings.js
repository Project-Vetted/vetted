import createView from "../createView.js";
import {BASE_URL} from "../keys.js";

export default function Settings(props) {
    //language=HTML
    return `
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }

            body {
                background: linear-gradient(90deg, #C7C5F4, #776BCC);
            }

            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 20vh;
            }

            .login-screen {
                height: 600px;
                width: 360px;
                position: relative;
                background: linear-gradient(90deg, #5D54A4, #7C78B8);
                box-shadow: 0px 0px 24px #5C5696;
                cursor: crosshair;
            }

            .screen-content {
                position: relative;
                height: 100%;
                z-index: 1;
            }

            .login-background {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 0;
                -webkit-clip-path: inset(0 0 0 0);
                clip-path: inset(0 0 0 0);
            }

            .screen-background-shapes {
                position: absolute;
                transform: rotate(45deg);
            }

            .background-shape1 {
                height: 520px;
                width: 520px;
                background: #FFF;
                top: -50px;
                right: 120px;
                border-radius: 0 72px 0 0;
            }

            .background-shape2 {
                height: 220px;
                width: 220px;
                background: #6C63AC;
                top: -172px;
                right: 0;
                border-radius: 32px;
            }

            .background-shape3 {
                height: 540px;
                width: 190px;
                background: linear-gradient(270deg, #5D54A4, #6A679E);
                top: -24px;
                right: 0;
                border-radius: 32px;
            }

            .background-shape4 {
                height: 400px;
                width: 200px;
                background: #7E7BB9;
                top: 420px;
                right: 50px;
                border-radius: 60px;
            }

            .login {
                width: 340px;
                padding: 30px;
                padding-top: 156px;
            }

            .login-field {
                position: relative;
                padding: 20px 0px;
            }

            .login-icon {
                position: absolute;
                top: 30px;
                color: #7875B5;
            }

            .login-input {
                width: 75%;
                border: none;
                border-bottom: 3px solid #350259;
                background: none;
                padding: 10px;
                padding-left: 24px;
                font-weight: 700;
                transition: .2s;
            }

            .login-input:active,
            .login-input:focus,
            .login-input:hover {
                outline: none;
                border-bottom-color: #6A679E;
            }

            .login-submit {
                background: #fff;
                font-size: 14px;
                margin-top: 30px;
                padding: 16px 20px;
                border-radius: 26px;
                border: 1px solid #D4D3E8;
                text-transform: uppercase;
                font-weight: 700;
                display: flex;
                align-items: center;
                width: 20%;
                color: #4C489D;
                box-shadow: 0px 2px 2px #5C5696;
                cursor: pointer;
                transition: .2s;
            }

            .login-submit:active,
            .login-submit:focus,
            .login-submit:hover {
                border-color: #6A679E;
                outline: none;
            }
        </style>

        <header class="container">
            <div style="margin-top: 80px">
                <h1>Account Information</h1>
                <h3>${props.user.username}</h3>
            </div>
        </header>
        <main class="">
            <form id="user-info-form" class="container">
                <div style="margin-top: 80px">
                    <label for="email">Current Email</label>
                    <input disabled id="email" name="email" type="email" value="${props.user.email}">

                    <label for="old-password">New Email</label>
                    <input id="new-email" name="old-email" type="email"
                           value="${props.user.email}"/>

                    <label for="new-password">New Password</label>
                    <input id="new-password" name="new-password" type="password"
                           value=""/>

                    <label for="confirm-password">Confirm New Password</label>
                    <input id="confirm-password" name="confirm-password" type="password"
                           value=""/>

                    <button id="change-email-button" data-id="${props.user.id}" type="button" class="login-submit">
                        Change Email
                    </button>

                    <button id="change-password-button" data-id="${props.user.id}" type="button" class="login-submit">
                        Change Password
                    </button>

                    <button id="change-username-button" data-id="${props.user.id}" type="button" class="login-submit">
                        Randomize Username
                    </button>
                </div>
            </form>
        </main>
    `
}

export function UserSettingsEvent() {
    updateEmailListener();
    updatePasswordListener();
    updateUsernameListener();
}

function updatePasswordListener() {
    $(document).on('click', '#change-password-button', function (e) {

        e.preventDefault();

        const id = $(this).data("id");
        const newPassword = $("#new-password").val();
        const confirmPassword = $("#confirm-password").val();

        if (newPassword !== confirmPassword) {
            alert("The entered passwords do not match!");

        } else {
            const request = {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch(`${BASE_URL}/${id}/updatePassword?newPassword=${newPassword}`, request)
                .then(res => console.log(res.status))
                .catch(error => console.log(error))
                .finally(() => createView("/settings"))
        }
    })
}

function updateEmailListener() {
    $(document).on('click', '#change-email-button', function (e) {

        e.preventDefault();

        const id = $(this).data("id");
        const newEmail = $("#new-email").val();

        const request = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${BASE_URL}/${id}/updateEmail?newEmail=${newEmail}`, request)
            .then(res => console.log(res.status))
            .catch(error => console.log(error))
            .finally(() => createView("/login"))
    })
}

function updateUsernameListener() {

    $(document).on('click', '#change-username-button', function (e) {

        e.preventDefault();

        const id = $(this).data("id");
        const newUsername = generateRandomName();

        const request = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(`${BASE_URL}/${id}/updateUsername?newUsername=${newUsername}`, request)
            .then(res => console.log(res.status))
            .catch(error => console.log(error))
            .finally(() => createView("/settings"))
    })
}

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomName() {

    var verbs = ["accept", "add", "admire", "admit", "advise", "afford", "agree", "alert", "allow", "amuse", "analyse", "announce", "annoy", "answer", "apologise", "appear", "applaud", "appreciate", "approve", "argue", "arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", "attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bathe", "battle", "beam", "beg", "behave", "belong", "bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "breathe", "bruise", "brush", "bubble", "bump", "burn", "bury", "buzz", "calculate", "call", "camp", "care", "carry", "carve", "cause", "challenge", "change", "charge", "chase", "cheat", "check", "cheer", "chew", "choke", "chop", "claim", "clap", "clean", "clear", "clip", "close", "coach", "coil", "collect", "colour", "comb", "command", "communicate", "compare", "compete", "complain", "complete", "concentrate", "concern", "confess", "confuse", "connect", "consider", "consist", "contain", "continue", "copy", "correct", "cough", "count", "cover", "crack", "crash", "crawl", "cross", "crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", "dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", "depend", "describe", "desert", "deserve", "destroy", "detect", "develop", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", "double", "doubt", "drag", "drain", "dream", "dress", "drip", "drop", "drown", "drum", "dry", "dust", "earn", "educate", "embarrass", "employ", "empty", "encourage", "end", "enjoy", "enter", "entertain", "escape", "examine", "excite", "excuse", "exercise", "exist", "expand", "expect", "explain", "explode", "extend", "face", "fade", "fail", "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", "fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", "flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", "fry", "gather", "gaze", "glow", "glue", "grab", "grate", "grease", "greet", "grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "heat", "help", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "identify", "ignore", "imagine", "impress", "improve", "include", "increase", "influence", "inform", "inject", "injure", "instruct", "intend", "interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", "launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", "listen", "live", "load", "lock", "long", "look", "love", "man", "manage", "march", "mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorise", "mend", "mess up", "milk", "mine", "miss", "mix", "moan", "moor", "mourn", "move", "muddle", "mug", "multiply", "murder", "nail", "name", "need", "nest", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", "pass", "paste", "pat", "pause", "peck", "pedal", "peel", "peep", "perform", "permit", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practise", "pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", "provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", "race", "radiate", "rain", "raise", "reach", "realise", "receive", "recognise", "record", "reduce", "reflect", "refuse", "regret", "reign", "reject", "rejoice", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "rush", "sack", "sail", "satisfy", "save", "saw", "scare", "scatter", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", "share", "shave", "shelter", "shiver", "shock", "shop", "shrug", "sigh", "sign", "signal", "sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", "snatch", "sneeze", "sniff", "snore", "snow", "soak", "soothe", "sound", "spare", "spark", "sparkle", "spell", "spill", "spoil", "spot", "spray", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", "stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", "tap", "taste", "tease", "telephone", "tempt", "terrify", "test", "thank", "thaw", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", "trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", "unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", "wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "weigh", "welcome", "whine", "whip", "whirl", "whisper", "whistle", "wink", "wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "x-ray", "yawn", "yell", "zip", "zoom"];
    var animals = [
        "Aardvark",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant",
        "Coyote",
        "Crab",
        "Crane",
        "Crocodile",
        "Crow",
        "Curlew",
        "Deer",
        "Dinosaur",
        "Dog",
        "Dogfish",
        "Dolphin",
        "Dotterel",
        "Dove",
        "Dragonfly",
        "Duck",
        "Dugong",
        "Dunlin",
        "Eagle",
        "Echidna",
        "Eel",
        "Eland",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Finch",
        "Fish",
        "Flamingo",
        "Fly",
        "Fox",
        "Frog",
        "Gaur",
        "Gazelle",
        "Gerbil",
        "Giraffe",
        "Gnat",
        "Gnu",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Goshawk",
        "Grasshopper",
        "Grouse",
        "Guanaco",
        "Gull",
        "Hamster",
        "Hare",
        "Hawk",
        "Hedgehog",
        "Heron",
        "Herring",
        "Hippopotamus",
        "Hornet",
        "Horse",
        "Human",
        "Hummingbird",
        "Hyena",
        "Ibex",
        "Ibis",
        "Jackal",
        "Jaguar",
        "Jay",
        "Jellyfish",
        "Kangaroo",
        "Kingfisher",
        "Koala",
        "Kookabura",
        "Kouprey",
        "Kudu",
        "Lapwing",
        "Lark",
        "Lemur",
        "Leopard",
        "Lion",
        "Llama",
        "Lobster",
        "Locust",
        "Loris",
        "Louse",
        "Lyrebird",
        "Magpie",
        "Mallard",
        "Manatee",
        "Mandrill",
        "Mantis",
        "Marten",
        "Meerkat",
        "Mink",
        "Mole",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mosquito",
        "Mouse",
        "Mule",
        "Narwhal",
        "Newt",
        "Nightingale",
        "Octopus",
        "Okapi",
        "Opossum",
        "Oryx",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panther",
        "Parrot",
        "Partridge",
        "Peafowl",
        "Pelican",
        "Penguin",
        "Pheasant",
        "Pig",
        "Pigeon",
        "Pony",
        "Porcupine",
        "Porpoise",
        "Quail",
        "Quelea",
        "Quetzal",
        "Rabbit",
        "Raccoon",
        "Rail",
        "Ram",
        "Rat",
        "Raven",
        "Red deer",
        "Red panda",
        "Reindeer",
        "Rhinoceros",
        "Rook",
        "Salamander",
        "Salmon",
        "Sand Dollar",
        "Sandpiper",
        "Sardine",
        "Scorpion",
        "Seahorse",
        "Seal",
        "Shark",
        "Sheep",
        "Shrew",
        "Skunk",
        "Snail",
        "Snake",
        "Sparrow",
        "Spider",
        "Spoonbill",
        "Squid",
        "Squirrel",
        "Starling",
        "Stingray",
        "Stinkbug",
        "Stork",
        "Swallow",
        "Swan",
        "Tapir",
        "Tarsier",
        "Termite",
        "Tiger",
        "Toad",
        "Trout",
        "Turkey",
        "Turtle",
        "Viper",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Wasp",
        "Weasel",
        "Whale",
        "Wildcat",
        "Wolf",
        "Wolverine",
        "Wombat",
        "Woodcock",
        "Woodpecker",
        "Worm",
        "Wren",
        "Yak",
        "Zebra"
    ]

    var name = capFirst(verbs[getRandomInt(0, verbs.length + 1)]) + ' ' + capFirst(animals[getRandomInt(0, animals.length + 1)]);

    return name;
}