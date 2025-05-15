// Importing React stuff
import { useState } from 'react';

// Importing CSS stylesheet and Primereact theme
import './App.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';

// Importing data from external file
import projects from './projects';
import assignments from './assignments';
import actions from './actions';

// Importing individual components
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Accordion, AccordionTab } from 'primereact/accordion';


export default function ReportDashboard() {

    const [activeIndex, setActiveIndex] = useState();
    const [first, setFirst] = useState(0);  // first item showing in paginator will be index 0
    const [rows, setRows] = useState(3); // how many rows we will see per page (divided by total records)

    return (
        <>
            <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} multiple>
                <AccordionTab header="My Projects">
                    <DataTable
                        value={projects}
                        paginator
                        first={first}
                        rows={rows}
                        totalRecords={projects.length}
                        rowsPerPageOptions={[3, 5, 10]}
                        onPageChange={(e) => {
                            setFirst(e.first);
                            setRows(e.rows);
                        }}>
                            <Column field="projectNumber" header="Project Number"></Column>
                            <Column field="projectTitle" header="Project Title"></Column>
                            <Column field="programOfficer" header="Program Officer"></Column>
                            <Column field="office" header="Office"></Column>
                            <Column field="projectType" header="Project Type"></Column>
                            <Column field="program" header="Program"></Column>
                            <Column field="principleInvestigator" header="Principal Investigator"></Column>
                    </DataTable>
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
