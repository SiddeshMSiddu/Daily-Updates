import { useState } from "react";


export default function Btn(){
    const [count,setcount]=useState(0);

    function Handleclick(){
        setcount(count+1);
    }
    return(
        <>
         <MyBtn count={count} onClick={Handleclick}/>
         <MyBtn count={count} onClick={Handleclick}/>
        <Mybutton/>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
        </>
       
    )
    function Profile() {
        return (
          <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
            className="ScientistImg"
          />
        );
      }
      
     
    function MyBtn({ count, onClick }){
        return (
            <button onClick={onClick}>
              Clicked {count} times
            </button>
          );

    }

    function Mybutton(){
        function Handle(){
            alert('Warning')
        }
        return(
            <button onClick={Handle}>Click</button>
        )
    }

}