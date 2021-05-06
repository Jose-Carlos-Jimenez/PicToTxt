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
            radioValue: "Textract"
        };
        this.radios = [
            { name: 'Textract', value: '1' },
            { name: 'Rekognition', value: '2' },
        ];
        this.file = null;
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
        });
        this.props.show();
        this.props.refresh();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="user" className="form-control" placeholder="Ingrese el titulo de la nota"
                        onChange={(e)=>this.setState({name:e.target.value})}
                        value={this.state.name}
                    />
                </div>

                <div className="form-group">
                    <label>Imagen</label>
                    <FileDrop
                        onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
                        onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
                        onFrameDrop={(event) => console.log('onFrameDrop', event)}
                        onDragOver={(event) => console.log('onDragOver', event)}
                        onDragLeave={(event) => console.log('onDragLeave', event)}
                        onDrop={(files, event) => {console.log('onDrop!', typeof files[0], event); this.file = files[0]}}
                        >
                        Arrastra la imagen aquí!
                        <GrImage></GrImage>
                    </FileDrop>
                </div>
                <Form.Group>
                    <Form.Label>Tipo de reconocimiento</Form.Label>
                        <br></br>
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