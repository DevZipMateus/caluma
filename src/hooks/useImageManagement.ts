
import { useState, useCallback } from 'react';
import { imageManager } from '../utils/imageManager';

export const useImageManagement = () => {
  const [imageStats, setImageStats] = useState(() => imageManager.getImageStats());

  const deleteImage = useCallback((imageId: string, reason?: string) => {
    const updatedManagement = imageManager.deleteImage(imageId, reason);
    setImageStats(imageManager.getImageStats());
    
    // Aqui você poderia salvar o JSON atualizado
    console.log('Imagem deletada:', imageId, 'Nova configuração:', updatedManagement);
    
    return updatedManagement;
  }, []);

  const hideImage = useCallback((imageId: string) => {
    const updatedManagement = imageManager.hideImage(imageId);
    setImageStats(imageManager.getImageStats());
    
    console.log('Imagem oculta:', imageId, 'Nova configuração:', updatedManagement);
    
    return updatedManagement;
  }, []);

  const restoreImage = useCallback((imageId: string) => {
    const updatedManagement = imageManager.restoreImage(imageId);
    setImageStats(imageManager.getImageStats());
    
    console.log('Imagem restaurada:', imageId, 'Nova configuração:', updatedManagement);
    
    return updatedManagement;
  }, []);

  const isImageActive = useCallback((imageId: string) => {
    return imageManager.isImageActive(imageId);
  }, []);

  const getActiveImages = useCallback(() => {
    return imageManager.getActiveImages();
  }, []);

  const getDeletedImages = useCallback(() => {
    return imageManager.getDeletedImages();
  }, []);

  const exportConfiguration = useCallback(() => {
    return imageManager.exportImageManagement();
  }, []);

  return {
    imageStats,
    deleteImage,
    hideImage,
    restoreImage,
    isImageActive,
    getActiveImages,
    getDeletedImages,
    exportConfiguration
  };
};
