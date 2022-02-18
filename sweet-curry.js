function mult2(arg){
    return function(b){
        return arg*b
    }
}
function add3(arg){
    return function(b){
        return function(c){
            return arg+b+c
        }
    }
}
function sub4(arg){
    return function(b){
        return function(c){
            return function(d){
                return arg-b-c-d
            }
        }
    }
}