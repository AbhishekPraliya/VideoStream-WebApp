export const API_KEY='AIzaSyBGvZSB1W4IV-0U6elXwQ9oFrCM6pIWs-8'

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}

