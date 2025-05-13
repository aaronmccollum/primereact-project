// Importing React stuff
import { useState } from 'react';
import { useRef } from 'react';

// Importing CSS stylesheet and Primereact theme
import './App.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';

// Importing other components
import Header from './Header'
import ReportHeader from './ReportHeader';

// Importing individual components
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';

// Importing data from external file
import projects from './projects';
import assignments from './assignments';
import actions from './actions';

export default function App() {

  const [activeIndex, setActiveIndex] = useState();
  const [value, setValue] = useState("");

  const topMenuItems = [
    {
      label: "Create",
      icon: "pi pi-plus"
    },
    {
      label: "Import",
      icon: "pi pi-file-import"
    },
    {
      label: "Settings",
      icon: "pi pi-cog"
    }
  ]

  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <ReportHeader />

      <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} multiple>
          <AccordionTab header="My Projects">
            <DataTable value={projects}>
              <Column field="projectNumber" header="Project Number"></Column>
              <Column field="projectTitle" header="Project Title"></Column>
              <Column field="programOfficer" header="Program Officer"></Column>
              <Column field="office" header="Office"></Column>
              <Column field="projectType" header="Project Type"></Column>
              <Column field="program" header="Program"></Column>
              <Column field="principleInvestigator" header="Principal Investigator"></Column>
            </DataTable>
            <Paginator rows={1} totalRecords={3} ></Paginator>
          </AccordionTab>
          <AccordionTab header="My Assignments">
            <DataTable value={assignments}>
              <Column field="assignment" header="Assignment"></Column>
              <Column field="actionType" header="Action Type"></Column>
              <Column field="projectNumber" header="Project Number"></Column>
              <Column field="projectTitle" header="Project Title"></Column>
              <Column field="office" header="Office"></Column>
              <Column field="projectType" header="Project Type"></Column>
              <Column field="program" header="Program"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="My Actions">
            <DataTable value={actions}>
              <Column field="actionStage" header="Action Stage"></Column>
              <Column field="actionType" header="Action Type"></Column>
              <Column field="programOfficer" header="Program Officer"></Column>
              <Column field="office" header="Office"></Column>
              <Column field="projectType" header="Project Type"></Column>
            </DataTable>
          </AccordionTab>
      </Accordion>
    </>
  )
}
