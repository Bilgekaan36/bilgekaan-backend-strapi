import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsGithubProjects extends Schema.Component {
  collectionName: 'components_components_github_projects';
  info: {
    displayName: 'GithubProject';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    logo: Attribute.Enumeration<
      [
        'logoPlanetaria',
        'logoAnimaginary',
        'logoHelioStream',
        'logoCosmos',
        'logoOpenShuttle'
      ]
    > &
      Attribute.Required;
    link: Attribute.JSON & Attribute.Required;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.Text & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComponentsNewsletter extends Schema.Component {
  collectionName: 'components_components_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsResume extends Schema.Component {
  collectionName: 'components_components_resumes';
  info: {
    displayName: 'Resume';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    company: Attribute.String & Attribute.Required;
    end: Attribute.String;
    start: Attribute.String & Attribute.Required;
    endData: Attribute.JSON;
    logo: Attribute.Enumeration<
      ['logoPlanetaria', 'logoWorkDigital', 'logoInitGroup']
    > &
      Attribute.Required;
  };
}

export interface ComponentsSocialLink extends Schema.Component {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'SocialLink';
    description: '';
  };
  attributes: {
    socialMedia: Attribute.Enumeration<
      ['GitHubIcon', 'InstagramIcon', 'LinkedInIcon', 'XIcon', 'MailIcon']
    > &
      Attribute.Required;
    link: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    socialLinks: Attribute.Component<'components.social-link', true>;
  };
}

export interface LayoutInformationSection extends Schema.Component {
  collectionName: 'components_layout_information_sections';
  info: {
    displayName: 'Information Section';
    description: '';
  };
  attributes: {
    newsletter: Attribute.Component<'components.newsletter'>;
    downloadButtonText: Attribute.Text & Attribute.Required;
    resumeTitle: Attribute.String & Attribute.Required;
    resumes: Attribute.Component<'components.resume', true> &
      Attribute.Required;
  };
}

export interface LayoutPhotosSection extends Schema.Component {
  collectionName: 'components_layout_photos_sections';
  info: {
    displayName: 'Photos Section';
  };
  attributes: {
    photos: Attribute.Media & Attribute.Required;
  };
}

export interface LayoutToolSection extends Schema.Component {
  collectionName: 'components_layout_tool_sections';
  info: {
    displayName: 'Tool Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    tools: Attribute.Relation<
      'layout.tool-section',
      'oneToMany',
      'api::tool.tool'
    >;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'SeoInformation';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.github-projects': ComponentsGithubProjects;
      'components.link': ComponentsLink;
      'components.newsletter': ComponentsNewsletter;
      'components.resume': ComponentsResume;
      'components.social-link': ComponentsSocialLink;
      'layout.hero-section': LayoutHeroSection;
      'layout.information-section': LayoutInformationSection;
      'layout.photos-section': LayoutPhotosSection;
      'layout.tool-section': LayoutToolSection;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
