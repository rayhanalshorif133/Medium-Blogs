import { urlFor } from "../sanity";

export const portableTextSerializer = {
  h1: (props: any) => {
    return <h1 className="text-2xl font-bold my-5" {...props} />;
  },
  h2: (props: any) => {
    return <h1 className="text-xl font-bold my-5" {...props} />;
  },
  li: ({ children }: any) => {
    return <li className="ml-4 list-inside" {...children} />;
  },
  ul: ({ children }: any) => {
    return <ul className="list-disc" {...children} />;
  },
  normal: (props: any) => {
    return <p className="text-justify" {...props} />;
  },
  types: {
    img: (props: any) => {
      return (
        <div className="my-5">
          <img
            className="w-full"
            src={urlFor(props.node.asset).url()!}
            alt=""
          />
        </div>
      );
    },
  },
};
