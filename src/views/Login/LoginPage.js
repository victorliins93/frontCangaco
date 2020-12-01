import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from 'components/CustomInput/CustomInput';
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { login } from "api/apiCalls";
import Snackbar from "components/Snackbar/Snackbar";

import { isInvalid } from 'utils/util';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton } from "@material-ui/core";


const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const [email, setEmail] = React.useState("")
  const [senha, setSenha] = React.useState("")

  const [emailState, setEmailState] = React.useState("")
  const [senhaState, setSenhaState] = React.useState("")

  const [estaEnviandoRequisicao, setEstaEnviandoRequisicao] = React.useState(false)

  const [mostrarSenha, setMostrarSenha] = React.useState(false)

  // notificação
  const [notificacao, setNotificacao] = React.useState(false);
  const [tipoMsg, setTipoMsg] = React.useState("primary");
  const [msg, setMsg] = React.useState("");

  const checkValues = () => {
    let deuErro = false

    if (isInvalid(emailState)) {
      setEmailState("error")
      deuErro = true
    }
    if (isInvalid(senhaState)) {
      setSenhaState("error")
      deuErro = true
    }

    return deuErro
  }
  const exibirNotificacao = (tipo, msg) => {
    setTipoMsg(tipo);
    setNotificacao(true);
    setMsg(msg);

    setTimeout(() => {
      setNotificacao(false)
      setMsg("")
    }, 3000)
  }

  const loginClicked = (e) => {
    e.preventDefault();

    let deuErro = checkValues()

    if (!deuErro) {
      setEstaEnviandoRequisicao(true)
      console.log(email + senha)
      login({
        email,
        senha
      })
        .then((response) => {
          console.log('sucesso ao fazer login:', response)

          props.history.push('/admin/home')
        })
        .catch((error) => {
          console.log('erro ao fazer login:', error.response)

          let erro = error.response?.data

          if (error.response?.status === 401 && (erro === 'INVALID_PASSWORD' || erro === 'INVALID_USERNAME')) {
            exibirNotificacao('danger', "E-mail e/ou senha inválidas.")
          } else {
            exibirNotificacao('danger', "Desculpe, algo deu errado.")
          }
        })
        .finally(() => {
          setEstaEnviandoRequisicao(false)
        })
    } else {
      exibirNotificacao('warning', "Preencha os campos corretamente.")
    }
  }

  return (
    <div className={classes.container}>
      <Snackbar message={msg} place="tr"
        color={tipoMsg}
        open={notificacao}
        closeNotification={() => setNotificacao(false)}
        close>
      </Snackbar>

      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form onSubmit={loginClicked} data-testid="formulario">
            <Card className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="success"
              >
              </CardHeader>
              <CardBody>
                <CustomInput
                  dataTestId="input-email"
                  error={emailState === "error"}
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      let value = event.target.value === undefined || event.target.value === '' ? '' : event.target.value
                      if (value === '') {
                        setEmailState('error')
                      } else {
                        setEmailState('success')
                      }
                      setEmail(value);
                    },
                    type: "text",
                    value: email,

                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  dataTestId="input-senha"
                  error={senhaState === "error"}
                  labelText="Senha..."
                  id="senha"
                  formControlProps={{
                    fullWidth: true,
                    style: { marginBottom: "10px" }
                  }}
                  inputProps={{
                    onChange: event => {
                      let value = event.target.value === undefined || event.target.value === '' ? '' : event.target.value
                      if (value === '') {
                        setSenhaState('error')
                      } else {
                        setSenhaState('success')
                      }
                      setSenha(value);
                    },
                    type: mostrarSenha ? "text" : "password",
                    value: senha,
                    autoComplete: "off",

                    endAdornment: (
                      <InputAdornment position="end" data-testid="btn-password-visibility">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setMostrarSenha(!mostrarSenha)}
                          style={{ marginRight: "-11px" }}
                        >
                          {!mostrarSenha ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter} style={{ marginTop: "0", margin: "-11px 3px 18px" }}>
                <GridItem xs={12} style={{ padding: "0 2px 0 2px!important" }}>
                  <Button color="success" size="lg" type="submit" block disabled={estaEnviandoRequisicao} dataTestId="btn-submit">
                    Entrar
                  </Button>
                  {/* <GridItem xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
                    <span onClick={(e) => { e.preventDefault(); props.history.push('recuperar-senha') }} className={classesLink.link}>Esqueci minha senha!</span>
                  </GridItem> */}
                </GridItem>
              </CardFooter>
            </Card>
          </form>
          <div style={{ textAlign: "center", fontSize: "8pt", padding: "20px" }}>
            <span style={{ fontWeight: "400" }}>Versão:</span> {process.env.REACT_APP_VERSION}<br />
            <span style={{ fontWeight: "400" }}>Data de Lançamento:</span> {process.env.REACT_APP_RELEASE_DATE}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
