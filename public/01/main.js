import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  Vector3,
} from 'three'

/**
 * ---
 */
const scene = new Scene()
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: 0xff0000 })
const cube = new Mesh(geometry, material)

cube.position.x = 0.7
cube.position.y = -0.6
cube.position.z = 1

// cube.scale.x = 2
// cube.scale.y = 0.25
// cube.scale.z = 0.5

// cube.rotation.x = Math.PI * 0.25
// cube.rotation.y = Math.PI * 0.25
scene.add(cube)

const camera = new PerspectiveCamera(75, 800 / 600)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
camera.lookAt(new Vector3(0, 0, 0))

scene.add(camera)

/**
 * Axes
 */
const axesHelper = new AxesHelper(2)
scene.add(axesHelper)

const renderer = new WebGLRenderer()
renderer.setSize(800, 600)
renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)
