import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { PraimaryButton } from '../components/ui/Button/Button';
import { Welcome } from '../components/Welcome/Welcome';
import './globals.css';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
