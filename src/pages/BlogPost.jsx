import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post. It\'s exciting to start this journey of sharing my thoughts and experiences with the world. I hope you enjoy reading and feel free to leave comments!', date: '2023-04-01' },
  { id: 2, title: 'Reflections on Life', content: 'Today, I want to share my thoughts on life and its many twists and turns. It\'s amazing how our experiences shape us and help us grow. I\'ve learned that every challenge is an opportunity for personal development.', date: '2023-04-15' },
  { id: 3, title: 'The Joy of Coding', content: 'Coding has always been a passion of mine. There\'s something magical about creating something from nothing, just with lines of code. It\'s a skill that constantly challenges me and keeps me learning every day.', date: '2023-05-01' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Link to="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to all posts</Link>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.date}</p>
        <p className="mb-8">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
