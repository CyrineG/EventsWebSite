import React from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col
} from "reactstrap";

function SignUp() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [userFocus, setUserFocus] = React.useState(false);
    const [passFocus, setPassFocus] = React.useState(false);

    const [showPassword, setShowPassword] = React.useState(false);


    let state = {
            first_name: 'c',
            last_name: 'c',
            user_name: 'c',
            pwd: 'c'
        }

   const onFNameChange = (event) => {
        state.first_name= event.target.value
    };

    const onLNameChange = (event) => {
        state.last_name= event.target.value
    };

    const onUNameChange = (event) => {
        state.user_name= event.target.value
    };

    const onPwdChange = (event) => {
        state.pwd= event.target.value
    };


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const onSubmitRegister = () => {
        fetch('http://localhost:8888/signup.php', {
            method:'post',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                first_name: state.first_name,
                last_name: state.last_name,
                user_name: state.user_name,
                pwd: state.pwd
            })
        }).then(response => response.json());
        /*.then (user => {
            if (user){
            this.props.loadUser(user);
            this.props.onRouteChange('home')
        }
        })*/
    }
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <div className="page-header clear-filter" filter-color="#5b14ff">
            <div
                className="page-header-image"
                style={{
                    backgroundImage: "url(" + require("assets/img/event3.jpg") + ")"
                }}
            ></div>

            <Container>
                <Col className="ml-auto mr-auto" md="4">
                    <Card className="card-login card-plain">
                        <Form action="" className="form" method="">
                            <CardHeader >
                                <h1>
                                    Sign Up
                                </h1>
                            </CardHeader>
                            <CardBody>
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons users_circle-08"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="First Name..."
                                        type="text"
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                        onChange= {onFNameChange}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (lastFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons users_circle-08"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Last Name..."
                                        type="text"
                                        onFocus={() => setLastFocus(true)}
                                        onBlur={() => setLastFocus(false)}
                                        onChange= {onLNameChange}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (userFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons text_caps-small"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Username..."
                                        type="text"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                        onChange= {onUNameChange}
                                    ></Input>
                                </InputGroup>
                                <InputGroup style={{ marginBottom: "4px" }}
                                    className={
                                        "no-border input-lg" +
                                        (passFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password..."
                                        type={showPassword ? 'text' : 'password'}
                                        onFocus={() => setPassFocus(true)}
                                        onBlur={() => setPassFocus(false)}
                                        onChange= {onPwdChange}
                                    ></Input>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText style={{ padding: "15px 16px 15px" }}>
                                            <i

                                                class={showPassword ? 'far fa-eye-slash' : 'fa fa-eye'}
                                                onClick={handleClickShowPassword}

                                            >
                                            </i>
                                        </InputGroupText>


                                    </InputGroupAddon>
                                </InputGroup>
                            </CardBody>
                            <CardFooter >
                                <Button
                                    block
                                    className="btn-round"
                                    color="info"
                                    size="lg"
                                    onClick={onSubmitRegister}
                                >
                                    Get Started
                    </Button>
                                <div className="pull-left">
                                    <h6>
                                        <Link
                                            className="link"
                                            to="/home"                                        >
                                            Go back
                                        </Link>
                                    </h6>
                                </div>

                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Container>
        </div >

    );
}
export default SignUp;