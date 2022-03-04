import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id="about">
      
      <h5>Conhecendo</h5>
      <h2>Sobre Mim</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>10+ Anos Profissional</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>200+ Mundialmente</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>80+</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id libero id leo venenatis rutrum. Duis congue varius ornare. Integer aliquet pellentesque nunc, et euismod dui lacinia ut. Etiam lacus lorem, mollis nec est non, euismod faucibus turpis. Quisque blandit leo et ipsum pellentesque luctus. Fusce maximus, risus auctor egestas viverra, nunc elit vestibulum nisl, quis elementum lectus massa id diam. Sed sit amet nisi orci.
          </p>

          <a href='#contact' className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>      
      
    </section>
  )
}

export default About