import React from 'react';
import Layout from './Layout';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Traction from './components/Traction';
import CTAForm from './components/CTAForm';

function App() {
  return (
    <Layout>
      <Hero />
      <Problem />
      <Solution />
      <Traction />
      <CTAForm />
    </Layout>
  );
}

export default App;