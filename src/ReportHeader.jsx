import { useRef, useState } from 'react';

// Importing CSS stylesheet and Primereact theme
import './App.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';

// Importing individual components
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';


export default function ReportHeader() {

    const [value, setValue] = useState("");
    const menu = useRef(null);

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
        <div className="table-header">
            <div className="table-header-left">
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="p-inputtext-sm input-box-custom"
                />
                <Button
                    className="pi pi-filter-slash button-custom"
                    severity="info"
                    outlined
                />
            </div>
            <Menu
                model={topMenuItems}
                popup
                ref={menu}
                id="top-right-menu"
                popupAlignment="right"
            />
            <Button
                className="pi pi-bars button-custom"
                severity="info"
                onClick={(event) => menu.current.toggle(event)}
            />
      </div>
    )
}
