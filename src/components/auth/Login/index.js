import React, { useState } from 'react'
import FloatingLabelInput from '../../../common/FloatingLabelInput'
import { language } from '../../../Utils'
// import '../auth.scss'

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    return (
        <div className='auth'>
            <div className="main">
                <section className='section1'>
                    <h2>Login</h2>
                    <p>{language.login_message}</p>
                </section>
                <section className='section2'>
                    <FloatingLabelInput
                        className="FloatingLabelInput"
                        label={"Email"}
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={Email}
                    />
                    <FloatingLabelInput
                        className="FloatingLabelInput"
                        label={"Password"}
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={Password}
                    />
                    <button className='butt'>Login</button>

                </section>
            </div>
        </div>
    )
}

export default Login

