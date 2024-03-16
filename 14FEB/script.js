var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append(`<div class='heart' style='width:${r_size}px;height:${r_size}px;left:${r_left}%;background:rgba(255,${r_bg - 25},${r_bg},1);animation:love ${r_time}s ease'></div>`);
    $('.bg_heart').append(`<div class='heart' style='width:${r_size - 10}px;height:${r_size - 10}px;left:${r_left + r_num}%;background:rgba(255,${r_bg - 25},${r_bg + 25},1);animation:love ${r_time + 5}s ease'></div>`);
}, 500);

var txt1 = `Hi SweetHeart...!
Now I want to say something special to you.
Please read everything carefully...
When I saw you for the first time, you seemed something special to me.
As the days went by, you got closer to me.
I don't know why your thoughts always resonate inside my mind.
Everything about you is interesting to me.
I am somewhat nervous because I haven't said these words to anyone, and I won't say them to anyone else in the future.
I love my parents so much, but now you are the only person whom I love equally with my parents.
I love you, SweetHeart...!
Give me one chance to prove my love...!`;

document.getElementById('text1').innerText = txt1;
