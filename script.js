const n=20;
const array=[];
ini();

function ini(){
    array[0] = 0.454364;
    array[1] = 0.875884;
    array[2] = 0.286566;
    array[3] = 0.677658;
    array[4] = 0.974535;
    array[5] = 0.365575;
    array[6] = 0.764364;
    array[7] = 0.115884;
    array[8] = 0.199566;
    array[9] = 0.77658;
    array[10] = 0.556435;
    array[11] = 0.88545;
    array[12] = 0.68764;
    array[13] = 0.300884;
    array[14] = 0.778576566;
    array[15] = 0.2774797658;
    array[16] = 0.5745675795;
    array[17] = 0.3655796985;
    array[18] = 0.68854364895895;
    array[19] = 0.98758849898985;
    showBars();
}

function init(){
    for(let i=0;i<n;i++){
        array[i]=  Math.random();
        console.log(array[i]);
    }
    showBars();
}

function play(){
    const swaps=bubbleSort([...array]);
    animate(swaps);
}

function slay(){
    const swaps=selectionSort([...array]);
    animate(swaps);
}

function animate(swaps){
    if(swaps.length==0){
        showBars();
        return;
    }
    const [i,j]=swaps.shift(0);
    [array[i],array[j]]=[array[j],array[i]];
    showBars([i,j]);
    setTimeout(function(){
        animate(swaps);
    },500);
}



function selectionSort(array) {
    const swaps=[];
    for (let i = 0; i < array.length - 1; i++) {
  
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }     
      }
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      swaps.push([i,minIndex]);
    }
    return swaps;
  }

function bubbleSort(array){
    const swaps=[];
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){
                swaps.push([i-1,i]);
                swapped=true;
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
        }
    }while(swapped);
    return swaps;
}

function showBars(indices){
    container.innerHTML="";
    for(let i=0;i<array.length;i++){
        const bar=document.createElement("div");
        bar.style.height= array[i]*100 +"%";
        bar.classList.add("bar");
        if(indices && indices.includes(i)){
            bar.style.backgroundColor="purple";
        }
        container.appendChild(bar);
    }   
}
