import React,{useState,useEffect, createContext, useCallback, memo} from 'react'
const UserContext = createContext();
const ThemeContext = createContext()

const Btn = memo((props) => {
    console.log(props.title)
    return <button onClick={props.increment}> +1a  </button>
})


export default function Home() {
    const [count, setCount] = useState(0);
    const [isShow, setShow] = useState(false)
    const increment1 = () => {
        console.log('increment1')
        setCount(count + 1 )
    }
    const increment2 = useCallback(() => {
        console.log('increment2')
        setCount(count + 1 )
    }, [count])
    return (
        <div>
            <p>{count}</p>
            <Btn title="increment 1 btn" increment={increment1}></Btn>
            <Btn title="increment 2 btn" increment={increment2}></Btn>
            <button onClick={e => {setShow(!isShow)}}>切换</button>
        </div>
    )
}
