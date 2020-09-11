function bttnRandom() {
    x = Math.floor(Math.random() * 3);
    switch(x){
        case 0:
        window.location.href="shimeji.html"
        break;
        case 1:
        window.location.href="cebola_caramelo.html"
        break;
        case 2:
            window.location.href="strogonoff.html"
        break;
    }
    
}