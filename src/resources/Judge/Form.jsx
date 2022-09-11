import { SimpleForm, TextInput } from 'react-admin';

const Form = () => {
  return (
    <SimpleForm>
      <TextInput source="name" label="Nome" />
    </SimpleForm>
  )
}

export default Form