import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementListItems extends Schema.Component {
  collectionName: 'components_element_list_items';
  info: {
    displayName: 'List-items';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    link: Attribute.String;
  };
}

export interface ElementLink extends Schema.Component {
  collectionName: 'components_element_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'>;
    submenu: Attribute.Boolean & Attribute.DefaultTo<false>;
    name: Attribute.String;
  };
}

export interface ElementLanguage extends Schema.Component {
  collectionName: 'components_element_languages';
  info: {
    displayName: 'Language';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    lang_code: Attribute.String;
    display_name: Attribute.String;
  };
}

export interface ElementImageWithButtonCard extends Schema.Component {
  collectionName: 'components_block_image_with_button_cards';
  info: {
    displayName: 'image-with-button-card';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images'>;
    Buttons: Attribute.Component<'element.button', true>;
    color: Attribute.String;
  };
}

export interface ElementFeatureCard extends Schema.Component {
  collectionName: 'components_element_feature_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Context: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images'>;
    color: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementButton extends Schema.Component {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isPrimary: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface BlockSolutionsSubmenu extends Schema.Component {
  collectionName: 'components_block_solutions_submenus';
  info: {
    displayName: 'solutions-submenu';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    menu: Attribute.Component<'element.link', true>;
  };
}

export interface BlockProductSubmenu extends Schema.Component {
  collectionName: 'components_block_product_submenus';
  info: {
    displayName: 'product-submenu';
    description: '';
  };
  attributes: {
    right_heading: Attribute.String;
    left_heading: Attribute.String;
    feature_cards: Attribute.Component<'element.feature-card', true>;
    right_subheading: Attribute.String;
    right_description: Attribute.Text;
    link: Attribute.Component<'element.link'>;
  };
}

export interface BlockPlatformHero extends Schema.Component {
  collectionName: 'components_block_platform_heroes';
  info: {
    displayName: 'Platform-hero';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Text;
    Buttons: Attribute.Component<'element.button', true>;
    Cards: Attribute.Component<'element.feature-card', true>;
  };
}

export interface BlockFeatureCardsGroup extends Schema.Component {
  collectionName: 'components_block_feature_cards_groups';
  info: {
    displayName: 'Feature cards group';
  };
  attributes: {
    heading: Attribute.String;
    Cards: Attribute.Component<'element.image-with-button-card', true>;
    variant: Attribute.Enumeration<['option1', 'option2']>;
  };
}

export interface BlockCtaCard extends Schema.Component {
  collectionName: 'components_block_cta_cards';
  info: {
    displayName: 'CTA Card';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    List: Attribute.Component<'element.list-items', true>;
    Buttons: Attribute.Component<'element.button', true>;
    Description: Attribute.Text;
  };
}

export interface BlockContentWithImage extends Schema.Component {
  collectionName: 'components_block_content_with_images';
  info: {
    displayName: 'Content-with-image';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    description: Attribute.Text;
    Image: Attribute.Media<'images'>;
    List: Attribute.Component<'element.list-items', true>;
    color: Attribute.String;
    variant: Attribute.Enumeration<['option1', 'option2', 'option3']>;
  };
}

export interface BlockBenefits extends Schema.Component {
  collectionName: 'components_block_benefits';
  info: {
    displayName: 'Benefits';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    cards: Attribute.Component<'element.feature-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.list-items': ElementListItems;
      'element.link': ElementLink;
      'element.language': ElementLanguage;
      'element.image-with-button-card': ElementImageWithButtonCard;
      'element.feature-card': ElementFeatureCard;
      'element.button': ElementButton;
      'block.solutions-submenu': BlockSolutionsSubmenu;
      'block.product-submenu': BlockProductSubmenu;
      'block.platform-hero': BlockPlatformHero;
      'block.feature-cards-group': BlockFeatureCardsGroup;
      'block.cta-card': BlockCtaCard;
      'block.content-with-image': BlockContentWithImage;
      'block.benefits': BlockBenefits;
    }
  }
}
