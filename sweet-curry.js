function mult2(arg){
    return function(a){
        return a * arg
    }
}
function add3(arg){
    return function (a){
        return function (b){
            return arg+a+b
        }
    }
    
}
function sub4(arg){
    return function (a){
        return function (b){
            return function (c){
                return arg-a-b-c
            }
        }
    }
    
}