import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateProjectPopup = ({modal, toggle, save}) => {
    const [projectName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "projectName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let projectObj = {}
        projectObj["Name"] = projectName
        projectObj["Description"] = description
        save(projectObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Project</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Project Name</label>
                        <input type="text" className = "form-control" value = {projectName} onChange = {handleChange} name = "projectName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateProjectPopup;