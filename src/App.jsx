import React, { useState, useEffect } from 'react';
import { Headline } from './components/Headline';
import { Section } from './Section/Section';
import './App.css';
import { Test } from './components/Test';

export const App = () => {
  const [repos, setRepos] = useState([]);

  const githubUsername = 'isarobertini'; // Replace with the desired GitHub username
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      } 
    }
    fetchData();
  }, [githubUsername]);

  return (
    <>
      <Headline />
      <Section
        repos={repos}
      />
      <Test />
    </>
  );
};

