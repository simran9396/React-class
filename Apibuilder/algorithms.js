let firstindex=0;
let lastindex=0;
const findindex=(findNum,arrNum)=>{
    const mid=Math.floor((firstindex+lastindex)/2)
    if(arrNum[mid]===findnum){
        return mid
    } else if(arrNum[mid]>findnum){

            lastindex=mid
    }
    else{
      firstindex=mid;
    }

}

const bisectionAlgo=(arrNum,findnum)=>{
   
}
console.log(bisectionAlgo([2,4,6,10,12,18,30,36,45,50,55,60,74,85,100,120,150],120))