function oblicz(){
    var waga = document.getElementById("Waga").value;
    waga = parseInt(waga);
    
    var wzrost = document.getElementById("Wzrost").value;
    wzrost = parseInt(wzrost)/100;
    
    var bmi = waga/(wzrost*wzrost);
    
    
        document.getElementById("wynik").innerHTML= bmi.toFixed(2) ;
    
    
    
        if (bmi<16){
            document.getElementById("slownie").innerHTML="Wygłodzenie";
    }
        else if ((bmi>=16)&& (bmi<17)) {
            document.getElementById("slownie").innerHTML="Wychudzenie";
    }
        else if ((bmi>=17)&& (bmi<18.5)) {
            document.getElementById("slownie").innerHTML="Niedowaga";
    }
        else if ((bmi>=18.5)&& (bmi<25)) {
            document.getElementById("slownie").innerHTML="Waga Prawidłowa";
    }
        else if ((bmi>=25)&& (bmi<30)) {
             document.getElementById("slownie").innerHTML="Nadwaga";
    }
        else if ((bmi>=30)&& (bmi<35)) {
            document.getElementById("slownie").innerHTML="Otyłość 1 stopnia";
    }
        else if ((bmi>=35)&& (bmi<40)) {
            document.getElementById("slownie").innerHTML="Otyłość 2 stopnia";
    }
        else if (bmi>=40) {
            document.getElementById("slownie").innerHTML="Otyłość 3 stopnia";
    }
    
    

}
    