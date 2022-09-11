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

const TeamList = () => (
  <List title="Lista de Turmas" actions={<ListActions />} filters={filters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="initials" label="Iniciais" />
      <TextField source="name" label="Nome" />
    </Datagrid>
  </List>
);

export default TeamList