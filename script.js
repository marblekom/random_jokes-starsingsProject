const prompt = require(`prompt-sync`)();
const ramdoms= function() {
    arraymessages=  ['Nice attitude!!','Enschultigung!!','You are the best!!','Happy travel!!','Hallo guys!!','Whatsup?!','You are beautiful!','How was your day today?'];

     arrayGreetings = ["Hello","Hi","Hey", "Greetings","Salutations","Good morning","Good afternoon","Good evening","Howdy", "Aloha","Bonjour","Ciao", "Namaste","Shalom", "Salaam","Sup","Yo",
     "Hola","G'day","Wassup","Konnichiwa","Zdravstvuyte","Hallo", "Salve","Hej","Kia ora","Merhaba","Sveiki","Sawubona","Jambo","Dumela","Marhaban","Szia","Selamat pagi", "Ahoj",
     "Dobry den" ,"Shubh prabhat" ,"Selamat sore" ,"Guten Tag" , "Kalimera" ,"Bom dia" ,"Goedemorgen" ,"Shwmae" ,"Habari ","Bonan matenon" ,"As-salamu alaykum" ,"Sain baina uu",
     "Merhaba ","Moin ","Sawatdee" ];

     arrayrandomJokes = ["Why don't scientists trust atoms? Because they make up everything!","I told my wife she was drawing her eyebrows too high. She looked surprised.","I only know 25 letters of the alphabet. I don't know y.",
     "What's orange and sounds like a parrot? A carrot.","Parallel lines have so much in common. It's a shame they'll never meet.","I used to be a baker because I kneaded dough.",
     "Why did the scarecrow win an award? Because he was outstanding in his field!","What do you get when you cross a snowman and a vampire? Frostbite.", "I told my computer I needed a break, and now it won't stop sending me vacation ads.","Why did the bicycle fall over? Because it was two-tired.","What's a vampire's favorite fruit? A blood orange.",
     "I'm on a whiskey diet. I've lost three days already.",
     "Why did the tomato turn red? Because it saw the salad dressing!",
     "I'm reading a book on anti-gravity. It's impossible to put down!",
     "What's a skeleton's least favorite room in the house? The living room.",
     "Why did the math book look sad? Because it had too many problems.",
     "How does a penguin build its house? Igloos it together!",
     "Why don't skeletons fight each other? They don't have the guts.",
     "What's a cat's favorite color? Purr-ple.",
     "I told my wife she should embrace her mistakes. She gave me a hug."];


    message_2= Math.round(Math.random()*arrayrandomJokes.length-1);

    message_1= Math.round(Math.random()*arrayGreetings.length-1);

    /*arraymessages.push();*/

    message= Math.round(Math.random()*arraymessages.length-1);

    arrayconcat = `${arrayGreetings[message_1]}! \nlet me tell you a joke:\t${arrayrandomJokes[message_2]} \n${arraymessages[message]}`;

    return arrayconcat; 
}




/*var name = prompt("Enter your name: ");
console.log(name);*/

console.log(ramdoms());
console.log('\n');

