export interface Post{
    _id: string;
    _createdAt: date;
    title: string;
    author: {
        name: string;
        image: string;
    },
    description: string;
    mainImage: {
        asset: {
            url: string;
        }
    };
    slug: {
        current: string;
    };
    body: [object];
}

export interface ParamsSlug {
  params: {
    slug: string;
  };
}