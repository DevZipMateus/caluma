
import siteStructure from '../data/siteStructure.json';

interface ImageStatus {
  imageId: string;
  status: 'active' | 'deleted' | 'hidden';
  deletedAt?: string;
  reason?: string;
}

interface ImageManagementData {
  version: string;
  lastUpdated: string;
  deletedImages: string[];
  hiddenImages: string[];
  imageStatus: Record<string, ImageStatus>;
}

class ImageManager {
  private imageManagement: ImageManagementData;

  constructor() {
    this.imageManagement = siteStructure.imageManagement as ImageManagementData;
  }

  // Verificar se uma imagem está ativa (não deletada/oculta)
  isImageActive(imageId: string): boolean {
    if (this.imageManagement.deletedImages.includes(imageId)) {
      return false;
    }
    if (this.imageManagement.hiddenImages.includes(imageId)) {
      return false;
    }
    const status = this.imageManagement.imageStatus[imageId];
    return !status || status.status === 'active';
  }

  // Marcar imagem como deletada
  deleteImage(imageId: string, reason?: string): ImageManagementData {
    const updatedManagement = {
      ...this.imageManagement,
      deletedImages: [...this.imageManagement.deletedImages, imageId],
      imageStatus: {
        ...this.imageManagement.imageStatus,
        [imageId]: {
          imageId,
          status: 'deleted' as const,
          deletedAt: new Date().toISOString(),
          reason
        }
      },
      lastUpdated: new Date().toISOString()
    };

    this.imageManagement = updatedManagement;
    return updatedManagement;
  }

  // Ocultar imagem temporariamente
  hideImage(imageId: string): ImageManagementData {
    const updatedManagement = {
      ...this.imageManagement,
      hiddenImages: [...this.imageManagement.hiddenImages, imageId],
      imageStatus: {
        ...this.imageManagement.imageStatus,
        [imageId]: {
          imageId,
          status: 'hidden' as const,
          deletedAt: new Date().toISOString()
        }
      },
      lastUpdated: new Date().toISOString()
    };

    this.imageManagement = updatedManagement;
    return updatedManagement;
  }

  // Restaurar imagem deletada/oculta
  restoreImage(imageId: string): ImageManagementData {
    const updatedManagement = {
      ...this.imageManagement,
      deletedImages: this.imageManagement.deletedImages.filter(id => id !== imageId),
      hiddenImages: this.imageManagement.hiddenImages.filter(id => id !== imageId),
      imageStatus: {
        ...this.imageManagement.imageStatus,
        [imageId]: {
          imageId,
          status: 'active' as const
        }
      },
      lastUpdated: new Date().toISOString()
    };

    this.imageManagement = updatedManagement;
    return updatedManagement;
  }

  // Obter todas as imagens ativas
  getActiveImages(): string[] {
    return Object.keys(this.imageManagement.imageStatus)
      .filter(imageId => this.isImageActive(imageId));
  }

  // Obter imagens deletadas
  getDeletedImages(): ImageStatus[] {
    return this.imageManagement.deletedImages
      .map(imageId => this.imageManagement.imageStatus[imageId])
      .filter(Boolean);
  }

  // Obter estatísticas das imagens
  getImageStats() {
    const allImageIds = Object.keys(this.imageManagement.imageStatus);
    const activeCount = this.getActiveImages().length;
    const deletedCount = this.imageManagement.deletedImages.length;
    const hiddenCount = this.imageManagement.hiddenImages.length;

    return {
      total: allImageIds.length,
      active: activeCount,
      deleted: deletedCount,
      hidden: hiddenCount
    };
  }

  // Exportar dados atualizados para salvar no JSON
  exportImageManagement(): ImageManagementData {
    return this.imageManagement;
  }
}

export const imageManager = new ImageManager();

// Função utilitária para filtrar produtos com imagens ativas
export const filterActiveProducts = (products: any[]) => {
  return products.filter(product => {
    return !product.imageId || imageManager.isImageActive(product.imageId);
  });
};

// Função utilitária para filtrar subcategorias com imagens ativas
export const filterActiveSubcategories = (subcategories: any[]) => {
  return subcategories.filter(subcategory => {
    return !subcategory.imageId || imageManager.isImageActive(subcategory.imageId);
  });
};

export default ImageManager;