const sumarr = function(arr){
    let o = arr.length-1;
    let sm=0;
    for (let s=o; s>=0; s--){
        sm+=arr[arr.length-s-1]*10**s
    }
    
    return sm
};

    const arraystars=["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];

    const arrastaranswers={Aries:"A person with an Aries zodiac sign, like yourself, tends to be characterized by a bold and adventurous spirit. Your innate sense of initiative and leadership shines through, reflecting the influence of Mars, the planet of action, in your astrological profile. Being competitive, you thrive in challenging situations, displaying a dynamic and energetic personality. Quick decision-making and spontaneity are among your strengths, although patience may not always be your forte. Your passionate and assertive nature aligns with the Aries archetype, making you a natural pioneer in various aspects of life."
    ,Taurus:"A person with a Taurus zodiac sign, like yourself, is often characterized by a strong and grounded nature. Taurus individuals are ruled by Venus, the planet of love and beauty, contributing to their appreciation for aesthetics and a desire for comfort. You, as a Taurus, likely possess a practical and reliable demeanor, valuing stability and security in various aspects of life. Patience is one of your virtues, allowing you to approach challenges with a steady and determined mindset. Known for your loyalty and dedication, you tend to build enduring relationships based on trust. Your connection to the earth element makes you attuned to the sensual pleasures of life, and your steadfastness is a key feature of your personality."
    ,Gemini:"A person with a Gemini zodiac sign, like yourself, is characterized by a lively and adaptable nature. Geminis are ruled by Mercury, the planet of communication, enhancing their intellectual prowess and verbal skills. You, being a Gemini, likely possess a quick and curious mind, with a natural inclination towards learning and exploring various topics. Your social charm and wit make you adept at engaging with others, and you thrive in diverse social settings. Versatility is a hallmark of your personality, as you tend to be adaptable and open to new experiences. While your dual nature may lead to occasional indecision, it also contributes to your ability to see multiple perspectives. The gift of eloquence and a penchant for networking are often standout features of Gemini individuals."
    ,Cancer:"A person with a Cancer zodiac sign, like yourself, is often characterized by a nurturing and empathetic nature. Cancers are ruled by the Moon, and this celestial influence tends to make you sensitive and deeply connected to your emotions. You, as a Cancer, likely prioritize the well-being of those around you, fostering a warm and supportive environment. Family and home are significant sources of comfort for you, and you may have a strong sense of loyalty to your loved ones. Your intuitive nature allows you to understand the emotions of others, and you often play the role of a caring confidant. While your protective instincts are admirable, it's essential to balance your nurturing tendencies with self-care. The gentle and compassionate energy of a Cancer is a defining aspect of your personality."
    ,Leo:"A person with a Leo zodiac sign, like yourself, is often characterized by a bold and charismatic presence. Leos are ruled by the Sun, and this celestial influence tends to imbue you with a natural sense of confidence and leadership. You, being a Leo, likely exude warmth and enthusiasm, attracting attention wherever you go. Creativity and a love for the spotlight are common traits, as you may enjoy expressing yourself through various forms of artistic or performative outlets. Your generous and loyal nature makes you a natural friend and supporter, and you tend to take pride in your accomplishments. While your desire for recognition is strong, it's complemented by a genuine concern for the well-being of those around you. The regal and vibrant energy of a Leo is a defining aspect of your personality."
    ,Virgo:"A person with a Virgo zodiac sign, like yourself, is often characterized by a meticulous and analytical nature. Virgos are ruled by Mercury, the planet of communication, which contributes to your keen attention to detail and practical mindset. You, being a Virgo, likely possess a strong sense of organization and efficiency, finding satisfaction in bringing order to your surroundings. Your critical thinking skills make you adept at problem-solving, and you may have a natural inclination towards service and helping others. While you strive for perfection, it's essential to balance your high standards with self-compassion. Your humility and reliability are notable traits, and you often excel in tasks that require precision. The thoughtful and industrious energy of a Virgo is a defining aspect of your personality."
    ,Libra:"A person with a Libra zodiac sign, like yourself, is often characterized by a harmonious and diplomatic nature. Libras are ruled by Venus, the planet of love and beauty, which contributes to your appreciation for aesthetics and a desire for balance in all aspects of life. You, being a Libra, likely possess excellent social skills, with a natural ability to navigate relationships and create a sense of harmony. Your sense of fairness and justice is strong, and you may find fulfillment in advocating for equality. While you value partnerships, it's important to maintain your individuality within relationships. Your charm and ability to see multiple perspectives make you a sought-after friend and confidant. The gracious and sociable energy of a Libra is a defining aspect of your personality."
    ,Scorpio:"A person with a Scorpio zodiac sign, like yourself, is often characterized by intensity and depth. Scorpios are ruled by Pluto, the planet associated with transformation and mystery, which contributes to your passionate and resilient nature. You, being a Scorpio, likely possess a keen intuition and a penchant for delving into the hidden aspects of life. Your determination is unwavering, and you may have a magnetic presence that draws others in. While you value privacy, your loyalty to those you trust is unparalleled. Embracing your emotional depth and embracing change can be key to your personal growth. The transformative and enigmatic energy of a Scorpio is a defining aspect of your personality."
    ,Sagittarius:"A person with a Sagittarius zodiac sign, like yourself, is often characterized by a free-spirited and adventurous nature. Sagittarians are ruled by Jupiter, the planet of expansion, which contributes to your optimistic and open-minded outlook on life. You, being a Sagittarius, likely have a thirst for knowledge and a love for exploration, whether it's through travel, learning, or experiencing new cultures. Your enthusiasm and sense of humor make you a delightful and uplifting presence in social settings. Independence is important to you, and you value the freedom to pursue your interests. While your spontaneity is a strength, balancing it with a sense of responsibility can lead to a more fulfilling journey. The adventurous and optimistic energy of a Sagittarius is a defining aspect of your personality."
    ,Capricorn:"A person with a Capricorn zodiac sign, like yourself, is often characterized by a disciplined and ambitious nature. Capricorns are ruled by Saturn, the planet of structure and responsibility, which contributes to your strong work ethic and goal-oriented mindset. You, being a Capricorn, likely value practicality and long-term planning, finding satisfaction in achieving tangible results. Your determination and perseverance make you a reliable and trustworthy individual, and you may excel in leadership roles. While you pursue success, it's important to balance your professional aspirations with self-care. Your practicality is complemented by a sense of tradition, and you often appreciate the stability of established systems. The disciplined and ambitious energy of a Capricorn is a defining aspect of your personality."
    ,Aquarius:"A person with an Aquarius zodiac sign, like yourself, is often characterized by an independent and progressive nature. Aquarians are ruled by Uranus, the planet associated with innovation and originality, contributing to your unique and forward-thinking mindset. You, being an Aquarius, likely value individuality and have a strong sense of social justice. Your open-mindedness and humanitarian spirit make you a natural advocate for positive change. While you cherish your independence, fostering meaningful connections with others is also important to you. Your intellectual curiosity and ability to embrace unconventional ideas set you apart, and you may find fulfillment in pursuits that contribute to the betterment of society. The innovative and humanitarian energy of an Aquarius is a defining aspect of your personality."
    ,Pisces:"A person with a Pisces zodiac sign, like yourself, is often characterized by a compassionate and imaginative nature. Pisceans are ruled by Neptune, the planet associated with dreams and intuition, contributing to your sensitivity and artistic inclinations. You, being a Pisces, likely possess a deep emotional depth and a penchant for creativity in various forms. Your empathetic nature makes you a supportive friend, as you can easily connect with the feelings of others. While you may have a tendency to be introspective, embracing your intuition can lead to profound insights. Your love for escapism and the arts may be prominent, offering you a unique way to navigate the world. The compassionate and imaginative energy of a Pisces is a defining aspect of your personality." };


const arrayspace = [ 31, 59, 90, 120, 151 , 181, 212, 243, 273, 304, 334, 365];
const months = {0:31, 1:28, 2:31, 3:30, 4:31, 5:30, 6:31, 7:31, 8:30, 9:31, 10:30, 11:31};
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



const age = function(y){
    let _d = sumarr(arraydays);
    let _m = sumarr(arraymonths);
    let oy = sumarr(arrayyears);
    let total = y - oy ;
    return total;
}

var u = prompt("Do you want me to tell you about your starsign ? Or your partner's ? ");
let c= u.toUpperCase();

console.log('\n');

/*console.log(c+typeof c );*/

/*while (c!= "YES"|| c!= "NO"){
    var u = prompt("You do not enter a valid answer!\nReply either with Yes or No "); 
    c = u.toUpperCase();
}*/

if (c==`YES`){
    var x = prompt("Enter Your  name: ");
    console.log("\n");
    var y = prompt("Type in your or your partner's birthday in (dd.mm.yyyy) format: ");
    console.log("\n");

    arraydays = [];
    arraymonths = [];
    arrayyears = [];
    
    for (let i =0; i<= 1;i++){
        arraydays.push(+y[i]);
    }
    for (let e =3; e<= 4;e++){
        arraymonths.push(+y[e]);
    }
    for (let p =6; p<= 9;p++){
        arrayyears.push(+y[p]);
    }

    const currentdate = new Date();
    const cy = currentdate.getFullYear();
    const cm = currentdate.getMonth();
    const cd = currentdate.getDate();
    
    
   
    let curage = age(cy);
    console.log(`Hi ${x}! You are ${curage} years old !! ` );

    let numdays= sumarr(arraydays);
    let nummonths = sumarr(arraymonths);
    let numyears = sumarr(arrayyears);

    let totalmonths = 0;
    
    for (let j=nummonths-1; j>0; j--){
        totalmonths +=  + months[j];
        };

    let totalvalue = totalmonths + numdays;
    
     
    if (totalvalue>= 80 && totalvalue<=109){
         console.log(`\nYOU are Aries!!\n${arrastaranswers.Aries}`);
    }
    else if (totalvalue>= 110 && totalvalue<=140){
         console.log(`\nYOU are Taurus!!\n${arrastaranswers.Taurus}`);
    }
    else if (totalvalue>= 141 && totalvalue<=171){
        console.log(`\nYOU are Gemini!!\n${arrastaranswers.Gemini}`);
    }else if (totalvalue>= 172 && totalvalue<=203){
        console.log(`\nYOU are Cancer!!\n${arrastaranswers.Cancer}`);
    }else if (totalvalue>= 204 && totalvalue<=235){
        console.log(`\nYOU are Leo!!\n${arrastaranswers.Leo}`);
    }else if (totalvalue>= 236 && totalvalue<=265){
        console.log(`\nYOU are Virgo!!\n${arrastaranswers.Virgo}`);
    }else if (totalvalue>= 266 && totalvalue<=295){
        console.log(`\nYOU are Libra!!\n${arrastaranswers.Libra}`);
    }else if (totalvalue>= 296 && totalvalue<=325){
        console.log(`\nYOU are Scorpio!!\n${arrastaranswers.Scorpio}`);
    }else if (totalvalue>= 326 && totalvalue<=355){
        console.log(`\nYOU are Sagittarius!!\n${arrastaranswers.Sagittarius}`);
    }else if (totalvalue>= 356 && totalvalue<=365 || totalvalue>= 1 && totalvalue<=19 ){
        console.log(`\nYOU are Capricorn!!\n${arrastaranswers.Capricorn}`);
    }else if (totalvalue>= 20 && totalvalue<=49 ){
        console.log(`\nYOU are Aquarius!!\n${arrastaranswers.Aquarius}`);
    }else if (totalvalue>= 50 && totalvalue<=79){
        console.log(`\nYOU are Pisces!!\n${arrastaranswers.Pisces}`);
    }

} else{
    console.log("Thank you for your time!");
}

console.log("\n");
const daten = new Date();
console.log(`\nThe exact date is: ${daten}`);

/*console.log(typeof y);*/


