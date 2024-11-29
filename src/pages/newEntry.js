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
            <FormLabel htmlForm=""></FormLabel>

            <FormInput type="" id="" name="" />
          </FormRow>

          <FormRow>
            <FormLabel htmlForm=""></FormLabel>

            <FormInput type="" id="" name="" />
          </FormRow>

          <FormRow>
            <FormLabel htmlForm=""></FormLabel>

            <FormInput type="" id="" name="" />
          </FormRow>

          <FormRow>
            <FormLabel htmlForm=""></FormLabel>

            <FormInput type="" id="" name="" />
          </FormRow>

          <FormRow>
            <FormLabel htmlForm=""></FormLabel>

            <FormTextArea type="" id="" name=""></FormTextArea>
          </FormRow>
        </FormEntryContainer>

        <FormButtonContainer></FormButtonContainer>
      </FormContainer>
    </NewEntryContainer>
  );
};
