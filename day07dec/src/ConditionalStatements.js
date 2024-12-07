function Check({output,condition}){
   if(condition){
    return <li>{output}</li>
   }else{
    return <li>{output}</li>
   }
}

export default function Output(){
    return(
        <>
             <ol>
            <Check output="Positive"
            condition={0}/>
            <Check output="Negative"
            condition={-1}/>
        </ol>
        </>
       
    )
}