import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementPricingCard extends Schema.Component {
  collectionName: 'components_element_pricing_cards';
  info: {
    displayName: 'Pricing-card';
    description: '';
  };
  attributes: {
    plan_name: Attribute.String;
    price: Attribute.Integer;
    price_note: Attribute.String;
    action_button: Attribute.Component<'element.button'>;
    trial_text: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    tag: Attribute.String;
    icon: Attribute.Media<'images'>;
    plan_note: Attribute.Text;
    plan_services: Attribute.Relation<
      'element.pricing-card',
      'oneToMany',
      'api::plan-service.plan-service'
    >;
  };
}

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
    icon: Attribute.Media<'images'>;
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
    color: Attribute.String;
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

export interface ElementInput extends Schema.Component {
  collectionName: 'components_element_inputs';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    type: Attribute.Enumeration<
      [
        'text',
        'email',
        'password',
        'number',
        'file',
        'tel',
        'url',
        'reset',
        'textarea'
      ]
    > &
      Attribute.DefaultTo<'text'>;
    is_optional: Attribute.Boolean & Attribute.DefaultTo<false>;
    showCount: Attribute.Boolean & Attribute.DefaultTo<false>;
    name: Attribute.String;
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
    sub_heading: Attribute.String;
  };
}

export interface ElementImageGroup extends Schema.Component {
  collectionName: 'components_element_image_groups';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
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
    unique_name: Attribute.String;
  };
}

export interface ElementButton extends Schema.Component {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isPrimary: Attribute.Boolean & Attribute.DefaultTo<true>;
    variant: Attribute.Enumeration<
      ['primary', 'secondary', 'transparent', 'color-btn']
    > &
      Attribute.DefaultTo<'primary'>;
    icon: Attribute.Media<'images'>;
    color: Attribute.String;
    unique_name: Attribute.String;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.DefaultTo<'dark'>;
  };
}

export interface ElementAddOnCard extends Schema.Component {
  collectionName: 'components_element_add_on_cards';
  info: {
    displayName: 'Add-on-card';
    description: '';
  };
  attributes: {
    add_on_name: Attribute.String;
    price: Attribute.Integer;
    tag: Attribute.String;
    note: Attribute.Text;
    bg_color: Attribute.Enumeration<
      [
        'accent-blue',
        'accent-green',
        'accent-purple',
        'accent-yellow',
        'accent-orange'
      ]
    >;
    add_on_services: Attribute.Relation<
      'element.add-on-card',
      'oneToMany',
      'api::add-on-service.add-on-service'
    >;
  };
}

export interface BlockTrustedCompanies extends Schema.Component {
  collectionName: 'components_block_trusted_companies';
  info: {
    displayName: 'trusted-companies';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    trusted_companies: Attribute.Relation<
      'block.trusted-companies',
      'oneToMany',
      'api::trusted-company.trusted-company'
    >;
    featured_ins: Attribute.Relation<
      'block.trusted-companies',
      'oneToMany',
      'api::featured-in.featured-in'
    >;
    name: Attribute.Enumeration<['trusted_companies', 'featured_ins']> &
      Attribute.DefaultTo<'trusted_companies'>;
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
    bg_color: Attribute.String & Attribute.DefaultTo<'primary-bg-shade'>;
    unique_name: Attribute.String;
  };
}

export interface BlockNoPlanCard extends Schema.Component {
  collectionName: 'components_block_no_plan_cards';
  info: {
    displayName: 'No plan card';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    list: Attribute.Component<'element.list-items', true>;
    action_button: Attribute.Component<'element.button'>;
    min_credit: Attribute.Integer & Attribute.DefaultTo<10000>;
    max_credit: Attribute.Integer & Attribute.DefaultTo<30000>;
    icon: Attribute.Media<'images'>;
  };
}

export interface BlockKeyFeatures extends Schema.Component {
  collectionName: 'components_block_key_features';
  info: {
    displayName: 'Key-features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    Buttons: Attribute.Component<'element.button', true>;
    content_with_img: Attribute.Component<'block.content-with-image', true>;
  };
}

export interface BlockGenericHeadingContent extends Schema.Component {
  collectionName: 'components_block_generic_heading_contents';
  info: {
    displayName: 'generic-heading-content';
    description: '';
  };
  attributes: {
    tag: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    Images: Attribute.Component<'element.image-group', true>;
    unique_name: Attribute.String;
    bg_color: Attribute.String;
    theme: Attribute.Enumeration<['dark', 'light']> &
      Attribute.DefaultTo<'dark'>;
    Button: Attribute.Component<'element.button'>;
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
    variant: Attribute.Enumeration<['option1', 'option2', 'option3']>;
    card_icon_shape: Attribute.Enumeration<['50%', '8px']>;
    bg_color: Attribute.String;
    card_color: Attribute.String;
    description: Attribute.String;
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
    variant: Attribute.Enumeration<['dark', 'light']> &
      Attribute.DefaultTo<'dark'>;
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
    variant: Attribute.Enumeration<['option1', 'option2', 'option3']> &
      Attribute.DefaultTo<'option1'>;
    Buttons: Attribute.Component<'element.button', true>;
    unique_name: Attribute.String;
    context: Attribute.Text;
    bg_color: Attribute.String;
  };
}

export interface BlockCareerForm extends Schema.Component {
  collectionName: 'components_block_career_forms';
  info: {
    displayName: 'Form with content';
    description: '';
  };
  attributes: {
    action_button: Attribute.Component<'element.button'>;
    inputs: Attribute.Component<'element.input', true>;
    Image: Attribute.Media<'images'>;
    heading: Attribute.String;
    description: Attribute.Text;
    list: Attribute.Component<'element.list-items', true>;
    form_heading: Attribute.String;
    form_name: Attribute.String;
    form_position: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
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

export interface BlockAddOnGroup extends Schema.Component {
  collectionName: 'components_block_add_on_groups';
  info: {
    displayName: 'Add-on-group';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    bg_color: Attribute.String;
    cards: Attribute.Component<'element.add-on-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.pricing-card': ElementPricingCard;
      'element.list-items': ElementListItems;
      'element.link': ElementLink;
      'element.language': ElementLanguage;
      'element.input': ElementInput;
      'element.image-with-button-card': ElementImageWithButtonCard;
      'element.image-group': ElementImageGroup;
      'element.feature-card': ElementFeatureCard;
      'element.button': ElementButton;
      'element.add-on-card': ElementAddOnCard;
      'block.trusted-companies': BlockTrustedCompanies;
      'block.solutions-submenu': BlockSolutionsSubmenu;
      'block.product-submenu': BlockProductSubmenu;
      'block.platform-hero': BlockPlatformHero;
      'block.no-plan-card': BlockNoPlanCard;
      'block.key-features': BlockKeyFeatures;
      'block.generic-heading-content': BlockGenericHeadingContent;
      'block.feature-cards-group': BlockFeatureCardsGroup;
      'block.cta-card': BlockCtaCard;
      'block.content-with-image': BlockContentWithImage;
      'block.career-form': BlockCareerForm;
      'block.benefits': BlockBenefits;
      'block.add-on-group': BlockAddOnGroup;
    }
  }
}
