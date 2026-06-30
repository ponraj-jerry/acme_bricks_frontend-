import React, { useState, useEffect } from 'react';
import Header from './components/home/Header.jsx';
import HeroSection from './components/home/HeroSection.jsx';
import PartnerLogos from './components/home/PartnerLogos.jsx';
import AboutUs from './components/home/AboutUs.jsx';
import ProductCategories from './components/home/ProductCategories.jsx';
// import WhyChooseUs from './components/home/WhyChooseUs.jsx';
import ManufacturingProcess from './components/home/ManufacturingProcess.jsx';
import FeaturedProductsSection from './components/home/FeaturedProductsSection.jsx';
import ProjectsTestimonials from './components/home/ProjectsTestimonials.jsx';
import CTASection from './components/home/CTASection.jsx';
import BrickCalculator from './components/BrickCalculator.jsx';
import Dashboard from './components/Dashboard.jsx';
import Footer from './components/home/Footer.jsx';
import AboutCompany from './components/about/AboutCompany.jsx';
import AboutJourney from './components/about/AboutJourney.jsx';
import AboutMissionVision from './components/about/AboutMissionVision.jsx';
import AboutWhyChoose from './components/about/AboutWhyChoose.jsx';
import AboutCredentials from './components/about/AboutCredentials.jsx';
import AboutCTA from './components/about/AboutCTA.jsx';
import ProductsHero from './components/products/ProductsHero.jsx';
import ProductsSidebar from './components/products/ProductsSidebar.jsx';
import ProductsGrid from './components/products/ProductsGrid.jsx';
import ProductsTrustBar from './components/products/ProductsTrustBar.jsx';
import ProductsCTA from './components/products/ProductsCTA.jsx';
import ProductDetailsBreadcrumb from './components/products/ProductDetailsBreadcrumb.jsx';
import ProductDetailsMain from './components/products/ProductDetailsMain.jsx';
import ProductDetailsTabs from './components/products/ProductDetailsTabs.jsx';
import ProductDetailsSpecsFeatures from './components/products/ProductDetailsSpecsFeatures.jsx';
import ProductDetailsRelated from './components/products/ProductDetailsRelated.jsx';
import ProductDetailsCTA from './components/products/ProductDetailsCTA.jsx';
import ContactHero from './components/contact/ContactHero.jsx';
import ContactMain from './components/contact/ContactMain.jsx';
import ContactMap from './components/contact/ContactMap.jsx';
import ContactTrustBar from './components/contact/ContactTrustBar.jsx';

