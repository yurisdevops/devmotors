export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
        };
      };
      services: ServicesProps[];
      contact: {
        phone: string;
        email: string;
        address: string;
        time: string;
      };
    };
  };
}

interface ServicesProps {
  image: {
    url: string;
  };
  description: string;
}
