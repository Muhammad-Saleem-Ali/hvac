"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGallery from "@/components/ProjectGallery";
import BottomCtaBanner from "@/components/BottomCtaBanner";
import TestimonialsAndFaq from "@/components/TestimonialsAndFaq";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <main className="main-site-wrapper">
      {/* Main Header & Emergency Topbar */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Hero Section with Technicians & Call Now Card */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Services Section with All 6 Core Categories */}
      <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Why Choose Us & Sector Capabilities */}
      <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Project Showcase Gallery */}
      <ProjectGallery onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Bottom Call Now CTA Banner */}
      <BottomCtaBanner onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Client Feedback & FAQ Accordion */}
      <TestimonialsAndFaq onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Comprehensive Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Floating Interactive WhatsApp Chat Widget & Call Trigger */}
      <WhatsAppWidget onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Free Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
      />
    </main>
  );
}
