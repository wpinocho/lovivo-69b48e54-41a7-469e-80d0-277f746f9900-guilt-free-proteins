import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { MacrosTable } from '@/components/MacrosTable';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { CheckCircle2, Target, Scale, Ruler } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMThoMThjOS45NCAwIDE4LTguMDYgMTgtMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Premium Protein Nutrition
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Guilt-Free<br />
                <span className="text-accent">Protein</span> Fuel
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                High-protein foods and drinks designed for your goals. Portion-controlled, macro-tracked, and delicious.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                  onClick={() => {
                    const section = document.getElementById('goal-packs');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Your Plan
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => {
                    const section = document.getElementById('products');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Browse Products
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">30g+</div>
                  <div className="text-sm text-primary-foreground/70">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">0</div>
                  <div className="text-sm text-primary-foreground/70">Guilt</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-primary-foreground/70">Natural</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">Sample Nutrition</h3>
                <MacrosTable 
                  protein="30"
                  carbs="8"
                  fats="3"
                  calories="180"
                />
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Zero artificial sweeteners</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Portion-controlled servings</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Lab-tested for purity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Goal-Based</h3>
              <p className="text-sm text-muted-foreground">Packs tailored to your fitness objectives</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-2xl mb-4">
                <Ruler className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Portion Control</h3>
              <p className="text-sm text-muted-foreground">Pre-measured servings for easy tracking</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                <Scale className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Macro Tracking</h3>
              <p className="text-sm text-muted-foreground">Complete nutrition info on every product</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-2xl mb-4">
                <CheckCircle2 className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">Clean Ingredients</h3>
              <p className="text-sm text-muted-foreground">No artificial additives or fillers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Goal-Based Collections */}
      {!loadingCollections && collections.length > 0 && (
        <section id="goal-packs" className="py-20 bg-background scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Choose Your <span className="text-accent">Goal Pack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scientifically formulated protein packs designed for your specific fitness goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <div 
                  key={collection.id} 
                  className="group relative bg-card border-2 border-border hover:border-accent rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    {collection.image ? (
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                        <Target className="h-16 w-16 text-muted-foreground" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-2xl mb-1">{collection.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {collection.description && (
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {collection.description}
                      </p>
                    )}
                    
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      onClick={() => handleViewCollectionProducts(collection.id)}
                    >
                      View Products
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/30 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Products'
                  : 'All Products'
                }
              </h2>
              <p className="text-muted-foreground">
                High-protein nutrition made simple and delicious
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline"
                className="border-2"
                onClick={handleShowAllProducts}
              >
                View All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-2xl">
              <Target className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No products available in this collection
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Plan?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Join thousands achieving their fitness goals with our guilt-free protein nutrition
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 text-lg"
            onClick={() => {
              const section = document.getElementById('goal-packs');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Plan Now
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};
