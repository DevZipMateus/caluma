
import React from 'react';
import { useImageManagement } from '../hooks/useImageManagement';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Trash2, Eye, EyeOff, RotateCcw } from 'lucide-react';

const ImageManagement: React.FC = () => {
  const {
    imageStats,
    deleteImage,
    hideImage,
    restoreImage,
    getActiveImages,
    getDeletedImages,
    exportConfiguration
  } = useImageManagement();

  const activeImages = getActiveImages();
  const deletedImages = getDeletedImages();

  const handleDeleteImage = (imageId: string) => {
    const reason = prompt('Motivo da exclusão (opcional):');
    deleteImage(imageId, reason || undefined);
  };

  const handleExportConfig = () => {
    const config = exportConfiguration();
    const dataStr = JSON.stringify(config, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'imageManagement.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciamento de Imagens</h1>
        <Button onClick={handleExportConfig} variant="outline">
          Exportar Configuração
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{imageStats.total}</div>
            <p className="text-xs text-muted-foreground">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">{imageStats.active}</div>
            <p className="text-xs text-muted-foreground">Ativas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">{imageStats.deleted}</div>
            <p className="text-xs text-muted-foreground">Deletadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">{imageStats.hidden}</div>
            <p className="text-xs text-muted-foreground">Ocultas</p>
          </CardContent>
        </Card>
      </div>

      {/* Imagens Ativas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Imagens Ativas ({activeImages.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {activeImages.map((imageId) => (
              <div key={imageId} className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">Ativa</Badge>
                  <span className="font-mono text-sm">{imageId}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => hideImage(imageId)}
                  >
                    <EyeOff className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteImage(imageId)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Imagens Deletadas */}
      {deletedImages.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              Imagens Deletadas ({deletedImages.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {deletedImages.map((imageStatus) => (
                <div key={imageStatus.imageId} className="flex items-center justify-between p-3 border rounded bg-red-50">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive">Deletada</Badge>
                    <span className="font-mono text-sm">{imageStatus.imageId}</span>
                    {imageStatus.reason && (
                      <span className="text-sm text-gray-600">({imageStatus.reason})</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => restoreImage(imageStatus.imageId)}
                    >
                      <RotateCcw className="w-4 h-4" />
                      Restaurar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageManagement;
