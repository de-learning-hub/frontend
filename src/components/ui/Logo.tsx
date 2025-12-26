import logoMain from '@/assets/logo_main.svg';

interface LogoProps {
  height?: string;
  width?: string;
}

/**
 * Logo component - Pipecraft wordmark with icon
 */
export const Logo: React.FC<LogoProps> = ({ height = '40px', width = 'auto' }) => {
  return (
    <img
      src={logoMain}
      alt="Pipecraft Logo"
      style={{ height, width }}
    />
  );
};
