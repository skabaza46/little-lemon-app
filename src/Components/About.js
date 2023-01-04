import { Container, Row , Col} from "react-bootstrap";
import classes from './About.module.css';

const About = () => {

    return (
        <Container>

            <Row className={classes.aboutTheCompany}>
                <h3 className={classes.aboutTheCompanyChild}>About Little Lemon</h3>
                <Col>
                    <img src="owners/little-lemon-owners.jpeg" height={250}/>


                </Col>
                <Col>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis tellus, blandit sit amet orci et, 
                        dapibus efficitur quam. Nulla quis rhoncus lacus. Phasellus non faucibus nulla. Nulla lobortis ullamcorper arcu, 
                        ut eleifend urna luctus at. Curabitur et facilisis libero, sit amet dignissim nisi. In vulputate metus ut faucibus 
                        faucibus. Ut ut cursus sapien. Nam luctus placerat velit quis bibendum. Aliquam vel neque sem. Nulla facilisi.
                        Etiam pulvinar feugiat velit, at tristique elit venenatis fermentum. Nam sagittis mi at dui bibendum, id fermentum 
                        arcu malesuada. Morbi est elit, consequat quis dui a, finibus accumsan felis. Proin at ante nibh. Nam convallis 
                        elementum enim in malesuada. Nulla facilisi.
                    </p>

                    <p>
                        Quisque fringilla lorem lacus, sit amet vulputate mi aliquam finibus. Nam nibh orci, ultrices sit amet ante non,
                        semper consequat mauris. Vivamus sodales ante blandit augue faucibus, ac vulputate risus fermentum. Sed vitae 
                        consectetur metus. Integer massa lectus, ornare eget ligula at, suscipit aliquet lectus. Morbi ultricies a dui id 
                        congue. Nunc sed tortor urna. Sed sed lorem sem.
                    </p>
                </Col>

            </Row>
        </Container>
    );
};

export default About;


<div>
    <p>Name</p>
    <p>Description</p>
    <p>Photos of Adrian and Mario</p>
</div>