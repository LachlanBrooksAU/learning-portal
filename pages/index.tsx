import Dashboard from 'layouts/Dashboard';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
