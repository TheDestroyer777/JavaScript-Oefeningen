function macht(x, n){
    //basisgeval
    if(n === 0) {
        return 1;
    } else{
        //recursieve aanroep
        return x * macht(x, n - 1);
    }
}

console.log(macht(2, 8));