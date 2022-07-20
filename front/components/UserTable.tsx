import React from 'react'

interface row_type  {
    age: any;
    name: any;
    hobby: any;
}

type userType = {
    name: string;
    age: number;
    hobby: string;
}

interface IProps {
    user_data: userType [];
    setSelectedRowNum: (e: number ) => void;
    setSelectedRows?: (rows: userType []) => void;
    selectedRowNum?: number;
    setUserList?: (e: any) => any
}

const UserTable = ({user_data, selectedRowNum, setSelectedRows, setSelectedRowNum, setUserList}: IProps) => {

    function plus1(i: any, age: any) {
        const new_rows = user_data ? user_data.map((row: any, index: any) => {
            if (index == i) {
                return {
                    ...row,
                    age: age + 1
                }
            } else {
                return {
                    ...row
                }
            }
        }) : ""
        setUserList && setUserList(new_rows);
    }

    function handleCheck(e:React.ChangeEvent<HTMLInputElement>) {
        console.log("e : ", e, user_data);
        // const newRows = user_data[e]
        // console.log("newRows : ", newRows);
        // setSelectedRows(newRows);
        //  console.log(e.target.value);
     
        setSelectedRowNum && setSelectedRowNum(parseInt(e.target.value));
        

    }

    return (
        <div>
            {selectedRowNum ?

                <div>
                    {user_data ? (
                    user_data[selectedRowNum].name ,
                    user_data[selectedRowNum].age,
                    user_data[selectedRowNum].hobby) 
                    : ""}

                </div>
                : ""
            }
            <table border={1} width={500}>
                {user_data ? user_data.map((row: userType , index:number) => {
                    return (
                        <tr>
                            <td><input type="checkbox" onChange={(e) => handleCheck(e)} value={index} /></td>
                            <td>{row.name}</td>
                            <td>{row.age} <button onClick={() => plus1(index, row.age)}>+</button> </td>
                            {/* <td>{row.age} <button onClick={(e) => plus1}>+</button> </td> */}
                            <td>{row.hobby}</td>
                        </tr>
                    )
                }) : ""}
            </table>

        </div>
    )
}

export default UserTable;