import appService from './app-service.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Twitter, Quote } from 'react-bootstrap-icons';
import { useSpring, animated } from '@react-spring/web';
import './App.css';

function App() {  
  const [quote, setQuote] = useState(appService.getNewQuote());
  const [color, setColor] = useState(appService.getNewColor());
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 750 },
    reset: true,
  });
  const changeColor = useSpring({
    to: { backgroundColor: color.light },
    config: { duration: 750 },
    reset: true,
  })

  const handleClick = () => {
    setQuote(currentQuote => {
      let newQuote = appService.getNewQuote();
      while (newQuote === currentQuote) {
        newQuote = appService.getNewQuote();
      }
      return newQuote;
    });

    setColor(currentColor => {
      let newColor = appService.getNewColor();
      while (newColor === currentColor) {
        newColor = appService.getNewColor();
      }
      return newColor;
    });
  }

  return (
    <animated.div className="App-background" style={changeColor}>
      <Container>
        <Card id="quote-box" style={{color: color.dark, maxWidth:'40rem'}} className="mx-auto">
          <Card.Body className="justify-content-around">
            <RandomQuote style={fadeIn} quote={quote} fadeIn={fadeIn} />
            <Stack direction="horizontal" gap={3}>
              <RandomColorButton
                as="a"
                id="tweet-quote"
                className="ms-auto"
                href={ quote.createTweetUrl() }
                target="_blank"
                color={ color }
                title="Share on Twitter"
                value={ <Twitter /> }
              />
              <RandomColorButton
                id="new-quote"
                onClick={ handleClick }
                color={ color }
                value="New Quote"
              />
            </Stack>
          </Card.Body>
        </Card>
      </Container>
    </animated.div>
  );
}

function RandomQuote(props) {
  return (
    <animated.figure style={ props.fadeIn } className="mt-5 mb-5 px-4">
      <blockquote className="blockquote transition-color text-center fs-2 mb-5">
        <p id="text"><Quote size="3rem" /> { props.quote.text }</p>
      </blockquote>
      <figcaption id="author" className="blockquote-footer text-end fs-5">
        { props.quote.author }
      </figcaption>
    </animated.figure>
  );
}

function RandomColorButton(props) {
  return (
    <>
      <style type="text/css">
        {`
        .btn-random-bg {
          --bs-btn-color: var(--bs-white);
          --bs-btn-bg: ${ props.color.medium };
          --bs-btn-border-color: transparent;
          --bs-btn-hover-color: var(--bs-btn-color);
          --bs-btn-hover-bg: ${ props.color.dark };
          --bs-btn-hover-border-color: var(--bs-btn-hover-bg);
          --bs-btn-focus-shadow-rgb: ${ props.color.darkRgb };
          --bs-btn-active-color: var(--bs-btn-color);
          --bs-btn-active-bg: var(--bs-btn-hover-bg);
        }
        `}
      </style>
      <Button
        variant="random-bg"
        as={ props.as }
        id={ props.id }
        className={ props.className }
        onClick={ props.onClick }
        href={ props.href }
        target={ props.target }
        title={ props.title }
      >
        { props.value }
      </Button>
    </>
  );
}

export default App;