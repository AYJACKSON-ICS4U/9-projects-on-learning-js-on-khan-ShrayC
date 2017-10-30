var book = [
    {
        title: "The Giver",
        author: "person 1",
        stars: 4
    },
    {
        title: "book 2",
        author: "person 2",
        stars: 3
    },
    {
        title: "book 3",
        author: "person 3",
        stars: 1
    }
];
// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);
for(var count = 0; count < book.length;count++){
    fill(214, 255, 219);
    rect(count*100+10, 20, 90, 100);
    fill(0, 0, 0);
    textSize(12);
    text(book[count].title, count*100+16, 29, 70, 100);
    textSize(10);
    text(book[count].author, count*100+16, 45, 70, 100);
    for (var i = 0; i < book[count].stars; i++) {
        image(getImage("cute/Star"), (13 + i * 20)+count*100, 90, 20, 30);
    }
}
