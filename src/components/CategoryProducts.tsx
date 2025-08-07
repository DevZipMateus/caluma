
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, CheckCircle } from 'lucide-react';
import { useProductSelection } from '../contexts/ProductSelectionContext';
import { getSubcategoryProducts } from '../utils/subcategoryProducts';

interface CategoryProductsProps {
  categorySlug: string;
  categoryName: string;
}

// Define subcategories for each category
const categorySubcategoriesMapping: Record<string, string[]> = {
  'camisas-uniformes': [
    'Camisa Polo Masculina',
    'Camisa Polo Feminina',
    'Masculina Algodão',
    'Masculina Reglan',
    'Regata Feminina Branca',
    'Regata Masculina Branca'
  ],
  'canecas': [
    'CANECA ALUMÍNIO',
    'CANECA INOX',
    'CANECA CHOPP'
  ],
  'papelaria': [
    'ADESIVO 30 FOLHAS',
    'FOTOGRÁFICO A4 20 FOLHAS',
    'FOTOGRÁFICO A4 50 FOLHAS',
    'FOTOGRÁFICO A4 ESPECIAL'
  ],
  'equipamentos': [
    'PRENSA PLANA',
    'DIAMOND 360º TRANSFER',
    'PLOTTER DE RECORTE'
  ],
  'sublimacao': [
    'PRENSA PLANA',
    'DIAMOND 360º TRANSFER',
    'PLOTTER DE RECORTE'
  ],
  'serigrafia': [
    'PRENSA PLANA',
    'DIAMOND 360º TRANSFER',
    'PLOTTER DE RECORTE'
  ]
};

const CategoryProducts: React.FC<CategoryProductsProps> = ({ categorySlug, categoryName }) => {
  const {
    addProductDirectly,
    removeProduct,
    updateQuantity,
    getProductInCart
  } = useProductSelection();

  // Get all subcategories for this category
  const subcategories = categorySubcategoriesMapping[categorySlug] || [];
  
  // Get all products for all subcategories in this category
  const allProducts = subcategories.flatMap(subcategory => {
    const products = getSubcategoryProducts(subcategory);
    return products.map(product => ({
      ...product,
      subcategory
    }));
  });

  const handleAddProduct = (product: typeof allProducts[0]) => {
    addProductDirectly({
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description
    });
  };

  if (allProducts.length === 0) {
    return (
      <div className="w-full mb-4 sm:mb-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">{categoryName}</h3>
          <p className="text-muted-foreground">Nenhum produto disponível nesta categoria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mb-4 sm:mb-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-4">
            {categoryName} - Todos os Produtos
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allProducts.map(product => {
              const productInCart = getProductInCart(product.id);
              const isInCart = !!productInCart;
              
              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      {isInCart && (
                        <div className="absolute top-2 right-2 bg-green-600 text-white rounded-full p-1">
                          <CheckCircle size={16} />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-3 space-y-3">
                      {/* Product Info */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-1 mb-1">
                          {product.subcategory}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Not in Cart State - Direct Add */}
                      {!isInCart && (
                        <Button 
                          onClick={() => handleAddProduct(product)} 
                          size="sm" 
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                          <ShoppingCart size={14} className="mr-2" />
                          Adicionar
                        </Button>
                      )}

                      {/* In Cart State */}
                      {isInCart && productInCart && (
                        <div className="space-y-2">
                          {/* In Cart Status */}
                          <div className="flex items-center justify-center bg-green-50 rounded-lg p-2">
                            <CheckCircle size={14} className="mr-2 text-green-600" />
                            <span className="text-xs font-medium text-green-600">No Carrinho</span>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between bg-green-50 rounded-lg p-2">
                            <span className="text-xs font-medium text-green-600">Qtd:</span>
                            <div className="flex items-center gap-1">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 w-6 p-0 border-green-200 hover:bg-green-100"
                                onClick={() => {
                                  if (productInCart.quantity === 1) {
                                    removeProduct(product.id);
                                  } else {
                                    updateQuantity(product.id, productInCart.quantity - 1);
                                  }
                                }}
                              >
                                <Minus size={10} />
                              </Button>
                              <span className="text-xs font-bold min-w-[20px] text-center bg-white px-1 py-1 rounded border border-green-200">
                                {productInCart.quantity}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 w-6 p-0 border-green-200 hover:bg-green-100"
                                onClick={() => updateQuantity(product.id, productInCart.quantity + 1)}
                              >
                                <Plus size={10} />
                              </Button>
                            </div>
                          </div>

                          {/* Add More Button */}
                          <Button
                            onClick={() => handleAddProduct(product)}
                            size="sm"
                            variant="outline"
                            className="w-full text-xs border-green-200 text-green-600 hover:bg-green-50"
                          >
                            <Plus size={12} className="mr-1" />
                            Mais
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
