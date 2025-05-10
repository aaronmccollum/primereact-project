// Importing React stuff
import { useState } from 'react';

// Importing CSS stylesheet and Primereact theme
import './App.css';
import 'primereact/resources/themes/tailwind-light/theme.css';

// Importing individual components
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { Accordion, AccordionTab } from 'primereact/accordion';

// Importing data from external file
import projects from './projects';
import assignments from './assignments';
import actions from './actions';

export default function App() {

  const [activeIndex, setActiveIndex] = useState();

  return (
    <>
      <div className="header">
        <h1>My Dashboard</h1>
        <div className="header-buttons">
          <Button
            label="Create"
            className="p-button-info p-button-rounded header-button"
          />
          <Button
            label="Export"
            className="p-button-secondary p-button-rounded header-button"
          />
        </div>
      </div>

      <br></br>
      <br></br>

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
