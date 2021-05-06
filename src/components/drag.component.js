import React, { Component } from "react";
import { FileDrop } from 'react-file-drop';
import { GrImage } from "react-icons/gr";
import {ButtonGroup, Form, ToggleButton} from 'react-bootstrap';
import axios from 'axios';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export default class Drag extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name:"",
            checked: false,
            radioValue: "Textract",
            filename: ''
        };
        this.radios = [
            { name: 'Textract', value: '1' },
            { name: 'Rekognition', value: '2' },
        ];
        this.file = null;
        this.fileInputRef = React.createRef();
    }

    async handleSubmit(event) {
        event.preventDefault();
        var str = await toBase64(this.file)
        str = str.replace("data:", "").replace(/^.+,/, "");
        let requestBody = {
            user:global.username,
            title:this.state.name ,
            analyze: this.state.radioValue,
            picture: str
        };
        axios.post("https://spovx98jlh.execute-api.us-east-2.amazonaws.com/prod/newnote", requestBody)
        .then( res => {
            console.log(res);
            this.props.show();
        });

    }

    onTargetClick = () => {
        this.fileInputRef.current.click()
    }
    onFileInputChange = (event) => {
        this.file = event.target.files[0];
        this.setState({filename:this.file.name})
        // do something with your files...
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="user"
                           className="form-control"
                           placeholder="Ingrese el titulo de la nota"
                           onChange={(e)=>this.setState({name:e.target.value})}
                           value={this.state.name}
                    />
                </div>

                <Form.Group>
                    <label>Imagen</label>
                    <input
                        onChange={this.onFileInputChange}
                        ref={this.fileInputRef}
                        type="file"
                        style={{display:'none'}}
                        className="hidden"
                    />
                    <FileDrop
                        onDrop={(files, event) => { this.file = files[0]; this.setState({filename:this.file.name})}}
                        onTargetClick={this.onTargetClick}
                        >
                        Arrastra la imagen aquí!
                        <GrImage/>
                    </FileDrop>
                    <p>{this.state.filename}</p>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tipo de reconocimiento</Form.Label>
                        <br/>
                        <ButtonGroup toggle>
                            {this.radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.name}
                                checked={this.state.radioValue === radio.name}
                                onChange={(e) => this.setState({radioValue: e.currentTarget.value})}
                            >
                                {radio.name}
                            </ToggleButton>
                            ))}
                        </ButtonGroup>
                </Form.Group>

                <button type="submit" className="btn btn-primary btn-block" >Subir</button>               
            </form>
        );
    }
}