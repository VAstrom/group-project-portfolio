import React, { useState, useEffect } from 'react';
import { Headline } from './components/Headline';
import { Section } from './Section/Section';
import './App.css';

export const App = () => {
  const [repos, setRepos] = useState([]);
  const githubUsername = 'VAstrom'; // Replace with the desired GitHub username
  const maxReposToShow = 6; // Set the maximum number of repositories to display

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`);

        if (response.ok) {
          const data = await response.json();
          const filteredRepos = data.slice(0, maxReposToShow); // Filter the repositories
          setRepos(filteredRepos);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [githubUsername, maxReposToShow]);

  return (
    <>
      <Headline headerText={Headertext} />
      <Section
        repos={repos}
      />
    </>
  );
};

