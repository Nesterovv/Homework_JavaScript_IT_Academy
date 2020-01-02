var arr = [7, 3, 4, 1];
let zero;

function sumArr(arr) {
    for (i=0; i<arr.length; i++){
    let elem = arr[i];

   for(j = i + 1; j < arr.length; j++) {
      let item = arr[j];
      if (elem+item ==8) {
          console.log(true);
      }
      else if (elem+item !==8){
        console.log(false);
      }
}
}
};
sumArr(arr);


