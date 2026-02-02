import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/constants';
import Section from '@/components/Section';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

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
            {/* Date & Read Time */}
            <div className="flex items-center space-x-4 text-muted">
              <div className="flex items-center space-x-1">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text">
              {post.title}
            </h1>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {post.id === '1' && '📝'}
                    {post.id === '2' && '🧠'}
                    {post.id === '3' && '🔥'}
                    {post.id === '4' && '🌿'}
                  </div>
                  <p className="text-primary font-medium text-lg">
                    Featured Blog Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Content */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-xl text-text/80 leading-relaxed">
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

              <div className="bg-secondary/50 rounded-xl p-6 my-8">
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

          {/* Author Bio */}
          <div className="bg-background rounded-2xl p-8 mt-12">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-text mb-2">
                  Dr. Maya Reynolds, PsyD
                </h3>
                <p className="text-text/80">
                  I'm a licensed clinical psychologist based in Santa Monica, 
                  California, specializing in anxiety, trauma, and burnout treatment 
                  for high-achieving adults. My approach combines evidence-based 
                  therapies with a warm, collaborative style.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary font-medium mt-4 hover:text-primary-dark"
                >
                  Schedule a consultation
                  <svg
                    className="w-5 h-5 ml-2"
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
        </div>
      </Section>
    </>
  );
}