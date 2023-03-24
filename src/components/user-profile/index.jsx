import {useEffect, useState} from "react";
import Header from "../header/header"
import img from "../../assets/images/profile.jpeg";
import eye from "../../assets/images/eye.svg";
import './index.scss'

const UserProfile = () => {

const [name, setName] = useState('Martin');
const [email, setEmail] = useState('martin123@gmail.com');
const [username, setUsername] = useState('martin123');
const [password, setPasswrord] = useState('123456');
const [isEditable, setIsEditable] = useState(false);
const handleEdit = () => {
    if (isEditable){
        document.getElementById('text_input').readOnly = true;
        document.getElementById('email_input').readOnly = true;
        document.getElementById('username_input').readOnly = true;
        document.getElementById('password_input').readOnly = true;
    }
    else{
        document.getElementById('text_input').readOnly = false;
        document.getElementById('email_input').readOnly = false;
        document.getElementById('username_input').readOnly = false;
        document.getElementById('password_input').readOnly = false;
    }
    setIsEditable(!isEditable);
}

  return (
    <>
    <div className="main-container">
        <Header />  
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-md-4 profile-img">
                    <img 
                        src={img} 
                        alt=""
                        className="profile-image" />
                    <h1
                     className="img_text">
                        <strong>Martin</strong>
                     </h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                <label className="col-form-label px-2"
                >Edit: </label>
                <input type="checkbox" name="edit" id="edit" onClick={handleEdit}/>
            
            <form>
                <div 
                    className="form-group row mb-2"
                    style={{backgroundColor: "#111111", borderRadius: "10px"}}
                    >
                    <label className="col-sm-2 col-form-label"
                        style={{color: 'white', fontSize: '30px'}} 
                            >Name: </label>
                    <div class="col-sm-10">
                    <input 
                        type="text" 
                        readOnly={true}
                        className="form-control-plaintext text-align-right"
                        style={{color: 'white', fontSize: '30px'}} 

                        id="text_input" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                
                <div className="form-group row mb-2"
                    style={{backgroundColor: "#111111", borderRadius: "10px"}}
                >
                    <label className="col-sm-2 col-form-label"
                            style={{color: 'white', fontSize: '30px'}} 
                    >Email: </label>
                    <div class="col-sm-10">
                    <input 
                        type="email" 
                        readOnly={true}
                        className="form-control-plaintext" 
                        style={{color: 'white', fontSize: '30px'}} 
                        id="email_input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group row mb-2"
                    style={{backgroundColor: "#111111", borderRadius: "10px"}}>
                    <label className="col-sm-2 col-form-label"
                        style={{color: 'white', fontSize: '30px'}}>Username: </label>
                    <div class="col-sm-10">
                    <input 
                        type="username" 
                        readOnly={true}
                        className="form-control-plaintext" 
                        style={{color: 'white', fontSize: '30px'}}
                        id="username_input" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>

                
                <div className="form-group row mb-3"
                    style={{backgroundColor: "#111111", borderRadius: "10px"}}
                >
                    <label className="col-sm-2 col-form-label"
                    style={{color: 'white', fontSize: '30px'}}>Password: </label>
                    <div class="col-sm-10">
                    <input 
                        type="password" 
                        readOnly={true}
                        className="form-control-plaintext" 
                        style={{color: 'white', fontSize: '30px'}}
                        id="password_input" 
                        value={password}
                        onChange={(e) => setPasswrord(e.target.value)}
                        />
                    </div>
                </div>

            </form>
    
                </div>
                </div>
        </div>
    </div>
    </>    
  );
}

export default UserProfile