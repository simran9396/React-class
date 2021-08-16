const initialState={
    empData:[
        {
            name:"simran",
            img:"Images/1.png",
            desc:"React developer",
            details:"dolorem voluptatibus corporis illum possimus consequuntur asperiores error ipsam sit. "
        },
        {
            name:"simran",
            img:"Images/1.png",
            desc:"React developer",
            details:"dolorem voluptatibus corporis illum possimus consequuntur asperiores error ipsam sit. "

        },
    ]
}

export const empdetailsReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_EMP":
            return{...state,empData:[action.empData,...state.empData]}
            default:
                return state
    }
}