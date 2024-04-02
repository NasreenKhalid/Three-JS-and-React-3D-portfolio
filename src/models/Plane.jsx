import React,{useRef} from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({isRotating,  ...props}) => {
    const ref=useRef();
    const {scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations,ref)
  return (
    <mesh {...props} ref={ref}>
    <primitive object={scene}/>
    
    </mesh>
  )
}

export default Plane