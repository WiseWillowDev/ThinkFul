function wisePerson(wiseType , whatToSay) {
    console.log('A wise %s once said: "%s". ' , wiseType , whatToSay);
}

wisePerson('goat' , 'Hello world');
wisePerson('mentor' , 'dont use divs');


function shouter(whatToShout) {
    let shout = whatToShout.toUpperCase() + "!!!";
    console.log(shout);
}
shouter("meeeerrhhh");

function textNormalizer(text) {
    let textFixed = text.toLowerCase();
    while(textFixed.charAt(0) == ' ') {
        textFixed = textFixed.substring(1 , textFixed.length);
        // console.log('Found a space in the beginning ');
    } 
    while(textFixed.charAt(textFixed.length-1) == ' ') {
        textFixed = textFixed.substring(0 , textFixed.length-1);
        // console.log('Found a space at the end');

    }
    
    console.log(textFixed);
}
// you can add dynamically any amount of spaces in the end and beginning 
let text = '  I want to TEST to SEE IF THIS might WoRk  ';
textNormalizer(text);