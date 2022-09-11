import { 
  Datagrid, 
  List, 
  TextField, 
  TopToolbar,
  CreateButton,
  ExportButton,
  TextInput
} from 'react-admin';

const ListActions = () => (
  <TopToolbar>
    <CreateButton label='Criar'/>
    <ExportButton label='Exportar' />
  </TopToolbar>
)

const filters = [
  <TextInput label="Busca textual" source="name" alwaysOn />,
]

const JudgeList = () => (
  <List title="Lista de Ministros" actions={<ListActions />} filters={filters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default JudgeList