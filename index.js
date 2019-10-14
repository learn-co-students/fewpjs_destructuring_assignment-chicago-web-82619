const farmAnimals = 'cow horse sheep pig chicken'
let moo = farmAnimals.split(' ')[0];
let neigh = farmAnimals.split(' ')[1];
let baa = farmAnimals.split(' ')[2];
let oink = farmAnimals.split(' ')[3];
let cluck = farmAnimals.split(' ')[4];

let Bessie = farmAnimals.split(' ')[0];
let Dolly = farmAnimals.split(' ')[2];
let Babe = farmAnimals.split(' ')[3];
let Little = farmAnimals.split(' ')[4];

let black_and_white = farmAnimals.split(' ')[0];
let black = farmAnimals.split(' ')[2];
let pink = farmAnimals.split(' ')[3];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
let red = colors[0];
let orange = colors[1];
let yellow = colors[2];
let green = colors[3];
let blue = colors[4];
let indigo = colors[5];
let violet = colors[6];

let r = colors[0];
let o = colors[1];
let y = colors[2];
let g = colors[3];
let b = colors[4];
let i = colors[5];
let v = colors[6];

let indg = colors[5];

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

let name = muppet.name;
let color = muppet.color;
let song = muppet.song;
let job = muppet.job;
let partner = muppet.partner;

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

let song_2 = k_muppet.k_album.the_muppet_movie.song_2;
let song_4 = k_muppet.k_album.the_muppet_movie.song_4;
let k_job = k_muppet.k_job;
let k_partner = k_muppet.k_partner;

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
