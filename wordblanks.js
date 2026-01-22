function WordBlanks(name,description,price){
    var result = "This Iphone " + name + description + "$"+price  ;
    return result;
}

console.log(WordBlanks("16 Pro Max ","May cost you ","1,40,000"));
console.log(WordBlanks("16 Pro  ","May cost you ","1,00,000"));