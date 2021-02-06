import React, { isValidElement } from 'react'
import Link from 'next/link'
import { Formik, Field, Form } from 'formik'

import Button from "../common/button"
import { any } from 'prop-types';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

interface signUp {
    id?: any,
    onRequirements?: any,
};

const SignUp: React.FC<signUp> = ({id, onRequirements}) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', checkbox: false, }}
            validateOnMount={true}
            validate={values => {
            let errors = {};
                if (!values.email) {
                    errors.email = 'Поле обязательно для ввода';
                } else if (
                    !/^[A-Z0-9._%+-]+@gmail+\.[com]{2,}$/i.test(values.email) 
                ) {
                    errors.email = 'Некорректный email, используйте Gmail';
                } 
                if (!values.password) {
                    errors.password = 'Поле обязательно для ввода';
                } else if (
                    (values.password.length < 8 || values.password.length > 15) 
                ) {
                    errors.password = 'Пароль должен содержать от 8 до 15 символов';
                } 
                if (!values.checkbox) {
                    errors.checkbox = 'Пожалуйста, ознакомьтесь с требованиями';
                } else {
                    values.checkbox = true;
                }
                if (!values) {
                    null;
                }
                console.log(errors);
                return errors;
            }}
            onSubmit={async (values, actions) => {
                actions.setSubmitting(false);
                actions.resetForm({
                    values: {
                        email: '',
                        password: '',
                        checkbox: false,
                    },
                });
                await sleep(500);
                alert(values);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
            }) => (
                <Form id={id} action="POST" onSubmit={handleSubmit} className="modal_form">
                    <input 
                        className="modal_inputs" 
                        placeholder="Gmail" 
                        name="email" 
                        type="email"                         
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input 
                        className="modal_inputs" 
                        placeholder="пароль" 
                        type="password" 
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <p className="modal_info">На ваш Gmail будет выслано письмо ссылкой для входа в личный кабинет после оплаты</p>
                    <div className="flex align_center modal_checkbox">                
                        <Field 
                            type="checkbox" 
                            id="check" 
                            className="checkbox" 
                            name="checkbox" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="check">
                            <Link href="/#for_educate">
                                <a className="modal_requirement" onClick={onRequirements}>
                                    я ознакомился/лась с требованиями для обучения
                                </a>
                            </Link>
                        </label>
                    </div>      
                    {errors.checkbox && touched.checkbox && errors.checkbox}              
                    <Button linkText="ОПЛАТИТЬ" link="/" classes={!isValid ? "button form_button" : "button form_button active"}>
                        <button className={!isValid ? "modal_button" : "modal_button active"} type="submit" onClick={() => console.log(isSubmitting, isValid)} disabled={isSubmitting}>ОПЛАТИТЬ</button>
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default SignUp