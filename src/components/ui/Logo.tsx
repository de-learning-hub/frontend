import { useColorMode } from '@chakra-ui/react';
import logoLight from '@/assets/icons/logo_in_light.svg';
import logoDark from '@/assets/icons/logo_in_dark.svg';

interface LogoProps {
  height?: string;
  width?: string;
}

/**
 * Logo component with color mode support
 * Light mode: uses logo_in_light.svg (teal square with white icon)
 * Dark mode: uses logo_in_dark.svg (white square with teal icon)
 */
export const Logo: React.FC<LogoProps> = ({ height = '40px', width = 'auto' }) => {
  const { colorMode } = useColorMode();

  const logoSrc = colorMode === 'light' ? logoLight : logoDark;

  return (
    <img
      src={logoSrc}
      alt="DE Learning Hub Logo"
      style={{ height, width }}
    />
  );
};
