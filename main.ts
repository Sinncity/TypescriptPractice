// let userName = "Jake";
// const newUser = userName;

// let userName: string | number;
// let age: number | boolean;

// userName =  123;
// userName =  " T Parker ";
// age = true;
// age = 28;
// console.log("userName22" , age)

// type  user = {
//       name: string;
//       age: number;
//       isMarried: boolean;
//       hobbies: string[ ];
//       gender?: string

// } ;

// const person: user = {
// name: "Tparker ",
// age: 37,
// isMarried: false,
// hobbies: ["Shooting ", " Photography","Bowling"  ],
// gender: "Male"

// };
// const personTwo: user = {
//       name: "Tparker ",
//       age: 37,
//       isMarried: false,
//       hobbies: ["Shooting ", " Photography","Bowling"  ]

//       };

// const calculateMyAge = (birthYear: number):
// number => {

//       return new Date (Date.now()).getFullYear() - birthYear;

// }

// // const persons : user[ ] = [person];

// const myAge: number = calculateMyAge(1985);

// console.log(myAge)

// function greetMe (userinfo: {name: string ; age: number}):

// string {

//       return (
//             userinfo.name +  " Its nice to know that you " +
//              userinfo.age + " years old."

//       );
// }
// console.log(greetMe({name:" Terrance ", age: myAge }))

interface Player {
    currentSong: string;
    currentSongLength: number;
    playNext: () => void;
    playPrevious: () => void;
}

const player: Player = {
    currentSong: " 5 Star",
    currentSongLength: 35_000,
    playNext: () => console.log("Playing next"),
    playPrevious: () => console.log("Playing previous"),
};

type song = { name: string; length: number };

class AudioPlayer implements Player {
    currentSong: string;
    currentSongLength: number;
    playNext = () => console.log("Playing next");
    playPrevious = () => console.log("Playing previous");

    constructor(songInfo: song) {
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }

    stopAudio = () => {};
}
const audioPlayer = new AudioPlayer({
    name: "Shape of you",
    length: 40_000,
});

const anotherAudioPlayer = new AudioPlayer({
    name: " closer",
    length: 50_000,
});

console.log(
    audioPlayer.currentSong,
    audioPlayer.currentSongLength,
);

console.log(
    anotherAudioPlayer.currentSong,
    anotherAudioPlayer.currentSongLength,
);

console.log(player.currentSong, player.currentSongLength);
