import client from '../client';
const Post = (props) => {
  return (
    <article>
      <h1>{props[1].slug.current}</h1>
    </article>
  );
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(
    `
    *[_type == "product"]
  `,
    { slug }
  );
};

export default Post;
