import { Accordion, Carousel, Toast, ToastContainer  } from 'react-bootstrap'
import './Home.css'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";


const Home = () => {

  return (
    <div class="container">
         <Carousel variant="primary" className='mb-5'>
  <Carousel.Item>
    <img
      id='block'
      className="d-block w-100"
      src="https://www.colorhexa.com/4169e1.png"
      alt="First slide"
    />
    <Carousel.Caption id='text-block'>
      <h5>Soluções ágeis para você estar sempre conectado.</h5>
      <p>
        Internet com fibra óptica de qualidade, navegação estável, suporte integral e menos quedas.
        O melhor desempenho para sua casa ou empresa, para você não perder nada.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      id='block'
      className="d-block w-100"
      src="https://www.colorhexa.com/4169e1.png"
      alt="Second slide"
    />
    <Carousel.Caption >
      <h5>Sua internet sempre ágil, como deve ser</h5>
      <p>
        Tenha em sua casa uma internet que traz diversos benefícios com navegação estável para todos. A partir de nossos cabos, a informação viaja na velocidade da luz!
        O cabo é ligado da casa do cliente ao mundo, sem necessidade de antenas e livre de interferências. 
        Nosso sistema é robusto e altamente confiável; viabilizamos a universalização da tecnologia de ponta em internet, 
        iniciando a oferta dos serviços nas áreas mais carentes.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      id='block'
      className="d-block w-100"
      src="https://www.colorhexa.com/4169e1.png"
      alt="Third slide"
    />
    <Carousel.Caption id='text-block'>
      <h5>Velocidade Extrema</h5>
      <p>Internet de extrema velocidade para você não perder nada e atender às necessidades da sua família.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div class="row">

<div class="col">
  <h2>Avaliações redes sociais</h2>
<div id='mensagens'>
<ToastContainer className="p-3" >
          <Toast>
            <Toast.Header closeButton={false}>
            <FaFacebookSquare/>
              <img 
                src=''
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Facebook</strong>
              <small>junin</small>
            </Toast.Header>
            <Toast.Body>Melhor internet que já tive!! Meus jogos online estão mais rápidos do que nunca. Parabéns pelo serviço oferecido.</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header closeButton={false}>
              <AiFillInstagram/>
              <img
                src=''
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Instragram</strong>
              <small>pedrin</small>
            </Toast.Header>
            <Toast.Body>Internet muito top , com muita qualidade, experiência incrível, indico muitooo...</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header closeButton={false}>
              <AiFillTwitterCircle/>
              <img
                src=''
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Twitter</strong>
              <small>carlin</small>
            </Toast.Header>
            <Toast.Body>Excelente atendimento! Internet rápida, fibra ótica e melhor internet. Valeu a pena</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header closeButton={false}>
              <AiFillLinkedin/>
              <img
                src=''
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">LinkedIn</strong>
              <small>marizinha</small>
            </Toast.Header>
            <Toast.Body>Tenho a internet na minha casa e não tenho do que reclamar da qualidade. Finalmente posso ver meus filmes sem travar e não tenho que me preocupar no home office.</Toast.Body>
          </Toast>
</ToastContainer>
</div>
</div>

<div class="col">

<div id='block_pag1'>
<article class="card">
  <div class="card__content">
    <h3 class="card__title">Estabilidade</h3>
    <p class="card__description">Não cai e não falha! É agil o tempo todo, baixa latência ou picos, para uma navegação de qualidade.</p>
  </div>
</article>
</div>

<div id='block_pag1'>
<article class="card">
  <div class="card__content">
    <h3 class="card__title">Atendimento Agilizado</h3>
    <p class="card__description">Prontos para te atender da melhor maneira, sempre! Aqui, o atendimento é humanizado e sem enrolação.</p>
  </div>
</article>
</div>


<div id='block_pag1'>
<article class="card">
  <div class="card__content">
    <h3 class="card__title">Instalação Grátis</h3>
    <p class="card__description">Suporte e instalação grátis para que você tenha sempre a melhor estrutura e aproveite da melhor conexão de internet.</p>
  </div>
</article>
</div>

</div>
      
    
</div>
    </div>
  )
}

       
     

export default Home