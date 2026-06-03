import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDocumentation extends Struct.ComponentSchema {
  collectionName: 'components_shared_documentations';
  info: {
    displayName: 'Documentation';
    icon: 'picture';
  };
  attributes: {
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    photo_documentation: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    video_documentation: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedEventDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_details';
  info: {
    displayName: 'Event Details';
    icon: 'calendar';
  };
  attributes: {
    date_end: Schema.Attribute.Date;
    date_start: Schema.Attribute.Date;
    description: Schema.Attribute.Blocks;
    event_documentation: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event_name: Schema.Attribute.String;
    organizer: Schema.Attribute.String;
    venue_city: Schema.Attribute.String;
    venue_country: Schema.Attribute.String & Schema.Attribute.DefaultTo<'PH'>;
    venue_name: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.documentation': SharedDocumentation;
      'shared.event-details': SharedEventDetails;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
