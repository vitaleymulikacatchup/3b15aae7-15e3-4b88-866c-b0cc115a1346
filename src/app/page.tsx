"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, ChefHat, Handshake, Star, Wheat } from "lucide-react";

const assetMap = [
  { id: "1", url: "https://pixabay.com/get/g3a95f668272eff507c6a70b5325cf15237c2f1538003a45f2c5c09212f248f55c53dbd897d14bbea2ae12ad96ba29f86b4492819974add58308c3de590a17370_1280.jpg", alt: "Warm bakery interior with fresh bread" },
  { id: "2", url: "https://pixabay.com/get/g9d855b0d6d840b1e5d84800beac173843bdf6110dfe3800f6cc3f2c1164aa9a06b3b4d8e5aebb83adbc10a7d5bd1388b07c9c79276e1922c4ea07b310ea5ed47_1280.jpg", alt: "Golden butter croissants" },
  { id: "3", url: "https://pixabay.com/get/gd020adb9313ef2db92df1e1054253011c15706c3719e4e36924432d4816dfbfcb27273019f189131369ae7fc787c50d69c3cb7fe8fea225da4617b17bfe8b9a3_1280.jpg", alt: "Rustic sourdough bread loaf" },
  { id: "4", url: "https://pixabay.com/get/gd5e6eff33ccce4864cfa0fdd9235655fd2660a70a98a663d3ae159dd815edc2454574ea9d7d865c9f9e9105f612ceeff4811589e939984160b14bd03bc081ac1_1280.jpg", alt: "Assorted danish pastries" }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="dotGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Golden Crust Bakery"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Loh Pidor"
          description="Experience the authentic taste of artisan bread and pastries, made with premium ingredients and traditional techniques passed down through generations."
          tag="Artisan Bakery"
          tagIcon={Wheat}
          buttons={[
            { text: "Order Now", href: "contact" },
            { text: "View Menu", href: "products" }
          ]}
          imageSrc="https://pixabay.com/get/g3a95f668272eff507c6a70b5325cf15237c2f1538003a45f2c5c09212f248f55c53dbd897d14bbea2ae12ad96ba29f86b4492819974add58308c3de590a17370_1280.jpg"
          imageAlt="Warm bakery interior with fresh bread"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Dima pidor"
          description="Discover our handcrafted selection of breads, pastries, and baked goods made fresh daily"
          tag="Menu"
          tagIcon={ChefHat}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Golden Crust",
              name: "Butter Croissants",
              price: "$3.50",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://pixabay.com/get/g9d855b0d6d840b1e5d84800beac173843bdf6110dfe3800f6cc3f2c1164aa9a06b3b4d8e5aebb83adbc10a7d5bd1388b07c9c79276e1922c4ea07b310ea5ed47_1280.jpg",
              imageAlt: "Golden butter croissants"
            },
            {
              id: "2",
              brand: "Golden Crust",
              name: "Artisan Sourdough",
              price: "$8.95",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://pixabay.com/get/gd020adb9313ef2db92df1e1054253011c15706c3719e4e36924432d4816dfbfcb27273019f189131369ae7fc787c50d69c3cb7fe8fea225da4617b17bfe8b9a3_1280.jpg",
              imageAlt: "Rustic sourdough bread loaf"
            },
            {
              id: "3",
              brand: "Golden Crust",
              name: "Danish Pastries",
              price: "$4.25",
              rating: 4,
              reviewCount: "650",
              imageSrc: "https://pixabay.com/get/gd5e6eff33ccce4864cfa0fdd9235655fd2660a70a98a663d3ae159dd815edc2454574ea9d7d865c9f9e9105f612ceeff4811589e939984160b14bd03bc081ac1_1280.jpg",
              imageAlt: "Assorted danish pastries"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We believe that great bread starts with great ingredients and traditional craftsmanship. Every loaf is shaped by hand and baked with care to bring you the finest artisan experience."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="What Makes Us Special"
          description="Our commitment to quality and tradition sets us apart"
          tag="Quality"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Premium Ingredients",
              description: "We source only the finest organic flour, European butter, and locally-sourced ingredients to ensure exceptional quality in every bite.",
              imageSrc: "https://pixabay.com/get/gb187db595555ca76675c632187eca1e0ccf2c9a89818e06192aa66b6b94a39f947dec5c338b9e997d499f824173a0a7294f1ada4bb848244043f9cded067769a_1280.jpg",
              imageAlt: "Organic ingredients and flour"
            },
            {
              id: "02",
              title: "Artisan Craftsmanship",
              description: "Our master bakers use time-honored techniques, hand-shaping each loaf and allowing proper fermentation for superior taste and texture.",
              imageSrc: "https://pixabay.com/get/g0efac98d24c8f09ba9dbcd30b5993e4191620ec432a6b46b1a84a0dd59da69388b01f990aa5ac7633f539c11b2372714febc3c28c6373fe59b7e92e8d6cd1773_1280.jpg",
              imageAlt: "Baker hands working with dough"
            },
            {
              id: "03",
              title: "Fresh Daily",
              description: "Every product is baked fresh each morning, ensuring you receive the peak flavor and quality that only comes from true artisan baking.",
              imageSrc: "https://pixabay.com/get/g556ff730aaf2b57a404d13d3d05876dfb93f7361b25da9a59f7a8b65bf95817e9cdbab6d8bbda0a0e43181aa5b4a6fdde0abf72f075bc08f3aab2bcc3bf1975e_1280.jpg",
              imageAlt: "Fresh bread cooling on racks"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from the people who make our bakery a community favorite"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Local Resident",
              company: "Downtown Community",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g50313512b163261474023c7aea89d4806a73c2405215d5b880b2749801cde6fecc42508de3d4108e92f979f3c31a50b8_1280.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Restaurant Owner",
              company: "Chen's Bistro",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf3209cfd9084b0219c4d0e55b122addad5c75e2b71abe33a70b3b0510df48f62ab22c1b0619a2af7c4958014a3dbd1ae829138880be4ae4c33989304bc7ee6c5_1280.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Food Blogger",
              company: "City Eats Blog",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g0ed1c9cc718d764c04c48d7dfb47800cc07ab135887600e319aab6bf6f4d2336e2c4252bee58e1b667b6fdf81306dc0fe8529f0895b373ac084697a0b30e0e24_1280.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Retired Teacher",
              company: "Neighborhood Regular",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g34834d4548eb87e5093a2067918d5cb542cadc022416325740182f10d9c21564508e62a92b6e2366f4b4b080777fae37425d641a53f5a5a8d62f0c832f2b1c3a_1280.jpg",
              imageAlt: "David Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Local Businesses"
          description="Proud supplier to restaurants, cafes, and establishments throughout the city"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/gae393a90db476e2717319e2ac03d8ea50fe0e5bbbd0a6e074d01b45c005af5a83f35bcd0665211db90112ff7bba3c4c1b2a04a8d52714afd3ce987661bd0f23b_1280.jpg",
            "https://pixabay.com/get/g29780ef01b104ade92f7ef07c5b3a9c5de9ee790af104f088bad13e001a9e59919d829b703ce0b7f3748784a6cbfdf65ce9324193155a63074c25391bfbe13e9_1280.jpg",
            "https://pixabay.com/get/g39d05a531b0001ded58d4f9f314bfd6a4c6dfbb5359b6218f123cb424658b5d82488df423334521e5862427022a1a0fbf44533e2212ea010239d8a226e93e061_1280.jpg",
            "https://pixabay.com/get/g114593677ba5e0b9df0921ec4680c2e8a74eec860d2b2d49e8efc268c7ab649e4595975213fadc9ad315692bd48bce614adf7141e40ce84ece1cfe94bca76ccb_1280.jpg",
            "https://pixabay.com/get/g2d6acc56bc6e25e16eee272de8df3fbb1b5ae2601b2412a5a0a412dd0c842b147928165cbbb6ac3f80ef21ffaefd36d511fc3f5aa9b401c674bd0556438a60f0_1280.jpg",
            "https://pixabay.com/get/g0ac6725d09e74665e55185b7cdcfeee31b496e14083a965dcafa2698bf254c19e01eb26fca2b16f4bce3f228cfc5f4ddbe782d59bdae76be9d07496081933660_1280.jpg",
            "https://pixabay.com/get/gf932f805d7701b39d9097c2c528f987f7fb4405557c5397759a83fa1d28b62c3534d94ceb59eb5dcc950befa5c8e804cbc4276eb7530376083ca3b271a0d5283_1280.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Visit Our Bakery Today"
          description="Stop by for fresh-baked goods or get in touch for custom orders and catering inquiries"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your order or inquiry...",
            rows: 4,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Golden Crust Bakery"
          columns={[
            {
              items: [
                { label: "Fresh Bread", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Custom Orders", href: "contact" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Quality Promise", href: "about" }
              ]
            },
            {
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Catering", href: "contact" },
                { label: "Special Orders", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}