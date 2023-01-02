import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Clock
} from 'three'

/**
 * ---
 */
const sizes = { w: 800, h: 600 }
const scene = new Scene()
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: 0xff0000 })
const cube = new Mesh(geometry, material)
scene.add(cube)

const camera = new PerspectiveCamera(75, sizes.w / sizes.h)
camera.position.z = 3

scene.add(camera)

const renderer = new WebGLRenderer()
renderer.setSize(sizes.w, sizes.h)

const clock = new Clock()

function tick() {
  const elapsedTime = clock.getElapsedTime()
  camera.position.x = Math.cos(elapsedTime)
  camera.position.y = Math.sin(elapsedTime)
  camera.lookAt(cube.position)

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()

document.body.appendChild(renderer.domElement)
