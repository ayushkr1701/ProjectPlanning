import React, {useEffect, useState} from 'react';
import CreateProject from '../modals/CreateProject'
import Card from './Card';
import { BsSearch} from 'react-icons/bs'


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [projectList, setTaskList] = useState([]);
    const [searchTerm, setSearchTerm]= useState("");
    
    useEffect(() => {
        let arr = localStorage.getItem("projectList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = projectList
        tempList.splice(index, 1)
        localStorage.setItem("projectList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = projectList
        tempList[index] = obj
        localStorage.setItem("projectList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (projectObj) => {
        let tempList = projectList
        tempList.push(projectObj)
        localStorage.setItem("projectList", JSON.stringify(tempList))
        setTaskList(projectList)
        setModal(false)
    }
    


    return (
        <>
            <div className='header text-center'>
                <div >
                    <h3>Project Planning Dashboard</h3>

                </div>
                <div >

                    <input
                      type="text" placeholder="Type to search..." onChange={(event)=>{
                    setSearchTerm(event.target.value)
                    }}
                    />

                </div>
                
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Project</button>
            </div>
            <div className = "project-container">

            {projectList && projectList.filter((obj)=>{
                if( searchTerm==""){
                    return obj
                } else if (obj.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||obj.Description.toLowerCase().includes(searchTerm.toLowerCase()) ){
                    return obj
                }
                

            }).map((obj , index) => <Card projectObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateProject toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;