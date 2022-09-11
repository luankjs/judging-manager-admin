import { SimpleForm, TextInput, ReferenceInput, AutocompleteInput } from 'react-admin';

const Form = () => {
  return (
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <TextInput source="initials" label="Iniciais" />
      {/* <ReferenceInput source="judge" reference="judges">
        <AutocompleteInput optionText="name" optionValue="id" label="Presidente" />
      </ReferenceInput> */}
    </SimpleForm>
  )
}

export default Form