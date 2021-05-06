import React, { Component } from "react";
import { Modal, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { Fab, Action } from 'react-tiny-fab';
import { GrAdd,GrMicrophone, GrDocumentImage, GrPowerShutdown } from "react-icons/gr";
import Drag from './drag.component';

const languages = [
    ["Afrikaans", "af"],
    ["Albanian", "sq"],
    ["Amharic", "am"],
    ["Arabic", "ar"],
    ["Armenian", "hy"],
    ["Azerbaijani", "az"],
    ["Bengali", "bn"],
    ["Bosnian", "bs"],
    ["Bulgarian", "bg"],
    ["Catalan", "ca"],
    ["Chinese", "zh"],
    ["Chinese (Traditional)", "zh-TW"],
    ["Croatian", "hr"],
    ["Czech", "cs"],
    ["Danish", "da"],
    ["Dari", "fa-AF"],
    ["Dutch", "nl"],
    ["English", "en"],
    ["Estonian", "et"],
    ["Farsi (Persian)", "fa"],
    ["Filipino Tagalog", "tl"],
    ["Finnish", "fi"],
    ["French", "fr"],
    ["French (Canada)", "fr-CA"],
    ["Georgian", "ka"],
    ["German", "de"],
    ["Greek", "el"],
    ["Gujarati", "gu"],
    ["Haitian Creole", "ht"],
    ["Hausa", "ha"],
    ["Hebrew", "he"],
    ["Hindi", "hi"],
    ["Hungarian", "hu"],
    ["Icelandic", "is"],
    ["Indonesian", "id"],
    ["Italian", "it"],
    ["Japanese", "ja"],
    ["Kannada", "kn"],
    ["Kazakh", "kk"],
    ["Korean", "ko"],
    ["Latvian", "lv"],
    ["Lithuanian", "lt"],
    ["Macedonian", "mk"],
    ["Malay", "ms"],
    ["Malayalam", "ml"],
    ["Maltese", "mt"],
    ["Mongolian", "mn"],
    ["Norwegian", "no"],
    ["Persian", "fa"],
    ["Pashto", "ps"],
    ["Polish", "pl"],
    ["Portuguese", "pt"],
    ["Romanian", "ro"],
    ["Russian", "ru"],
    ["Serbian", "sr"],
    ["Sinhala", "si"],
    ["Slovak", "sk"],
    ["Slovenian", "sl"],
    ["Somali", "so"],
    ["Spanish", "es"],
    ["Spanish (Mexico)", "es-MX"],
    ["Swahili", "sw"],
    ["Swedish", "sv"],
    ["Tagalog", "tl"],
    ["Tamil", "ta"],
    ["Telugu", "te"],
    ["Thai", "th"],
    ["Turkish", "tr"],
    ["Ukrainian", "uk"],
    ["Urdu", "ur"],
    ["Uzbek", "uz"],
    ["Vietnamese", "vi"],
    ["Welsh", "cy"]
];

export default class Home extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            showTranslate: false,
            language: "en",
            traduccion: "",
            showDrag: false,
            showMicro: false
        };
        this.note = {
            titulo: "",
            texto: [],
            idNota: ""
        };
        this.refresh = this.refresh.bind(this);
    };

    closeDrag = () =>{
        this.setState({showDrag:false});
    };
    
    microphone = () =>{
        alert("Hueco");
    };

    picture = () => {
        this.setState({showDrag:true});
    };

    refresh = () => {
        this.forceUpdate();
    };

    componentDidMount() {
        axios.post("https://spovx98jlh.execute-api.us-east-2.amazonaws.com/prod/getnotes", { user: "josecarlos" })
            .then(res => {
                this.setState({ notes: res.data });
            });
    }

    componentDidUpdate()
    {
        axios.post("https://spovx98jlh.execute-api.us-east-2.amazonaws.com/prod/getnotes", { user: "josecarlos" })
            .then(res => {
                this.setState({ notes: res.data });
            });
    }

    traduct = () => {
        let req = { idNote: this.note.idNota, code: this.state.language };
        console.log(req);
        axios.post("https://spovx98jlh.execute-api.us-east-2.amazonaws.com/prod/translate", req)
            .then(res => {
                console.log(res.data);
                this.setState({ traduccion: res.data });
            });
    }

    manageEvent(note) {
        this.note.titulo = note.titulo;
        this.note.texto = note.texto;
        this.note.idNota = note.idNota;
        this.setState({ showTranslate: true });
        console.log(note);
    }

    render() {
        return (
            <div className="row m-0 p-5 justify-content-center">
                {
                    this.state.notes.map((note) => (
                        <div className="post-it-note" key={note.idNota} onClick={() => this.manageEvent(note)}>
                            <i className="pin"></i>
                            <h4>{note.titulo}</h4>
                            {note.texto.map((t) => (<p key={t}>{t}</p>))}
                        </div>))
                }
                <Fab
                    alwaysShowTitle={true}
                    icon={<GrAdd />}
                    color="warning"
                >
                    <Action
                        text="Imagen"
                        children={<GrDocumentImage />}
                        onClick={this.picture}
                    ></Action>
                    <Action
                        text="Voz"
                        children={<GrMicrophone />}
                        onClick={this.microphone}
                    ></Action>
                </Fab>
                <Modal
                    show={this.state.showDrag}
                    onHide={() => {this.setState({showDrag:false})}}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Añadir nota</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Drag show={this.closeDrag} refresh={this.refresh}></Drag>
                    </Modal.Body>
                </Modal>
                <Modal
                    show={this.state.showTranslate}
                    onHide={() => this.setState({ showTranslate: false, traduccion: "" })}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Obtener traducción</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>{this.note.titulo}</h1>
                        {this.note.texto.map((t) => (<p key={t}>{t}</p>))}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" >
                                Selecciona un idioma
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ overflowY: "scroll", maxHeight: "200px" }} >
                                {languages.map((key) => (<Dropdown.Item key={key[1]} onClick={() => this.setState({ language: key[1] })}>{key[0]}</Dropdown.Item>))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="row justify-content-center">
                            <button type="button" className="btn btn-success" onClick={() => this.traduct()} >Traducir</button>
                        </div>
                        <div className="row justify-content-center m-3">
                            <p>{this.state.traduccion}</p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}