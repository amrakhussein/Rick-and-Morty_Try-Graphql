import React from 'react';
import { Route, Routes } from 'react-router';
import CharacterList from '../components/CharacterList';
import Character from '../components/CharacterDetail';
export default function Home() {
  return (
      <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
  );
}
