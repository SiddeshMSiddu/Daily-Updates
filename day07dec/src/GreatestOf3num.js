
import React, { useState, useEffect } from "react";
function Greatest({ a, b, c }) {
    const [result, setResult] = useState('');
    const findGreatest = () => {
        if (a > b) {
            if (a > c) {
                setResult(`${a} is greatest`);
            } else {
                setResult(`${c} is greatest`);
            }
        } else {
            if (b > c) {
                setResult(`${b} is greatest`);
            } else {
                setResult(`${c} is greatest`);
            }
        }
    };
    useEffect(() => {
        findGreatest();
    }, [a, b, c]);
    return (
        <>
            <p className="res">{result}</p>
        </>

    )
}

export default function Result() {
    return (
        <>
            <h1>Greatest Number</h1>
            <Greatest a={150} b={60} c={90} />
            <Greatest a={150} b={600} c={90} />
            <Greatest a={150} b={60} c={900} />
        </>

    );
}