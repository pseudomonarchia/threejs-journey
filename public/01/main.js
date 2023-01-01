import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer
} from 'three'

const scene = new Scene()
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: 0xff0000 })
const cube = new Mesh(geometry, material)

scene.add(cube)

const camera = new PerspectiveCamera(75, 800 / 600)
camera.position.z = 3
scene.add(camera)

const renderer = new WebGLRenderer()
renderer.setSize(800, 600)
renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)
