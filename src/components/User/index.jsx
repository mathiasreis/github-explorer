import { Container } from './styles'

export function User() {
    return (
        <Container>
        <img src="http://github.com/mathiasreis.png" alt="Alexsander Reis" />
        <h1>Alexsander Reis</h1>
        <h2>mathiasreis</h2>
        <p>Bio do usuário</p>
        <section>
            <div>
                <strong>12</strong>
                <span>Repositórios</span>
            </div>
            <div>
                <strong>21</strong>
                <span>Seguidores</span>
            </div>
            <div>
                <strong>12</strong>
                <span>Seguindi</span>
            </div>
        </section>
        </Container>
    )
}