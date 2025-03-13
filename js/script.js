function insert(num){
    var number = document.getElementById('result').innerHTML;
    if (number==='0'){
        document.getElementById('result').innerHTML=num;
    }else{
        document.getElementById('result').innerHTML = number + num;
    }
}

function clean(){
    document.getElementById('result').innerHTML = "0"
    }

function backs(){
    var res = document.getElementById('result').innerHTML;

    if (res === '0'){

    }else{
        if( res.length === 1){
            document.getElementById('result').innerHTML= '0';
        }else{
            document.getElementById('result').innerHTML = res.substring(0, res.length-1)
        }
}
}

function calculate(){
    var res = document.getElementById('result').innerHTML;

    if(res){
        result = eval(res.replace(/÷/g, "/")
                                                                .replace(/x/g, "*")
                                                                .replace(/%/g, "%")
                                                                .replace(/,/g, "."))

        document.getElementById('result').innerHTML = result
    }
}