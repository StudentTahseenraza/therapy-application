import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/constants';
import Section from '@/components/Section';
import { Calendar, Clock, ArrowLeft, Tag, User, Share2 } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Mock related posts (excluding current post)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Blog Post Hero */}
      <Section
        bgColor="background"
        padding="large"
        className="relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <div className="space-y-6">
            {/* Category */}
            <div className="flex items-center space-x-2">
              <Tag className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Dr. Maya Reynolds, PsyD</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4 animate-float">
                    {post.id === '1' && '📝'}
                    {post.id === '2' && '🧠'}
                    {post.id === '3' && '🔥'}
                    {post.id === '4' && '🌿'}
                  </div>
                  <p className="text-primary font-medium text-lg">
                    Featured Image: {post.title}
                  </p>
                </div>
              </div>
              {/* Image Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white/80 text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  Therapy insights and professional perspectives
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Content */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="space-y-6">
                  <p className="text-xl text-text/80 leading-relaxed font-medium">
                    Welcome to this exploration of {post.title.toLowerCase()}. 
                    As a clinical psychologist specializing in anxiety, trauma, and burnout, 
                    I frequently encounter clients navigating these challenges.
                  </p>
                  
                  <p>
                    The journey toward emotional well-being often begins with understanding 
                    the patterns that keep us stuck. In this post, we'll explore practical 
                    strategies and therapeutic insights that can help you move toward greater 
                    balance and fulfillment.
                  </p>
                </div>

                {/* Sample Content Sections */}
                <div className="space-y-8 mt-12">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-text mb-4">
                      Understanding the Core Issues
                    </h2>
                    <p>
                      Many high-achieving adults experience what appears to be success 
                      on the outside while feeling overwhelmed, anxious, or disconnected 
                      internally. This disconnect often stems from years of pushing through 
                      stress without adequate support or self-care practices.
                    </p>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-6 my-8 border-l-4 border-primary">
                    <h3 className="font-heading text-xl font-bold text-text mb-3">
                      Key Insight
                    </h3>
                    <p className="text-text/80">
                      Healing isn't about eliminating all stress, but about developing 
                      a different relationship with stress—one that allows for resilience 
                      and growth without burnout.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-text mb-4">
                      Practical Strategies
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Mindful awareness of stress signals in the body</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Setting sustainable boundaries in work and relationships</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Developing self-compassion practices</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>Creating daily rituals that support nervous system regulation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-text mb-4">
                      Therapeutic Approaches
                    </h2>
                    <p>
                      In my practice, I integrate evidence-based approaches including 
                      Cognitive Behavioral Therapy (CBT) for challenging unhelpful thought 
                      patterns, EMDR for trauma processing, and mindfulness-based techniques 
                      for present-moment awareness. The specific approach depends on your 
                      unique needs and goals.
                    </p>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <p className="text-lg text-text/80 italic">
                    Remember that seeking support is a sign of strength, not weakness. 
                    Whether through therapy, self-help resources, or supportive communities, 
                    taking steps toward emotional well-being is one of the most important 
                    investments you can make in yourself.
                  </p>
                </div>
              </article>

              {/* Share Section */}
              <div className="flex items-center justify-between border-t border-b border-gray-200 py-6 mt-12">
                <span className="font-medium text-text">Share this article:</span>
                <div className="flex space-x-4">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    f
                  </button>
                  <button className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
                    t
                  </button>
                  <button className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors">
                    in
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Bio */}
              <div className="bg-background rounded-2xl p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👩‍⚕️</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-text mb-1">
                      Dr. Maya Reynolds, PsyD
                    </h3>
                    <p className="text-text/80 text-sm">
                      Licensed Clinical Psychologist specializing in anxiety, trauma, 
                      and burnout treatment for high-achieving adults.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-primary text-sm font-medium mt-3 hover:text-primary-dark"
                    >
                      Schedule a consultation
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-text mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">
                            {relatedPost.id === '1' && '📝'}
                            {relatedPost.id === '2' && '🧠'}
                            {relatedPost.id === '3' && '🔥'}
                            {relatedPost.id === '4' && '🌿'}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-text group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-primary/5 rounded-2xl p-6 mt-8">
                <h3 className="font-heading text-lg font-bold text-text mb-3">
                  Stay Updated
                </h3>
                <p className="text-text/70 text-sm mb-4">
                  Get the latest articles on mental health and wellness directly in your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white text-sm font-medium py-2 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}