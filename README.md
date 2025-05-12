# PrimeReact Project
This is a practice project to learn PrimeReact. Documentation for PrimeReact can be found here: https://primereact.org/

## PrimeReact Components
PrimeReact has pre-made components which you can insert into your application. Below is a list of the components I have used to this point:
### PrimeReactProvider
This is placed in the main.jsx file and is the parent component in the return().
### Button
I found that you can adjust the colors by setting the 'severity' prop. Without adding a label, I can add an icon using the className prop but I haven't figured out yet how to get the icon exactly in the middle.
### DataTable
This is the basic table. I manually defined the column headers, then I created some dummy information in some JavaScript files and exported them into the table by setting the value prop on the DataTable.
### Column
This is a sub-component inside my DataTable that I had to bring in alongside the <DataTable> component. This let me put actual columns in my table.
### Paginator
I haven't done too much with this yet, but I want to get it working soon to where it only shows X amount of rows at a time and will go to the next page. I mainly added this right now just to try it out and get a feel for it.
### Accordian and AccordianTab
I added this and embedded my DataTables inside the three Accordians. Setting the 'multiple' prop with no value lets you open multiple tabs at a time. The 'multiple' is set on the parent <Accordian> so it affects everything inside it.
### InputText
I added this most recently to have a future search box.
### Menu
5/12/25 - Added a Menu that will appear when you click the blue "hamburger" button. This references an array of objects with a label and icon for each that determine the menu items. I use a `useRef` React hook to reference the menu.

## CSS Styles
### App.css
This is my own personal CSS sheet I'm using to do some simple custom work - mainly spacing.
### primereact/resources/themes/tailwind-light/theme.css
This is the main PrimeReact CSS file that gives everything it's baseline style. I went with a 'styled' approach for this PrimeReact project to minimize the CSS I'd have to write.
### primeicons/primeicons.css
To use the PrimeReact icons, I needed to install and import this sheet.
