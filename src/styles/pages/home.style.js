import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  width: 50%;
  height: 50px;
  border: 2px solid var(--bdr);
  border-radius: 10px;
  box-shadow: 5px 5px var(--shadow);
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-family: var(--txtFont);
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;

export const DiaryList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
  border: 2px solid var(--bdr);
  border-radius: 10px;
  box-shadow: 5px 5px var(--shadow);
  overflow-y: auto;
  margin: 1rem auto;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--bg);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--bg2);
    border-radius: 6px;
  }

  &::-webkit-scsrollbar-thumb:hover {
    background: var(--hvr);
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 90%;
  border: 2px solid var(--bdr);
  border-radius: 10px;
  margin: 0.5rem auto;
`;

export const ListItemTopRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const ListItemBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-left: 1rem;
`;

export const ListItemTitle = styled.h3`
  font-family: var(--txtFont);
  font-weight: bold;
  font-style: italic;
  font-size: 1.3rem;
  text-decoration: underline dotted;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;

export const ListItemText = styled.p`
  font-family: var(--txtFont);
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: var(--fg);
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
`;

export const NewEntryButton = styled(Link)`
  font-family: var(--txtFont);
  font-weight: normal;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--fg);
  text-shadow: 2px 2px var(--shadow);
  width: 300px;
  padding: 10px;
  border: 2px solid var(--bdr);
  border-radius: 20px;
  background-color: var(--bg2);
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  word-spacing: 0.1em;
  outline: none;
  text-align: center;
  transition: transform 0.3s ease-out;

  &:hover {
    outline: none;
    transform: scale(1.1);
    background-color: var(--hvr);
  }

  &:focus {
    outline: none;          
  }
`;
