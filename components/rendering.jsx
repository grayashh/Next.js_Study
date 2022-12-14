import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export default function Rendering({ ...props }) {
  const { nodes, materials } = useSpline("scene.splinecode");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Text 5"
        geometry={nodes["Text 5"].geometry}
        material={materials["Text 5 Material"]}
        castShadow
        receiveShadow
        position={[-456.83, 414.45, -411]}
      />
      <mesh
        name="Text 4"
        geometry={nodes["Text 4"].geometry}
        material={materials["Text 4 Material"]}
        castShadow
        receiveShadow
        position={[-707.77, 338, -597]}
      />
      <mesh
        name="Text 3"
        geometry={nodes["Text 3"].geometry}
        material={materials["Text 3 Material"]}
        castShadow
        receiveShadow
        position={[26.32, 37, -411]}
      />
      <mesh
        name="Text 2"
        geometry={nodes["Text 2"].geometry}
        material={materials["Text 2 Material"]}
        castShadow
        receiveShadow
        position={[239.44, 199, -248]}
      />
      <mesh
        name="Text"
        geometry={nodes.Text.geometry}
        material={materials["Text Material"]}
        castShadow
        receiveShadow
        position={[-362.1, -159.84, -144]}
      />
      <directionalLight
        name="Directional Light"
        castShadow
        intensity={0.6}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-5000}
        shadow-camera-right={5000}
        shadow-camera-top={5000}
        shadow-camera-bottom={-5000}
        position={[18.54, 196.55, 491.49]}
      />
      <mesh
        name="Torus"
        geometry={nodes.Torus.geometry}
        material={materials.Glass}
        castShadow
        receiveShadow
      />
      <mesh
        name="Shape"
        geometry={nodes.Shape.geometry}
        material={materials["Shape Material"]}
        castShadow
        receiveShadow
        position={[341.66, 83.98, 0]}
        rotation={[0, 0, 0]}
      />
      <OrthographicCamera
        name="Default Camera"
        makeDefault={false}
        zoom={0}
        far={50000}
        near={-50000}
        position={[421.6, -448.22, 801.18]}
        rotation={[0.39, 0.19, -0.2]}
        scale={1}
      />
      <mesh
        name="Rectangle 6"
        geometry={nodes["Rectangle 6"].geometry}
        material={materials.Pink}
        castShadow
        receiveShadow
        position={[-700.64, 343.77, -621.72]}
      />
      <mesh
        name="Rectangle 5"
        geometry={nodes["Rectangle 5"].geometry}
        material={materials.Turquose}
        castShadow
        receiveShadow
        position={[-458.87, 411.05, -435.92]}
      />
      <mesh
        name="Rectangle 4"
        geometry={nodes["Rectangle 4"].geometry}
        material={materials.Purple}
        castShadow
        receiveShadow
        position={[40.66, 47, -435.92]}
      />
      <mesh
        name="Rectangle 3"
        geometry={nodes["Rectangle 3"].geometry}
        material={materials.Purple}
        castShadow
        receiveShadow
        position={[-348.74, -162.23, -167.36]}
      />
      <mesh
        name="Rectangle 2"
        geometry={nodes["Rectangle 2"].geometry}
        material={materials.Pink}
        castShadow
        receiveShadow
        position={[242.6, 207, -273.39]}
      />
      <PerspectiveCamera
        name="1"
        makeDefault={true}
        far={100000}
        near={5}
        fov={45}
        position={[494.16, -452.9, 1144.21]}
        rotation={[0.35, 0.37, -0.13]}
      />
    </group>
  );
}
