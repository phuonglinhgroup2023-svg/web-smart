import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import type { Product, ProductColorOption } from '@/types/product';

interface ProductViewerProps {
  product: Product;
  color?: ProductColorOption;
}

const ProductMesh: React.FC<{ color?: string }> = ({ color = '#ffffff' }) => (
  <mesh castShadow receiveShadow>
    <boxGeometry args={[1.6, 0.15, 0.8]} />
    <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} />
  </mesh>
);

const ProductViewer: React.FC<ProductViewerProps> = ({ product, color }) => {
  return (
    <div className="h-[420px] w-full">
      <Canvas shadows camera={{ position: [2, 1.5, 2.2], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage key={product.id} environment="city" intensity={0.4} contactShadow={false}>
            <ProductMesh color={color?.hex} />
          </Stage>
          <OrbitControls enablePan={false} enableZoom enableRotate autoRotate autoRotateSpeed={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProductViewer;
