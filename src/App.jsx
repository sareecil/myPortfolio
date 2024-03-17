import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';
import me from './assets/img/me.png';
import work1 from './assets/img/photosnap.png';
import work2 from './assets/img/news.png';
import work3 from './assets/img/single-page.png';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="navbar">
          <div className="title">
            <Link to="home" smooth={true} duration={1000}><h1>Sare Cil</h1></Link>
          </div>
          <div className="links">
            <Link to="home" smooth={true} duration={1000}>Anasayfa</Link>
            <Link to="about" smooth={true} duration={1000}>Hakkımda</Link>
            <Link to="work" smooth={true} duration={1000}>Projeler</Link>
          </div>
        </div>
      </div>
      <div className="content">
        <section id="home">
          <div className="hero">
            <div className="left">
              <p>Merhaba Ben Sare,</p>
              <h1>Frontend Developer</h1>
            </div>
            <div className="right">
              <img src={me} alt="" />
            </div>
          </div>
        </section>
        <section id="about">
          <div className="about">
            <h1>Hakkımda</h1>
            <p>Atatürk Üniversitesi Bilgisayar Programcılığı bölümü öğrencisiyim. 2021 yılında Siliconmade Academy’de FullStack programlama eğitimi aldım. Sonrasında Acunmedya Akademi de Frontend alanında kendimi geliştirdim. Bu alana daha yatkın olduğumu farkedince kendimi geliştirmeye odaklandım.</p>
            <p>Şimdi yazılım dünyasına daha gerçek projelerle devam etmek istiyorum. Kendimi her gün daha fazla geliştireceğim bir alanda, gerçek projelerle elimden gelenin en iyisini yapmak için sabırsızlanıyorum</p>
          </div>   
          <div className="me-part">
            <div className="part-one">
              <h1>Acunmedya Akademi Frontend Eğitimi</h1>
              <p>Bu eğitimde;</p>
              <p>-HTML, CSS ve Javacsript ile Figma üzerinden tasarımlar yaptım.</p>
              <p>-Yaptığım tasarımları React ile daha dinamik hale getirdim. Bu sayede React üzerinde pratikler yapmış oldum.</p>
              <p>-React componentleri ile sayfaların daha hızlı render olmasını sağladım.</p>
            </div>
            <div className="part-one">
              <h1>Siliconmade Academy Fullstack Developer</h1>
              <p>Bu eğitimde;</p>
              <p>-C# dili ile projeler yaptım.</p>
              <p>-Algoritma yapısını örneklerle öğrendim.</p>
              <p>-Asp.Net Framework’ları ile projeler geliştirdim.</p>
              <p>-Katmanlı mimari ile proje yaptım.</p>
            </div>
            <div className="part-one">
              <h1>Atatürk Üniversitesi</h1>
              <p>Bilgisayar Programcılığı</p>
            </div>
          </div>                
        </section>
        <section id="work">
          <div className="work">
            <h1>Projeler</h1>
            <p>Eğitimlerim boyunca yaptığım projelerin kodlarını <a href="https://github.com/sareecil" target='_blank' rel='noreferrer'>Github</a> adresim üzerinden inceleyebilirsiniz. Ayrıca yayına aldığım projeleri aşağıda paylaşıyorum.</p>
            <div className="img">
              <div className="img-part">
                <h3><a href="https://sareecil-photosnap.netlify.app/" target='_blank' rel='noreferrer'>Photosnap Figma Tasarım</a></h3>
                <img src={work1} alt="" />
              </div>
              <div className="img-part">
                <h3><a href="https://sareecil-news.netlify.app/" target='_blank' rel='noreferrer'>News Figma Tasarım</a></h3>
                <img src={work2} alt="" />
              </div>
              <div className="img-part">
                <h3><a href="https://sarecil-single-page.netlify.app/" target='_blank' rel='noreferrer'>Single Page Figma Tasarım</a></h3>
                <img src={work3} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;