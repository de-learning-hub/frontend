import logoDark from '@/assets/icons/logo_in_dark.svg';

interface LogoProps {
  height?: string;
  width?: string;
}

/**
 * Logo component for dark header background
 * Always uses logo_in_dark.svg (white square with teal icon)
 */
export const Logo: React.FC<LogoProps> = ({ height = '40px', width = 'auto' }) => {
  return (
    <img
      src={logoDark}
      alt="DE Learning Hub Logo"
      style={{ height, width }}
    />
  );
};
