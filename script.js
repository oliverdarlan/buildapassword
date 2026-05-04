(function () {
  "use strict";

  // ------------------------------------------------------
  // Wordlist for passphrases (curated, short, memorable)
  // ------------------------------------------------------
  const WORDLIST = [
    "able","acid","acorn","actor","adapt","adobe","agent","agile","album","alert",
    "alien","alley","alloy","almond","alpha","amber","amend","ample","amuse","angel",
    "angle","ankle","apple","april","arbor","arcade","arctic","argue","armor","arrow",
    "ascent","aspen","aspect","aspire","asset","atlas","atom","attic","audio","audit",
    "august","aurora","avenue","awake","award","azure","badge","bagel","baker","balcony",
    "ballad","balsa","bamboo","banjo","baron","basil","basin","basis","batch","beach",
    "beacon","beagle","beaker","bean","bear","beard","beast","beaver","beech","beetle",
    "begin","bench","beret","berry","beta","bezel","bicep","biker","binder","bingo",
    "biome","biotic","birch","bison","blade","blaze","blend","bliss","block","bloom",
    "blue","board","boast","bobcat","bolt","bonus","boost","border","botany","bottle",
    "bough","boulder","bound","bouquet","bowl","brain","brake","branch","brass","brave",
    "bread","break","breeze","brick","bridge","brief","bright","brisk","broad","bronze",
    "brook","broom","brown","brunch","brush","bucket","buddy","budget","buffer","buggy",
    "bugle","build","bulb","bulk","bumper","bunch","bundle","burner","bush","butter",
    "button","buyer","cabin","cable","cactus","cadet","caesar","cake","calm","camel",
    "camera","camp","canal","candle","candy","canon","canopy","canvas","canyon","cape",
    "capital","carbon","cargo","carol","carpet","carrot","carve","casino","castle","catch",
    "cattle","cave","cedar","celery","cello","cement","center","chalk","champ","chance",
    "change","chant","chapel","charm","chart","chase","cheek","cheese","cherry","chess",
    "chest","chick","chief","chime","china","chip","chirp","chisel","choice","chop",
    "chord","chorus","chose","chrome","chunk","cider","cigar","cinema","circle","citron",
    "city","civic","clamp","clap","class","clean","clear","clerk","click","cliff",
    "climb","clip","clock","cloud","clover","club","cluster","clutch","coach","coast",
    "cobalt","cobra","cocoa","coffee","color","comb","combo","comet","comic","compass",
    "concept","concert","cookie","copper","copy","coral","cord","cork","corn","corner",
    "cosmos","cotton","couch","cougar","count","county","couple","course","court","cover",
    "coyote","crab","crane","crater","crayon","cream","credit","creek","crest","crew",
    "cricket","crime","crisp","crop","cross","crow","crown","cruise","crumb","crystal",
    "cube","culture","cup","curl","curry","cursor","curve","cyan","cycle","cymbal",
    "daisy","dance","danger","daring","darling","dash","data","dawn","decade","decode",
    "deduce","deep","deer","define","delay","delight","delta","demand","denim","depth",
    "desert","design","desire","desk","detail","detect","dew","diary","dice","diesel",
    "differ","dig","digital","dimple","diner","dinner","dirt","disco","dish","disk",
    "dispatch","ditto","divide","dock","doctor","dodge","dolphin","domain","done","door",
    "dose","dot","double","dough","dove","draft","dragon","drama","draw","dream",
    "dress","drift","drink","drive","drop","drum","duck","dune","dusk","dust",
    "duty","eagle","early","earth","easel","easy","echo","eclipse","edge","editor",
    "elbow","elder","electric","elegant","elf","elite","elk","ember","empty","enchant",
    "energy","engine","engrave","enjoy","enrich","ensure","enter","envoy","equal","equip",
    "era","escape","ether","ethics","evening","event","every","evolve","exact","examine",
    "excel","exit","expect","expert","explore","extra","fabric","fable","face","factor",
    "fair","falcon","family","famous","fancy","far","farm","fast","fate","father",
    "fauna","fawn","feather","feature","fern","ferry","festival","fiber","field","fierce",
    "figure","filter","final","finch","finger","finish","fire","first","fish","fit",
    "five","fix","fjord","flame","flank","flare","flash","flask","flat","flavor",
    "fleece","flight","flip","float","flock","flood","floor","flora","flour","flow",
    "flower","fluent","flute","flux","fly","foam","fog","foil","fold","folder",
    "folk","fond","food","forest","forge","format","fortune","forum","fossil","four",
    "fox","fragment","frame","free","fresh","friend","fringe","frog","front","frost",
    "fruit","fudge","fuel","full","fun","fund","fungus","fur","fuse","fusion",
    "future","gadget","galaxy","gallery","game","garden","garlic","gasp","gate","gather",
    "gauge","gear","gecko","gem","gene","genius","gentle","genuine","ghost","giant",
    "gift","ginger","giraffe","girl","give","glacier","glad","glass","glide","glimpse",
    "globe","glory","glove","glow","glue","goal","goat","gold","golf","good",
    "goose","gospel","gown","grace","grade","grain","grand","grant","grape","graph",
    "grass","grateful","gravel","gravity","green","greet","grid","grin","grip","grit",
    "groove","ground","group","grove","grow","guard","guess","guest","guide","guild",
    "guitar","gulf","gum","guru","habit","hail","hair","half","hall","hammer",
    "hand","handy","happy","harbor","hardy","harmony","harp","harvest","haste","haven",
    "hawk","hazel","head","heal","heart","hearth","heavy","hedge","helix","helm",
    "help","herald","herb","hero","hidden","high","hike","hill","hint","hippo",
    "history","hive","hobby","hold","hole","holiday","home","honey","honor","hood",
    "hope","horizon","horn","horse","hospital","host","hotel","hour","house","hover",
    "huge","human","humble","humor","hunt","hurdle","husky","hut","hydro","hyper",
    "ice","icon","idea","ideal","igloo","image","impact","import","inch","income",
    "index","indigo","indoor","infant","inform","inhale","initial","inject","ink","inland",
    "inner","input","insect","inside","inspect","instinct","invent","invite","iris","iron",
    "island","ivory","jacket","jade","jaguar","jam","january","jasmine","javelin","jazz",
    "jelly","jersey","jewel","jingle","job","jockey","joker","jolly","journal","journey",
    "joy","judge","juice","jumbo","junction","jungle","juniper","jury","just","kale",
    "karma","kayak","keen","keep","kelp","kettle","key","keyboard","kid","kind",
    "king","kiss","kite","kitten","kiwi","knee","knight","knit","knock","knot",
    "know","koala","label","labor","ladder","lake","lamb","lamp","lance","land",
    "lane","lantern","large","lark","laser","last","latch","later","laugh","launch",
    "laundry","lava","lawn","layer","lazy","leader","leaf","league","learn","leather",
    "leave","ledge","legend","lemon","lens","lentil","leopard","letter","level","liar",
    "library","light","lilac","lily","lime","line","linen","link","lion","liquid",
    "list","little","lively","liver","lizard","load","loaf","lobby","local","lock",
    "logic","lollipop","lonely","long","look","loop","lord","lotion","lotus","loud",
    "love","low","loyal","lucky","luggage","lumber","lunar","lunch","lung","lush",
    "lute","lyric","macro","magic","magnet","mail","main","major","make","mallet",
    "mammal","manage","mango","manor","mantle","manual","maple","marble","march","margin",
    "marina","marine","market","marsh","mason","master","match","matter","maze","meadow",
    "medal","media","melody","melon","member","memory","mental","mentor","menu","merit",
    "metal","method","midnight","might","mild","milk","mill","mimic","mind","mine",
    "mineral","mingle","mint","minute","mirror","mission","mist","mitten","mix","model",
    "modern","modify","module","moment","monkey","month","moon","moor","moral","more",
    "morning","mosaic","moss","most","mother","motion","motor","mound","mountain","mouse",
    "mouth","move","movie","muffin","mule","mural","muscle","museum","mushroom","music",
    "muster","mystery","myth","nacho","nail","name","nation","native","nature","navy",
    "near","neat","nectar","need","nephew","nerve","nest","net","never","new",
    "nice","niche","nickel","night","nimble","noble","nod","noise","nomad","north",
    "nose","note","notice","novel","nudge","number","nurse","nutmeg","nylon","oak",
    "oasis","oat","obey","object","oblige","oboe","obtain","occur","ocean","octave",
    "octopus","odd","offer","office","often","oil","olive","omega","onion","online",
    "only","open","opera","opinion","option","orange","orbit","orca","orchard","order",
    "organ","origin","oryx","osprey","other","otter","ounce","outdoor","outer","oval",
    "oven","over","owl","owner","oxygen","oyster","ozone","pacific","pack","paddle",
    "page","pail","paint","pair","palace","pale","palm","panda","panel","panic",
    "panther","papaya","paper","parade","parcel","parent","park","parrot","parsley","party",
    "pass","pasta","patch","path","patient","patio","patrol","peace","peach","peak",
    "peanut","pearl","pebble","pedal","pelican","pen","pencil","penguin","pepper","perch",
    "perfect","period","permit","person","pewter","phase","phoenix","phone","photo","piano",
    "picnic","picture","pier","pigeon","pile","pillar","pilot","pine","pink","pioneer",
    "pipe","pirate","pitch","pixel","pizza","place","plain","planet","plank","plant",
    "plasma","plate","plateau","play","plaza","please","pledge","plot","plow","pluck",
    "plum","plush","poem","poet","point","polar","pole","police","pond","pony",
    "popular","port","portal","post","pot","potato","pottery","power","prairie","praise",
    "prawn","press","price","pride","prime","print","prism","prize","produce","program",
    "promise","prompt","proof","proper","propose","proud","prune","public","puddle","pull",
    "pulse","puma","pump","pumpkin","punch","puppet","puppy","purple","purpose","push",
    "puzzle","pyramid","python","quail","quaint","quake","quality","quantum","quartz","queen",
    "quench","quest","quick","quiet","quill","quilt","quirk","quiver","quote","rabbit",
    "raccoon","race","radar","radio","radish","raft","rail","rain","rainbow","raise",
    "rake","rally","ramp","ranch","random","range","rank","rapid","rare","raspberry",
    "raven","ray","reach","ready","real","reason","rebel","recall","recipe","record",
    "red","reed","reef","refine","reflect","region","rein","relay","relish","remind",
    "renew","rent","reply","report","rescue","resort","result","return","reveal","review",
    "rhino","rhythm","rib","rice","rich","ride","ridge","rifle","right","rim",
    "ring","rinse","ripple","rise","river","road","roast","robin","robot","rock",
    "rocket","rodeo","rogue","roll","roof","rookie","room","rope","rose","round",
    "route","rover","royal","ruby","rudder","rug","rugby","ruler","run","rural",
    "rust","rye","saber","sacred","saddle","safari","safe","saffron","sage","sail",
    "salad","salmon","salt","salute","sample","sand","sandal","sapphire","sardine","sash",
    "satin","sauce","savor","scale","scan","scarf","scene","scent","schedule","school",
    "science","scissor","scope","score","scout","scratch","screen","script","sculpt","sea",
    "seal","season","seat","second","secret","sector","seed","seek","seem","select",
    "self","send","senior","sense","series","serve","setup","seven","shade","shadow",
    "shake","shallow","shape","share","shark","sharp","sheep","shelf","shell","sherry",
    "shield","shift","shine","ship","shirt","shoe","shoot","shore","short","shoulder",
    "shovel","shrimp","shrub","shuttle","sibling","side","sigh","sign","silent","silk",
    "silly","silver","simple","sing","sink","sip","sir","sister","sit","six",
    "skate","sketch","ski","skill","skin","skirt","skull","sky","slab","slate",
    "sleek","sleep","sleet","slice","slide","slim","slip","slope","slot","slow",
    "small","smart","smile","smoke","smooth","snack","snail","snake","snap","sneak",
    "sniff","snore","snorkel","snow","snug","soap","soccer","sock","soda","sofa",
    "soft","soil","solar","solid","solo","solve","song","sonic","soon","sorbet",
    "sort","soul","sound","soup","source","south","space","span","spark","spatula",
    "speak","spear","speed","spell","spend","sphere","spice","spider","spike","spin",
    "spinach","spire","spirit","split","sponge","spoon","sport","spot","spray","spring",
    "sprout","spruce","square","squash","squid","squirrel","stable","staff","stage","stair",
    "stamp","stand","staple","star","start","state","stay","steady","steam","steel",
    "stem","step","stereo","stew","stick","still","stitch","stock","stone","stool",
    "stop","store","stork","storm","story","stove","strap","straw","strict","string",
    "strip","stripe","strong","studio","study","stuff","style","subject","subtle","sugar",
    "summer","sun","sunny","super","supply","sure","surf","surge","sushi","swallow",
    "swamp","swan","sweater","sweep","sweet","swift","swim","swing","switch","sword",
    "symbol","syrup","table","taco","tag","tail","tailor","talent","talk","tall",
    "tame","tan","tango","tank","tap","tape","tapir","target","tarp","task",
    "taste","tattoo","tavern","taxi","tea","teach","team","tease","teen","tell",
    "temple","tempo","tender","tennis","tent","term","test","text","thank","thaw",
    "theater","theme","thick","thin","thing","think","thirst","thorn","thread","three",
    "thrive","throne","thumb","thunder","tide","tidy","tiger","tile","time","tin",
    "tiny","tip","title","toast","tobacco","today","toffee","tofu","together","tone",
    "tongue","tonic","tool","tooth","top","topaz","topic","torch","tornado","total",
    "totem","touch","tough","tour","tower","town","toy","trace","track","trade",
    "trail","train","tram","travel","tray","tread","treat","tree","trend","tribe",
    "trick","trim","trip","trophy","trout","truck","true","trumpet","trunk","trust",
    "truth","try","tube","tug","tulip","tumble","tuna","tundra","tunnel","turbo",
    "turkey","turn","turtle","tutor","twelve","twenty","twig","twin","twist","two",
    "typhoon","ukulele","umbrella","uncle","under","undo","unfold","union","unique","unite",
    "universe","unlock","until","update","upgrade","upper","urban","urge","useful","usher",
    "utter","vacant","valley","valor","value","vapor","vary","vase","vast","vault",
    "vector","vegan","velvet","vendor","venue","verge","verse","very","vessel","veteran",
    "video","view","villa","vine","violet","violin","virtue","visit","visor","vital",
    "vivid","vocal","voice","void","volume","voucher","voyage","waffle","wagon","walk",
    "wall","walnut","walrus","wander","want","warden","warm","warn","wash","watch",
    "water","wave","wax","weave","web","wedge","weed","week","weight","welcome",
    "well","west","whale","wharf","wheat","wheel","whisper","white","whole","wide",
    "wild","willow","win","wind","window","wine","wing","wink","winter","wire",
    "wise","wish","witness","wizard","wolf","wonder","wood","wool","word","work",
    "world","worth","wrap","wren","wrist","write","yacht","yard","yarn","year",
    "yellow","yes","yeti","yield","yoga","young","youth","zebra","zenith","zero",
    "zest","zigzag","zone","zoo"
  ];

  const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.<>/?";
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const DIGITS = "0123456789";

  // ------------------------------------------------------
  // Secure randomness
  // ------------------------------------------------------
  function randomInt(maxExclusive) {
    if (maxExclusive <= 0) return 0;
    // Reject-sampling for a uniform distribution over [0, maxExclusive)
    const limit = 0x100000000 - (0x100000000 % maxExclusive);
    const buf = new Uint32Array(1);
    let value;
    do {
      crypto.getRandomValues(buf);
      value = buf[0];
    } while (value >= limit);
    return value % maxExclusive;
  }

  function randomChoice(str) {
    return str.charAt(randomInt(str.length));
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = randomInt(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ------------------------------------------------------
  // Generators
  // ------------------------------------------------------
  function generatePassword(length, opts) {
    const pools = [];
    if (opts.upper) pools.push(UPPER);
    if (opts.lower) pools.push(LOWER);
    if (opts.number) pools.push(DIGITS);
    if (opts.symbol) pools.push(SYMBOLS);

    if (pools.length === 0) return "";

    // Guarantee at least one character from each selected pool
    const chars = pools.map((p) => randomChoice(p));
    const all = pools.join("");
    while (chars.length < length) {
      chars.push(randomChoice(all));
    }
    return shuffle(chars).join("");
  }

  function generatePassphrase(count, separator, opts) {
    const words = [];
    for (let i = 0; i < count; i++) {
      let w = WORDLIST[randomInt(WORDLIST.length)];
      if (opts.capitalize) {
        w = w.charAt(0).toUpperCase() + w.slice(1);
      }
      words.push(w);
    }
    if (opts.number) {
      // Append a 1-2 digit number to a random word
      const idx = randomInt(words.length);
      words[idx] = words[idx] + randomInt(100);
    }
    return words.join(separator);
  }

  // ------------------------------------------------------
  // Strength estimation (entropy in bits)
  // ------------------------------------------------------
  function passwordEntropy(length, opts) {
    let pool = 0;
    if (opts.upper) pool += UPPER.length;
    if (opts.lower) pool += LOWER.length;
    if (opts.number) pool += DIGITS.length;
    if (opts.symbol) pool += SYMBOLS.length;
    if (pool === 0 || length === 0) return 0;
    return length * Math.log2(pool);
  }

  function passphraseEntropy(count, opts) {
    let bits = count * Math.log2(WORDLIST.length);
    if (opts.number) bits += Math.log2(100); // approx ~6.6 bits
    return bits;
  }

  function strengthFromEntropy(bits) {
    if (bits < 40) return { key: "weak", label: "Weak" };
    if (bits < 60) return { key: "fair", label: "Fair" };
    if (bits < 80) return { key: "strong", label: "Strong" };
    return { key: "very-strong", label: "Very Strong" };
  }

  // ------------------------------------------------------
  // DOM
  // ------------------------------------------------------
  const el = {
    output: document.getElementById("output"),
    copy: document.getElementById("copy"),
    regenerate: document.getElementById("regenerate"),
    generate: document.getElementById("generate"),
    toast: document.getElementById("toast"),

    modePassword: document.getElementById("mode-password"),
    modePassphrase: document.getElementById("mode-passphrase"),
    pwOptions: document.getElementById("password-options"),
    ppOptions: document.getElementById("passphrase-options"),

    length: document.getElementById("length"),
    lengthValue: document.getElementById("length-value"),
    optUpper: document.getElementById("opt-upper"),
    optLower: document.getElementById("opt-lower"),
    optNumber: document.getElementById("opt-number"),
    optSymbol: document.getElementById("opt-symbol"),

    words: document.getElementById("words"),
    wordsValue: document.getElementById("words-value"),
    separator: document.getElementById("separator"),
    ppCapitalize: document.getElementById("pp-capitalize"),
    ppNumber: document.getElementById("pp-number"),

    strengthFill: document.getElementById("strength-fill"),
    strengthLabel: document.getElementById("strength-label"),
    strengthEntropy: document.getElementById("strength-entropy"),
  };

  let mode = "password";

  // ------------------------------------------------------
  // Helpers
  // ------------------------------------------------------
  function getPasswordOpts() {
    return {
      upper: el.optUpper.checked,
      lower: el.optLower.checked,
      number: el.optNumber.checked,
      symbol: el.optSymbol.checked,
    };
  }

  function getPassphraseOpts() {
    return {
      capitalize: el.ppCapitalize.checked,
      number: el.ppNumber.checked,
    };
  }

  function ensureAtLeastOnePasswordOption(changedEl) {
    const opts = getPasswordOpts();
    const anyOn = opts.upper || opts.lower || opts.number || opts.symbol;
    if (!anyOn) {
      // Re-enable the one the user just unchecked
      changedEl.checked = true;
    }
  }

  function updateStrengthDisplay(bits) {
    const { key, label } = strengthFromEntropy(bits);
    // Cap visual fill at ~120 bits for the bar
    const pct = Math.min(100, (bits / 120) * 100);
    el.strengthFill.style.width = pct + "%";

    ["is-weak", "is-fair", "is-strong", "is-very-strong"].forEach((c) => {
      el.strengthFill.classList.remove(c);
      el.strengthLabel.classList.remove(c);
    });
    const cls = "is-" + key;
    el.strengthFill.classList.add(cls);
    el.strengthLabel.classList.add(cls);

    el.strengthLabel.textContent = label;
    el.strengthEntropy.textContent = bits > 0 ? `${Math.round(bits)} bits` : "";
  }

  function recomputeStrength() {
    if (mode === "password") {
      const length = parseInt(el.length.value, 10);
      updateStrengthDisplay(passwordEntropy(length, getPasswordOpts()));
    } else {
      const count = parseInt(el.words.value, 10);
      updateStrengthDisplay(passphraseEntropy(count, getPassphraseOpts()));
    }
  }

  function generate() {
    let result = "";
    if (mode === "password") {
      const length = parseInt(el.length.value, 10);
      result = generatePassword(length, getPasswordOpts());
    } else {
      const count = parseInt(el.words.value, 10);
      result = generatePassphrase(count, el.separator.value, getPassphraseOpts());
    }
    el.output.textContent = result || "Select at least one option";
    recomputeStrength();
  }

  function showToast(message) {
    el.toast.textContent = message;
    el.toast.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      el.toast.classList.remove("is-visible");
    }, 1600);
  }

  async function copyToClipboard() {
    const text = el.output.textContent;
    if (!text || text === "click generate" || text === "Select at least one option") return;

    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // Fallback for older / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (_) {
        showToast("Unable to copy");
        document.body.removeChild(ta);
        return;
      }
      document.body.removeChild(ta);
    }

    el.copy.classList.add("is-success");
    el.copy.setAttribute("aria-label", "Copied!");
    showToast("Copied to clipboard");
    clearTimeout(copyToClipboard._t);
    copyToClipboard._t = setTimeout(() => {
      el.copy.classList.remove("is-success");
      el.copy.setAttribute("aria-label", "Copy to clipboard");
    }, 1600);
  }

  function setMode(next) {
    mode = next;
    const isPw = next === "password";
    el.modePassword.classList.toggle("is-active", isPw);
    el.modePassword.setAttribute("aria-selected", String(isPw));
    el.modePassphrase.classList.toggle("is-active", !isPw);
    el.modePassphrase.setAttribute("aria-selected", String(!isPw));
    el.pwOptions.classList.toggle("is-hidden", !isPw);
    el.ppOptions.classList.toggle("is-hidden", isPw);
    generate();
  }

  // ------------------------------------------------------
  // Wire up
  // ------------------------------------------------------
  el.modePassword.addEventListener("click", () => setMode("password"));
  el.modePassphrase.addEventListener("click", () => setMode("passphrase"));

  el.length.addEventListener("input", () => {
    el.lengthValue.textContent = el.length.value;
    recomputeStrength();
  });
  el.length.addEventListener("change", generate);

  el.words.addEventListener("input", () => {
    el.wordsValue.textContent = el.words.value;
    recomputeStrength();
  });
  el.words.addEventListener("change", generate);

  [el.optUpper, el.optLower, el.optNumber, el.optSymbol].forEach((cb) => {
    cb.addEventListener("change", () => {
      ensureAtLeastOnePasswordOption(cb);
      generate();
    });
  });

  [el.ppCapitalize, el.ppNumber].forEach((cb) => {
    cb.addEventListener("change", generate);
  });
  el.separator.addEventListener("change", generate);

  el.generate.addEventListener("click", generate);
  el.regenerate.addEventListener("click", generate);
  el.copy.addEventListener("click", copyToClipboard);

  // Initial generation
  generate();
})();
