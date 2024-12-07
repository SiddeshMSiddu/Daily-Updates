function Grade({marks}){
    const Msg=(marks)=>{
    switch(true){
        case (marks>=35 && marks<=55): return "Just pass";
        case (marks>55 && marks<=65): return "first class"; 
        case (marks>65 && marks<=84): return "Second Class";
        case (marks>=85 && marks<=100): return "Distinction";
        case (marks<35):return "Better Luck Next Time"
        default: return "Invali marks"
    
    }
};
    
    return(
        <>
        <h1>marks:</h1>
        <p>{Msg(marks)}</p>
        </>
    );
        
}

export  default function Message(){
    return(
        <>
        <Grade marks="66"/>
        <Grade marks="35"/>
        </>
    )
}