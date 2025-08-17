import { Link } from "react-router-dom";
import FooterGrid from "../components/footer/FooterGrid";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Living Room Furniture Trends in 2025",
    date: "Aug 17, 2025",
    imageUrl: "Images/product-3.png",
    excerpt:
      "Discover the hottest trends in living room furniture this year — from cozy modular sofas to sustainable materials.",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Dining Table Size",
    date: "Aug 10, 2025",
    imageUrl: "Images/product-4.png",
    excerpt:
      "Struggling with dining table sizes? Here’s a guide to picking the right dimensions for your space.",
  },
  {
    id: 3,
    title: "Maximizing Small Spaces with Multi‑Purpose Furniture",
    date: "Jul 28, 2025",
    imageUrl: "Images/product.png",
    excerpt:
      "Tiny apartment? No problem. Check out these multi-purpose furniture pieces that save space and add style.",
  },
];

const authors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Interior Designer",
    image: "Images/person2.png",
    quote:
      "This site is my go-to place for keeping up with the latest furniture designs. Modern, stylish, and inspiring!",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Furniture Blogger",
    image: "Images/person1.jpg",
    quote:
      "I love how easy it is to explore products here. The blog is full of fresh ideas for small and large spaces alike.",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Home Decor Enthusiast",
    image: "Images/person3.png",
    quote:
      "This website feels like a community for people who love furniture. The designs are practical yet so elegant!",
  },
];

const FurnitureBlog = () => {
  return (
    <div className="mt-16 p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10">
        Furniture Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 dark:bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <div className="h-70 w-full overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-grow">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">
                {post.excerpt}
              </p>
              <Link
                to={`/blog`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Authors / Testimonials */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          What Our Authors Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-md transition"
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {author.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{author.role}</p>
              <p className="text-gray-600 dark:text-gray-400 italic">“{author.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      <FooterGrid />
    </div>
  );
};

export default FurnitureBlog;
