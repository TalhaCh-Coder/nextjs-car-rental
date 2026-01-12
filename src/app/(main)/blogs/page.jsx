import BlogCategories from "@/components/blogsPageComponents/BlogsSection";
import FeaturedPost from "@/components/blogsPageComponents/FeaturedPosts";
import BlogHero from "@/components/blogsPageComponents/Hero";
import BlogNewsletter from "@/components/blogsPageComponents/NewsLetter";

function Blogs() {
  return (
    <>
      <div>
        <BlogHero />
        <FeaturedPost />
        <BlogCategories />
        <BlogNewsletter />
      </div>
    </>
  );
}

export default Blogs;
