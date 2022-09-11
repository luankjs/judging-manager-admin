import * as React from "react";
import { Admin, Resource, defaultTheme } from 'react-admin';

import { JudgeEdit, JudgeList, JudgeCreate } from "./resources/Judge";

import dataProvider from "./dataProvider";

const App = () => {
  return (
    <Admin dataProvider={dataProvider} theme={defaultTheme}>
      <Resource
        name="judges" 
        options={{ label: 'Ministros' }} 
        list={JudgeList} 
        edit={JudgeEdit} 
        create={JudgeCreate}
      />
    </Admin>
  )
}

export default App;
