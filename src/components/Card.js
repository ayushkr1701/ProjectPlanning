import React, {useState} from 'react';
import EditProject from '../modals/EditProject'

const Card = ({projectObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"]

    // const colors = [
    //     {
    //         primaryColor : "#5D93E1",
    //         secondaryColor : "#ECF3FC"
    //     },
    //     {
    //         primaryColor : "#F9D288",
    //         secondaryColor : "#FEFAF1"
    //     },
    //     {
    //         primaryColor : "#5DC250",
    //         secondaryColor : "#F2FAF1"
    //     },
    //     {
    //         primaryColor : "#F48687",
    //         secondaryColor : "#FDF1F1"
    //     },
    //     {
    //         primaryColor : "#B964F7",
    //         secondaryColor : "#F3F0FD"
    //     }
    // ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" ></div>
            <div class = "project-holder">
                <span class = "card-header" style={{"background-color": colors[0], "border-radius": "10px"}}>{projectObj.Name}</span>
                <p className = "mt-3">{projectObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : 'black', "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : 'black', "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditProject modal = {modal} toggle = {toggle} updateTask = {updateTask} projectObj = {projectObj}/>
        </div>
    );
};

export default Card;