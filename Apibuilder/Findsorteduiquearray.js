const findsortedarray=(objarr)=>{

  let meregedarr=[]
    objarr.data.forEach(element => {
        meregedarr=[...meregedarr,...element]
        
    });
    const uniquearr=[...new Set(meregedarr)].sort((a,b)=>a-b)
    return uniquearr
}

console.log(findsortedarray({
    data:[[25,12,14,1,24],
        [35,24,13,2],
        [7,1,75,24,15,7],
        [12,54,21,445,4]],
}))