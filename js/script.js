const data = [
    {
        id: 'duck',
        img: './img/duck.png',
    },
    {
        id: 'eagle',
        img: './img/eagle.png',
    },
    {
        id: 'lobster',
        img: './img/lobster.png',
    },
    {
        id: 'parrot',
        img: './img/parrot.png',
    },
    {
        id: 'shark',
        img: './img/shark.png',
    },
    {
        id: 'squid',
        img: './img/squid.png',
    },
];

//sort func
function Shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function formatArray(array) {
    return [array.slice(0, 4), array.slice(4, 8), array.slice(8, 13)];
}

function addImgToCard(rowNum, item) {
    for (var i = 0; i < item.length; i++) {
        rowNum.getElementsByTagName('*')[i].style.backgroundImage = `url('${data.find((x) => x.id === item[i]).img}')`;
    }
}

const rowFirst = document.getElementById('row1');
const rowSecond = document.getElementById('row2');
const rowThird = document.getElementById('row3');
const rows = [rowFirst, rowSecond, rowThird];
let arrayOfIds = [];

data.map((item) => {
    arrayOfIds.push(item.id);
    arrayOfIds.push(item.id);
});

arrayOfIds = formatArray(Shuffle(arrayOfIds));

// add pic on card
arrayOfIds.map((item, index) => {
    addImgToCard(rows[index], item);
});

/*const data = [
    {
        title: '“SONNET 29” BY WILLIAM SHAKESPEARE',
        content:
            'When, in disgrace with fortune and mens eyes, I all alone beweep my outcast state, And trouble deaf heaven with my bootless cries, And look upon myself and curse my fate, Wishing me like to one more rich in hope',
    },
    {
        title: '“WHEN YOU COME” BY MAYA ANGELOU',
        content:
            'When you come to me, unbidden, Beckoning me To long-ago rooms, Where memories lie. Offering me, as to a child, an attic, Gatherings of days too few. Baubles of stolen kisses. Trinkets of borrowed loves. Trunks of secret words, I CRY.',
    },
    {
        title: '“IT IS HERE” BY HAROLD PINTER',
        content:
            'What sound was that? I turn away, into the shaking room. What was that sound that came in on the dark? What is this maze of light it leaves us in?',
    },
    {
        title: '“IT’S ALL I HAVE TO BRING TODAY” BY EMILY DICKINSON',
        content:
            'It’s all I have to bring today— This, and my heart beside— This, and my heart, and all the fields— And all the meadows wide— Be sure you count—should I forget Some one the sum could tell— This, and my heart, and all the Bees Which in the Clover dwell.',
    },
    {
        title: '“A GLIMPSE” BY WALT WHITMAN',
        content:
            'A glimpse through an interstice caught, Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, and I unremark’d seated in a corner',
    },
    {
        title: '“QUEEN ANNE’S LACE” BY WILLIAM CARLOS WILLIAMS',
        content:
            'Her body is not so white as anemone petals nor so smooth—nor so remote a thing. It is a field of the wild carrot taking thefield by force; the grass does not raise above it. Here is no question of whiteness, white as can be, with a purple mole at the center of each flower. Each flower is a hand’s span of her whiteness.',
    },
];

const mainHeading = document.getElementById('sidebar-list');
const contentBlock = document.getElementById('content');

// func for updating content text
const updateContent = (currentIndex) => {
    const isContent = contentBlock.firstElementChild;

    isContent && contentBlock.removeChild(isContent);
    const contentElem = document.createElement(`div`);
    const textContent = document.createTextNode(data[currentIndex].content);

    contentElem.appendChild(textContent);
    contentBlock.appendChild(contentElem);
};

// add titles
data.map((item, index) => {
    const myPara = document.createElement(`li`);
    const textOfParagraph = document.createTextNode(item.title);

    myPara.className = `list`;
    myPara.appendChild(textOfParagraph);
    myPara.setAttribute('id', index);

    mainHeading.appendChild(myPara);
});

mainHeading.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') updateContent(event.target.id);
});

// add default text content
updateContent(0);
*/
