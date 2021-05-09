class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        //if (score = 0) {
        //img = loadImage('js/treasure.jpg');
        //}
        if (actualCode === enteredCode.toUpperCase())
        {
          return true
        }
        else
        return false
    }

}