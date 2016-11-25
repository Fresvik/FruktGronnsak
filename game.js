function setup() {
    let canvas = document.getElementById("spill");
    canvas.width = 350;
    canvas.height = 500;
    let ctx = canvas.getContext("2d");

    let arrVegetable = ["gulrot", "brokkoli", "kål"];
    let arrFruit = ["eple", "pære", "kiwi", "appelsin"];
    let ord = velgOrd(arrVegetable,arrFruit);

    function velgOrd(a,b){
        let arrKat = [a,b];
        let kategori = arrKat[Math.floor(Math.random() * 2)];
        let ord = kategori[Math.floor(Math.random() * kategori.length)];
    }

    let boks = new Boks(120, 30, ctx);

    let b1 = new Kurv("blue");
    let b2 = new Kurv("red");

    function plasser() {
        b1.plasser(0, 0);
        b2.plasser(60, 0);
    }

    plasser();


    setInterval(animer, 20);


    function animer(event) {
        ctx.clearRect(0, 0, 500, 500);
        boks.fall();
        boks.tegn(ctx);
    }
    
    function visPoeng() {
        spanPTeller.innerHTML = "Du har " + poeng + " Poeng";
    }
}

function kollisjon(a, b) {
    return (
        a.x > b.x - a.w &&
        a.x < b.x + b.w &&
        a.y > b.y - a.h &&
        a.y < b.y + b.h
    );
}



