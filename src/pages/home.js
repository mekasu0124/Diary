import { useEffect, useState } from "react";
import {
  HomeContainer,
  TitleContainer,
  Title,
  DiaryList,
  NewEntryButton,
  ListItem,
  ListItemTopRow,
  ListItemBottomRow,
  ListItemTitle,
  ListItemText
} from "../styles/pages/home.style";

export default function Home() {
  const [entries, setEntries] = useState(null);

  // useEffect(() => {
  //   if (!entries || entries.length === 0) {
  //     setEntries([]);
  //   }
  // }, [entries]);

  const generateEntries = () => {
    if (!entries) {
      return (
        <ListItem>
          <ListItemTopRow>
            <ListItemTitle>
              No Entries Found
            </ListItemTitle>
          </ListItemTopRow>

          <ListItemBottomRow>
            <ListItemText>
              Click the "New Entry" Button
              Below To Get Started!
            </ListItemText>
          </ListItemBottomRow>
        </ListItem>
      );
    };

    return entries.map(entry => {
      return (
        <ListItem key={entry.id}>
          <ListItemTopRow>
            <ListItemText>{entry.date}</ListItemText>
            <ListItemTitle>{entry.title}</ListItemTitle>
            <ListItemText>{entry.time}</ListItemText>
          </ListItemTopRow>

          <ListItemBottomRow>
            <ListItemText>{entry.entry.substring(0, 50) + "..."}</ListItemText>
          </ListItemBottomRow>
        </ListItem>
      );
    });
  };

  return (
    <HomeContainer>
      <TitleContainer>
        <Title>
          Mek&#39;s Diary
        </Title>
      </TitleContainer>

      <DiaryList>{ generateEntries() }</DiaryList>

      <NewEntryButton to="/new-entry">
        New Entry
      </NewEntryButton>
    </HomeContainer>
  );
};
