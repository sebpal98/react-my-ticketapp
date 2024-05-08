import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Login = () => {
  

  return (
    <div className="login-page">
      <div className="login-space">
        <div className="welcome">
          <h1>Mi TurnoAPP</h1>
        </div>
        {(
          <Alert key="danger" variant="danger">
            Usuario o contraseña incorrectos
          </Alert>
        )}
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo" className="formulary-field" />
            <Form.Text id="text-muted">
              <p id="privacy">Mi TurnoAPP no compartirá tu informacion personal con ningun tercero.</p>
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" className="formulary-field"
            />
          </Form.Group>

          <Form.Group>
            <Row>
              <Col className="secondary-options col-3">
                <a href="/restore" id="forgot-password-text">¿Olvidaste tu contraseña?</a>
                <br/>
                <br/>
                <a href="/register" id="signup-text">No tienes una cuenta? haz clic aqui y registrate</a>
              </Col>
              <Col>
                <Button variant="dark" type="submit" id="login-button">
                  Ingresar
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
