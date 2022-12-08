const initialState = "all Products";

const sendTheData=(state = initialState, action) =>{

    switch(action.type){
        case 'RATING' : return 'rating';
        case 'DISCOUNT' : return 'discount';
        case 'PRIZE':return 'prize'
        default: return state;
    } 
}

export default sendTheData ;