let a = '50-30';
print(a);
function print(a) {
    
    for (i = 0; i < a.length; i++) {
       
        if (a.charAt(i) == "+" || a.charAt(i) == "-" || a.charAt(i) == "*" || a.charAt(i) == "/" || a.charAt(i) == "%") {
            var k = 0;
            s = a.charAt(i);
            switch (s) {
                ///////////////
                case "+":
                    var k = 0;
                    a1 = a.split("+");
                    for (let j in a1) {
                        b = parseInt(a1[j])
                        k += b;
                    }
                    
                    break;
                ///////////////////
                case "-":

                    a1 = a.split("-");
                    for (let i in a1) {
                        b = parseInt(a1[i])
                        console.log(b)
                        k = k + b;
                    }

                    break;
                //////////////////
                case "*":
                    console.log(a.charAt(i));
                    break;
                /////////////////
                case "/":
                    console.log(a.charAt(i));
                    break;
                /////////////////
                case "%":
                    console.log(a.charAt(i));
                    break;
            }

        }
    }
    console.log(k)
}
