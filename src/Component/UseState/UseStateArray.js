import React from 'react'

function UseStateArray() {
    let obj = [
        {
            id: 1, name: "vaishnav", age: 23
        },
        {
            id: 2, name: "ajay", age: 24
        },
        {
            id: 3, name: "rajesh", age: 25
        }
    ]
    let [data, setData] = React.useState(obj);

    function clear() {
        setData([]);
    }
    function reset(){
        
        setData(obj);
    }
    const remove=(id)=>{
        alert(id);
        let newObj=data.filter((ele)=>{
            return(
                ele.id!==id
            )
        })
        setData(newObj);

    }
    return (
        <>
        <h1>UseStateArray</h1>
            {
                data.map((ele) => {
                    return (
                        <>
                            <div key={ele.id}>My name is {ele.name} age is : {ele.age}
                                <button onClick={()=>remove(ele.id)}>remove</button> {/* if you don't give call back function whenever this is rendered it will always called*/}
                                
                            </div>

                        </>
                    )

                })

            }
            <button onClick={clear}>Clear</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default UseStateArray