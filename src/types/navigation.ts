/**
 * Navigation types for categories, topics and menu items
 */

export interface Topic {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  resourceCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  order: number;
  topics: Topic[];
}

export interface NavItem {
  path: string;
  label: string;
  description?: string;
}

export interface MegaMenuProps {
  trigger: React.ReactElement;
  categories: Category[];
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
