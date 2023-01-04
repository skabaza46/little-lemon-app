import { Fragment } from 'react';

import Navigation from './Navigation';

import classes from './Layout.module.css';
import Hero from './Hero';
import Footer from './Footer';

const Layout = (props) => {

return (
  <Fragment>
    <Navigation />
    <Hero />
    <main className={classes.main}> {props.children}</main>
    <hr/>
    <Footer />
  </Fragment>
)
};


export default Layout;