// Fallback seed catalog in case backend isn't loaded/running yet
const MOCK_CATALOG = [
  {
    "id": "1",
    "name": "Classic Terracotta Clay Brick",
    "type": "Clay",
    "price": 1.25,
    "dimensions": { "length": 230, "width": 110, "height": 76 },
    "image": "/images/clay_brick.png",
    "description": "Standard rustic red clay brick. Offers superior thermal mass, natural aesthetics, and timeless strength for residential and commercial building construction.",
    "stock": 25000,
    "characteristics": ["Compressive Strength: 30 MPa", "Water Absorption: < 8%", "Durability: High Class"]
  },
  {
    "id": "2",
    "name": "Slate Grey Engineering Brick",
    "type": "Engineering",
    "price": 2.10,
    "dimensions": { "length": 215, "width": 102, "height": 65 },
    "image": "/images/slate_brick.png",
    "description": "Dense, high-strength Class A engineering brick. Excellent for retaining walls, structural foundations, and high dampness environments due to very low water absorption.",
    "stock": 14000,
    "characteristics": ["Compressive Strength: 75 MPa", "Water Absorption: < 4.5%", "Durability: Extreme Class"]
  },
  {
    "id": "3",
    "name": "Amber Firebrick (Refractory)",
    "type": "Refractory",
    "price": 3.80,
    "dimensions": { "length": 230, "width": 114, "height": 64 },
    "image": "/images/fire_brick.png",
    "description": "Premium thermal refractory brick manufactured with fireclay. Designed specifically to withstand intense temperatures inside fireboxes, kilns, pizza ovens, and chimneys.",
    "stock": 3500,
    "characteristics": ["Max Temp: 1400°C", "Thermal Shock Resistance: Outstanding", "Density: Medium-High"]
  },
  {
    "id": "4",
    "name": "Golden Sandstone Block",
    "type": "Natural Stone",
    "price": 5.50,
    "dimensions": { "length": 300, "width": 150, "height": 100 },
    "image": "/images/sandstone_brick.png",
    "description": "Hand-chiseled premium natural sandstone block. Best for visual accent facades, boundary fencing, garden pathways, and high-end exterior landscaping.",
    "stock": 1200,
    "characteristics": ["Texture: Natural Chiseled", "Finish: Raw Stone", "Maintenance: Low"]
  },
  {
    "id": "5",
    "name": "Glazed Midnight Black Facing Brick",
    "type": "Glazed Facing",
    "price": 4.25,
    "dimensions": { "length": 215, "width": 102, "height": 65 },
    "image": "/images/glazed_brick.png",
    "description": "Modern glazed facing brick featuring a reflective semi-gloss black finish. Highly sought after by architects for contemporary urban styling and facade highlights.",
    "stock": 6000,
    "characteristics": ["Finish: Semi-Gloss Glazed", "Fade Resistance: UV Stable", "Water Repellent: 100%"]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [products, setProducts] = useState(MOCK_CATALOG);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [calculatorPreselect, setCalculatorPreselect] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Fly Ash Bricks');
  const [activeFilters, setActiveFilters] = useState({});
  const [sortOption, setSortOption] = useState('latest');
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProductDetail(product);
    setActiveTab('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRedirectToContact = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterToggle = (filterId) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterId]: !prev[filterId]
    }));
  };

  const handleResetFilters = () => {
    setActiveFilters({});
    setSelectedCategory('Fly Ash Bricks');
  };

  const API_URL = import.meta.env.VITE_API_URL || '';

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/products`);
      if (!res.ok) {
        throw new Error('API server returned status ' + res.status);
      }
      const data = await res.json();
      if (data.status === 'success') {
        setProducts(data.data);
      } else {
        throw new Error('API error format');
      }
    } catch (err) {
      console.warn('Could not connect to Node Express backend api. Running in offline mockup mode.');
      // Keep static mock catalog
      setProducts(prev => prev.length ? prev : MOCK_CATALOG);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEstimateSelect = (product) => {
    setCalculatorPreselect(product);
    setActiveTab('calculator');
  };

  // Add Product CRUD
  const handleAddProduct = async (newProduct) => {
    try {
      const res = await fetch(`${API_URL}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      if (res.ok) {
        fetchProducts();
      } else {
        throw new Error('Could not add to server');
      }
    } catch (err) {
      console.warn('Backend sync failed, adding locally.');
      const localProduct = {
        ...newProduct,
        id: String(Date.now()),
        image: '/images/clay_brick.png'
      };
      setProducts(prev => [...prev, localProduct]);
    }
  };

  // Update Product CRUD
  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
      });
      if (res.ok) {
        fetchProducts();
      } else {
        throw new Error('Could not update on server');
      }
    } catch (err) {
      console.warn('Backend sync failed, updating locally.');
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
    }
  };

  // Delete Product CRUD
  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to remove this brick variant from the catalog?')) return;
    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchProducts();
      } else {
        throw new Error('Could not delete on server');
      }
    } catch (err) {
      console.warn('Backend sync failed, deleting locally.');
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleScrollToContact = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToProducts = () => {
    const el = document.getElementById('categories-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterNavigation = (tab, sectionId = null, categoryName = null) => {
    if (categoryName) {
      setSelectedCategory(categoryName);
    }
    setActiveTab(tab);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <>
            <HeroSection 
              onExploreClick={handleScrollToProducts} 
              onQuoteClick={handleScrollToContact} 
            />
            <PartnerLogos />
            <AboutUs />
            <ProductCategories onCategorySelect={(catName) => handleFooterNavigation('products', null, catName)} />
            {/* <WhyChooseUs /> */}
            <ManufacturingProcess />
            <FeaturedProductsSection 
              products={products} 
              onQuoteClick={handleScrollToContact} 
              onViewDetails={handleViewDetails} 
            />
            <ProjectsTestimonials />
            <CTASection onQuoteClick={handleScrollToContact} />
          </>
        )}

        {activeTab === 'about' && (
          <>
            <AboutCompany />
            <AboutJourney />
            <AboutMissionVision />
            <AboutWhyChoose />
            <AboutCredentials />
            <AboutCTA onQuoteClick={handleRedirectToContact} />
          </>
        )}

        {activeTab === 'products' && (
          <>
            <ProductsHero onHomeClick={() => setActiveTab('home')} />
            <div className="container products-page-layout" style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '30px',
              paddingTop: '40px',
              paddingBottom: '60px'
            }}>
              <ProductsSidebar 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                activeFilters={activeFilters}
                onFilterToggle={handleFilterToggle}
                onResetFilters={handleResetFilters}
              />
              <ProductsGrid 
                products={products}
                onViewDetails={handleViewDetails}
                sortOption={sortOption}
                onSortChange={setSortOption}
              />
            </div>
            <ProductsTrustBar />
            <ProductsCTA onQuoteClick={handleRedirectToContact} />
          </>
        )}

        {activeTab === 'product-details' && selectedProductDetail && (
          <>
            <ProductDetailsBreadcrumb 
              productName={selectedProductDetail.name} 
              categoryName={selectedProductDetail.type || 'Bricks & Blocks'}
              onHomeClick={() => setActiveTab('home')}
              onProductsClick={() => setActiveTab('products')}
            />
            <ProductDetailsMain 
              product={selectedProductDetail} 
              onQuoteClick={handleRedirectToContact} 
            />
            <ProductDetailsTabs 
              productName={selectedProductDetail.name} 
              onContactClick={handleRedirectToContact} 
            />
            <ProductDetailsSpecsFeatures 
              product={selectedProductDetail} 
            />
            <ProductDetailsRelated 
              onProductClick={handleViewDetails} 
              currentProductId={selectedProductDetail.id} 
            />
            <ProductDetailsCTA 
              onQuoteClick={handleRedirectToContact} 
            />
          </>
        )}

        {activeTab === 'calculator' && (
          <BrickCalculator 
            products={products} 
            preselectedProduct={calculatorPreselect} 
          />
        )}

        {activeTab === 'admin' && (
          <Dashboard 
            products={products}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            refreshCatalog={fetchProducts}
          />
        )}

        {activeTab === 'contact' && (
          <>
            <ContactHero onHomeClick={() => setActiveTab('home')} />
            <ContactMain />
            <ContactMap />
            <ContactTrustBar />
          </>
        )}
      </main>

      <Footer onNavigate={handleFooterNavigation} />
    </div>
  );
}
