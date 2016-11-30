function setup() {
    let canvas = document.getElementById("spill");
    canvas.width = 350;
    canvas.height = 500;
    let ctx = canvas.getContext("2d");

    let arrVegetable = ["gulrot", "brokkoli", "kål"];
    let arrFruit = ["eple", "pære", "kiwi", "appelsin"];
    let ord = velgOrd(arrVegetable,arrFruit);
    let keyCode;

    function velgOrd(a,b){
        let arrKat = [a,b];
        let katPlass = Math.floor(Math.random() * 2);
        let kategori = arrKat[katPlass];
        let ordPlass = Math.floor(Math.random() * kategori.length);
        let ord = kategori[ordPlass];
        return {ord,katPlass};
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
        
   

  document.addEventListener("keydown",tastNed);
  document.addEventListener("keyup",tastOpp);

 

    function tastNed(event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 37:
            boks.flytt(37);
            break;

            case 39:
            boks.flytt(39);
            break;
        }
        
  }

    function tastOpp(event) {

  }


    function animer(event) {
        ctx.clearRect(0, 0, 500, 500);
        boks.fall();
        boks.tegn(ctx, ord.ord);
    }
    
    function poeng(a, target) {
        if (target === 0 && a.x < 175) {
            poeng += 1;
        } else if (target === 1 && a.x > 175) {
            poeng += 1;
        } else { poeng += 0;
        }
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



