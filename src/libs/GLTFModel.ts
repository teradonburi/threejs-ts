import * as THREE from 'three'
import { GLTF } from 'three/addons/loaders/GLTFLoader.js'

export default class GLTFModel {
  object: THREE.Group<THREE.Object3DEventMap> & { 
    boxHelper?: THREE.BoxHelper, 
    size?: THREE.Vector3, 
    center?: THREE.Vector3
    boundingBox?: THREE.Box3 | null
    boundingSphere?: THREE.Sphere | null
  }
  mixer?: THREE.AnimationMixer
  actions?: THREE.AnimationAction[]
  initPos: THREE.Vector3 = new THREE.Vector3()
  initRotate: number = 0
  initScale: THREE.Vector3 = new THREE.Vector3(1, 1, 1)
  maxSpeed: number
  speed: number
  velocity: THREE.Vector3

  constructor (gltfOriginal: GLTF, traverse = false, clone = false) {
    this.object = clone ? gltfOriginal.scene.clone(true) : gltfOriginal.scene
    const animations = gltfOriginal.animations.slice(0) // deep copy
    if (animations && animations.length) {
      this.mixer = new THREE.AnimationMixer(this.object)
      this.actions = []
      for (let i = 0; i < animations.length; i ++) {
        const animation = animations[i]
        this.actions.push(this.mixer.clipAction(animation))
      }
    }

    if (traverse) {
      this.object.traverse((child) => {
        const isMesh = child instanceof THREE.Mesh && child.isMesh
        const isLight = child instanceof THREE.Light && child.isLight
        if (isMesh || isLight) {
          child.castShadow = true
        }
      })
    }
    this.object.receiveShadow = true
    this.object.castShadow = true
    this.maxSpeed = 0.2
    this.speed = 0.5
    this.velocity = new THREE.Vector3(0, 0, 0)
  }

  get position() { return this.object.position }

  init = (pos: THREE.Vector3, rotate: number, size: number) => {
    this.initPos = pos
    this.initRotate = rotate
    this.initScale = new THREE.Vector3(size, size, size)
    this.object.position.set(this.initPos.x, this.initPos.y, this.initPos.z)
    this.object.scale.set(this.initScale.x, this.initScale.y, this.initScale.z)
    this.object.rotation.set(0, this.initRotate, 0)
  }

  getCenter = () => {
    this.object.boxHelper = new THREE.BoxHelper(this.object, 0xffff00)
    this.object.size = new THREE.Vector3(0, 0, 0)
    const box3 = new THREE.Box3()
    box3.setFromObject(this.object.boxHelper)
    box3.getSize(this.object.size)
    this.object.center = new THREE.Vector3(0, -this.object.size.y * 0.5, 0)
  }

  setSpeed = (speed: number, maxSpeed: number) => {
    this.speed = speed
    this.maxSpeed = maxSpeed
  }

  move = (camera: THREE.Camera, radian: number) => {
    let dir = new THREE.Vector3()
    camera.getWorldDirection(dir)
    dir.y = 0
    dir.normalize()
    const yAxis = new THREE.Vector3(0, 1, 0)

    dir.applyAxisAngle(yAxis, radian)
    const rotate = new THREE.Vector3()
    rotate.copy(dir)
    rotate.applyAxisAngle(yAxis, this.initRotate)
    this.object.lookAt(new THREE.Vector3(this.object.position.x + rotate.x, this.object.position.y + rotate.y, this.object.position.z + rotate.z))
    dir.multiplyScalar(this.speed)
    if (this.velocity.length() < this.maxSpeed) {
      this.velocity.x += dir.x
      this.velocity.z += dir.z
    }
    this.object.position.x += this.velocity.x
    this.object.position.z += this.velocity.z
  }

  moveTo = (pos: THREE.Vector3) => {
    let dir = new THREE.Vector3(pos.x - this.object.position.x, pos.y - this.object.position.y, pos.z - this.object.position.z)
    dir.y = 0
    dir.normalize()
    const yAxis = new THREE.Vector3(0, 1, 0)

    const rotate = new THREE.Vector3()
    rotate.copy(dir)
    rotate.applyAxisAngle(yAxis, this.initRotate)
    this.object.lookAt(new THREE.Vector3(this.object.position.x + rotate.x, this.object.position.y + rotate.y, this.object.position.z + rotate.z))
    dir.multiplyScalar(this.speed)
    if (this.velocity.length() < this.maxSpeed) {
      this.velocity.x += dir.x
      this.velocity.z += dir.z
    }
    this.object.position.x += this.velocity.x
    this.object.position.z += this.velocity.z
  }

  stop = () => {
    this.velocity.x = 0
    this.velocity.z = 0
  }
}