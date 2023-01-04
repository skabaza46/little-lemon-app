import { Fragment } from 'react';
import Heighlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';


const Main = (props) => {

    return (
        <Fragment>
            <main>

                <Heighlights />
                <Testimonials />
                <About />

            </main>
            <Footer />
        </Fragment>
    )
};

export default Main;

