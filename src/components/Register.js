import React from 'react';

import './Register.css';

const Register = () => {
    return (
        <div className="Register">
            <div className="Register-img">
                <a>업로드할 이미지</a>
                <button>upload</button>
            </div>
            <div className="Register-input">
                <form>
                <label>Name: <input type="text" placeholder="이름을 입력하세요." required></input></label>
                <label>Age: <input type="number" placeholder="나이를 입력하세요." required></input></label>
                <button>submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;