import {
  NewEntryContainer,
  TitleContainer,
  FormContainer,
  FormEntryContainer,
  FormButtonContainer,
  FormRow,
  Title,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton
} from '../styles/pages/newEntry.style';


export default function NewEntry() {
  return (
    <NewEntryContainer>
      <TitleContainer>
        <Title>
          Let&#39;s Create A New Entry...
        </Title>
      </TitleContainer>

      <FormContainer>
        <FormEntryContainer>
          <FormRow>
            <FormLabel htmlForm="date"></FormLabel>

            <FormInput type="date" id="date" name="date" />
          </FormRow>

          <FormRow>
            <FormLabel htmlForm="time"></FormLabel>

            <FormInput type="time" id="time" name="time" />
          </FormRow>

          <FormRow>
            <FormLabel htmlForm="title"></FormLabel>

            <FormInput type="text" id="title" name="title" />
          </FormRow>

          <FormRow>
            <FormLabel htmlForm="entry"></FormLabel>

            <FormTextArea id="entry" name="entry"></FormTextArea>
          </FormRow>
        </FormEntryContainer>

        <FormButtonContainer></FormButtonContainer>
      </FormContainer>
    </NewEntryContainer>
  );
};
