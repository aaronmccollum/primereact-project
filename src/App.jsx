// Importing CSS stylesheet and Primereact theme
import './App.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primeicons/primeicons.css';

// Importing other components
import Header from './Header'
import ReportHeader from './ReportHeader';
import ReportDashboard from './ReportDashboard';

export default function App() {

  return (
    <>
      <Header />
      <br /><br />
      <ReportHeader />
      <ReportDashboard />
    </>
  )
}
