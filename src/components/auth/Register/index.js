import React, { useState } from 'react'
import FloatingLabelInput from '../../../common/FloatingLabelInput'
import { language } from '../../../Utils'
// import '../auth.scss'

function Register() {
    const [data, setData] = useState({});
    const onChangeHandler = (e) => {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className='auth'>
            <div className=" main">
                <section className='section1'>
                    <h2>Signup</h2>
                    <p>{language.signup_message}</p>
                </section>
                <section className='section2'>
                    <FloatingLabelInput
                        className="FloatingLabelInput"
                        label={"First Name"}
                        name="fName"
                        onChange={onChangeHandler}
                        value={data.fName}
                    />
                    <FloatingLabelInput
                        className="FloatingLabelInput"
                        label={"Last Name"}
                        name="lName"
                        onChange={onChangeHandler}
                        value={data.lName}
                    />
                    <FloatingLabelInput
                        className="FloatingLabelInput"
                        label={"Email"}
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                    />

                    <FloatingLabelInput
                        className="FloatingLabelInput"
                        label={"Password"}
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                    />
                    <FloatingLabelInput
                        className="FloatingLabelInput"
                        label={"Confirm Password"}
                        name="confirmPassword"
                        onChange={onChangeHandler}
                        value={data.confirmPassword}
                    />
                    <button className='butt'>SignUp</button>

                </section>
            </div>
        </div>
    )
}

export default Register

