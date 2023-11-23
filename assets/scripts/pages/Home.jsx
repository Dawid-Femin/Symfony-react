import React from 'react';
import Nav from "../blocks/Nav";
import Hero from "../blocks/Hero";
import Card from '../components/Card';
import Info from "../blocks/Info";

function Home() {
    return (
        <>
            <Nav/>
            <Hero
                imageUrl={require('../../../assets/images/hero.webp')}
                height={'calc(80vh - 56px)'}
                title='Witaj na stronie Internetowej Wizytówki!'
                description='Jesteśmy dynamiczną firmą specjalizującą się w tworzeniu nowoczesnych stron internetowych, innowacyjnych aplikacji mobilnych oraz skutecznych strategii SEO. Nasza pasja do projektowania i programowania łączy się z zaawansowaną wiedzą techniczną, co pozwala nam dostarczać rozwiązania dopasowane do unikalnych potrzeb naszych klientów.'
                button='Sprawdź ofertę!'
            />
            <section className='container d-flex justify-content-between mt-5 flex-wrap'>
                <Card
                    imageUrl={require('../../../assets/images/icon1.webp')}
                    title='Strony internetowe'
                    description='Tworzymy responsywne strony internetowe o doskonałej funkcjonalności i atrakcyjnym designie.'
                />
                <Card
                    imageUrl={require('../../../assets/images/icon1.webp')}
                    title='Platformy e-commerce'
                    description='Tworzymy responsywne strony internetowe o doskonałej funkcjonalności i atrakcyjnym designie.'
                />
                <Card
                    imageUrl={require('../../../assets/images/icon1.webp')}
                    title='Optymalizacja SEO'
                    description='Optymalizujemy strony pod SEO, by zwiększyć ich widoczność i szanse na zdobycie klientów.'
                />
            </section>
            <section className='container mt-5'>
                <h2 className='text-center'>Zaufali nam</h2>
            </section>
            <Info
                imageUrl={require('../../../assets/images/img1.webp')}
                subtitle='Attention to hiqh-quality code'
                title='Develop consistenly using Astro architecture principles'
                description='Using AstroLaunch UI you get everything you need to start creating your fully functional and responsive Ecommerce website in days, not months.'
                textSide={'left'}
            />
            <Info
                imageUrl={require('../../../assets/images/img2.webp')}
                subtitle='Attention to hiqh-quality code'
                title='Develop consistenly using Astro architecture principles'
                description='Using AstroLaunch UI you get everything you need to start creating your fully functional and responsive Ecommerce website in days, not months.'
                textSide={'right'}
            />
            <Info
                imageUrl={require('../../../assets/images/img2.webp')}
                subtitle='Attention to hiqh-quality code'
                title='Develop consistenly using Astro architecture principles'
                description='Using AstroLaunch UI you get everything you need to start creating your fully functional and responsive Ecommerce website in days, not months.'
                textSide={'left'}
            />
            <div style={{height: "300vh"}}></div>
        </>
    );
}

export default Home;
