for(let i=0;i<=5;i++){
    let row=""
    for(let j=0;j<=5-i;j++){
        row+="  "
    }
    for(j=0;j<=i;j++){
        row+="* "
    }
    console.log(row);
}