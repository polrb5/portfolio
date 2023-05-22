import { PortableText } from '@portabletext/react';

type ContentProps = {
  content: any;
}

const Content = ({ content }: ContentProps) => (
  <PortableText value={content} />
);

export default Content;
