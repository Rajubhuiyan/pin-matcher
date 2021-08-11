    //Pin input 
    
    var generateButton = document.getElementById("genarate-button");
    generateButton.addEventListener("click", inputForm);
        
    function inputForm() {
        const value = document.getElementById("form").value;
        const randomNum = Math.ceil(Math.random() * 9000 + 999);
        document.getElementById("form").value = randomNum;
    };
    
    // Calculator Side

    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", pinMatch);

    function pinMatch(){
        var formone = document.getElementById("form").value;
        var formtwo = document.getElementById("lastForm").value;
        if (formone == "" || formtwo == "") {
            alert("You Didn't Generate Any Number");
        }
         else if(formone == formtwo) { 
             document.getElementById("match").style.display = 'block';
             document.getElementById("didnt").style.display = 'none';
        }
        else{
            document.getElementById("didnt").style.display = 'block';
            document.getElementById("match").style.display = 'none';
            
            
        };
        
    };

    // left button try

    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", leftButton);

    function leftButton() {
        var formone = document.getElementById("form").value;
        var formtwo = document.getElementById("lastForm").value;
        if (formone !== formtwo) {
        const leftSetting = document.getElementById("left").innerText;
        let newLeft = parseFloat(leftSetting);
        newLeft = newLeft - 1;
        document.getElementById("left").innerText = newLeft;
        if (newLeft == 0){
            document.getElementById("foroff").style.display = 'none';
        };
        };
    };