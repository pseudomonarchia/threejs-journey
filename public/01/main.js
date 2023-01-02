import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
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

const cursor = { x: 0, y: 0 }
window.addEventListener('mousemove', e => {
  cursor.x = e.clientX / sizes.w - 0.5
  cursor.y = - (e.clientY / sizes.h - 0.5)
})

function tick() {
  camera.position.x = cursor.x * 5
  camera.position.y = cursor.y * 5
  camera.lookAt(cube.position)

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()

document.body.appendChild(renderer.domElement)
