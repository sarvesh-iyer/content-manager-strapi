import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementListItems extends Schema.Component {
  collectionName: 'components_element_list_items';
  info: {
    displayName: 'List-items';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
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
  };
}

export interface ElementFeatureCard extends Schema.Component {
  collectionName: 'components_element_feature_cards';
  info: {
    displayName: 'Feature-card';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Context: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images'>;
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

export interface BlockFeatureHero extends Schema.Component {
  collectionName: 'components_block_feature_heroes';
  info: {
    displayName: 'Feature-hero';
    icon: '';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Card: Attribute.Component<'element.feature-card', true>;
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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.list-items': ElementListItems;
      'element.link': ElementLink;
      'element.feature-card': ElementFeatureCard;
      'element.button': ElementButton;
      'block.feature-hero': BlockFeatureHero;
      'block.cta-card': BlockCtaCard;
      'block.content-with-image': BlockContentWithImage;
    }
  }
}
