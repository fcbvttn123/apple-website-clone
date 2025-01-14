import { PerspectiveCamera, View } from "@react-three/drei"
import { Lights } from "./Lights"
import { Iphone } from "./Iphone"
import { Suspense } from "react"

export function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute border-2 border-red-500 ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {/* <ambientLight intensity={0.3} /> */}

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense>
        <Iphone />
      </Suspense>
    </View>
  )
}
