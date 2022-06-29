import createView from "../createView.js";
import {BASE_URL} from "../baseUrl.js";

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
                cursor: default;
            }

            body{
                display: flex;
                height: 100vh;
                justify-content: center;
                align-items: center;
                padding: 10px;
                background: linear-gradient(90deg, #C7C5F4, #776BCC);
            }

            .container{
                max-width: 700px;
                width: 100%;
                background: #fff;
                padding: 25px 30px;
                border-radius: 10px;
                box-shadow: 0 0 10px #D1BAFF;
            }

            .container .title{
                font-weight: 500;
                font-size: 25px;
                position: relative;
            }

            .container .title::before{
                position: absolute;
                content: '';
                left: 0;
                bottom: 0;
                height: 3px;
                width: 30px;
                background: linear-gradient(90deg, #C7C5F4, #776BCC);
            }

            .container form .user-details{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 20px 0 12px 0;
            }

            form .user-details .input-box{
                width: calc(100% / 2 - 20px);
                margin-bottom: 15px;
            }

            .user-details .input-box input{
                height: 45px;
                width: 100%;
                outline: none;
                border-radius: 5px;
                border: 1px solid #ccc;
                padding-left: 15px;
                font-size: 12px;
                border-bottom-width: 2px;
                transition: all 0.3s ease;
            }

            .user-details .input-box details{
                font-weight: 500;
                margin-bottom: 5px;
                display: block;
            }

            .user-details .input-box input:focus,
            .user-details .input-box input:valid{
                border-color: #776BCC;

            }

            form .check-categories{
                font-size: 16px;
                font-weight: 500;
                width: 80%;
                justify-content: space-between;
                margin: 16px;
            }

            form .button{
                height: 30px;
                margin: 45px 0;
            }

            form .button input{
                height: 80%;
                width: 100%;
                outline: none;
                color: #fff;
                border: none;
                background: linear-gradient(135deg, #C7C5F4, #776BCC);
                font-size:16px;
                font-weight: 300;
                border-radius: 5px;
                letter-spacing: 1px;
            }

            form . button input:hover{
                background: linear-gradient(-135deg, #C7C5F4, #776BCC);
            }

            @media (max-width: 584px){
                .container{
                    max-width: 100%;
                }
                form .user-details .input-box{
                    width: 100%;
                    margin-bottom: 15px;
                }
                form .check-categories{
                    width: 100%;
                }
                .container form .user-details{
                    max-height: 300px;
                    overflow-y: scroll;
                }
            }
        </style>

       
        <div class="container">
            <div class="title">User Settings</div>
            <form action="#">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Current Email</span>
                        <input disabled type="text" placeholder="${props.user.email}">
                    </div>
                    <div class="input-box">
                        <span class="details">Updated Email</span>
                        <input type="text" id="change-email-button" placeholder="Enter updated email">
                    </div>
                    <div class="input-box">
                        <span class="details">New Password</span>
                        <input type="text" placeholder="Enter new password">
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input id="change-password-button" type="text" placeholder="Confirm password">
                    </div>
                    <div class="categories-checkbox"> Change Category:
                        <label class="check-categories">PTSD
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>

                        <label class="check-categories">Addictions
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <label class="check-categories">Depression
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>

                        <label class="check-categories">Anxiety
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="button">
                        <input type="button" value="Update">
                    </div>
                    <div class="button">
                        <input type="button" value="Cancel">
                    </div>

                </div>
            </form>
        </div>
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