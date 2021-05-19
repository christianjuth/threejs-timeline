import * as THREE from '/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 50, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// const controls = new OrbitControls(camera, renderer.domElement)
// camera.position.x = Math.PI / 2
// camera.rotation.z -= 0.0001
// MATERIALS
// const material = new THREE.LineBasicMaterial({
// 	color: 0xff00ff
// });
// DATA
// type PointData = [number, number, number]
// type LineData = [PointData, PointData]
// const data: LineData[] = [
//   [[0, 0, 0], [0, -900, 0]]
// ]
// for (const lineData of data) {
//   const points = []
//   for (const pointData of lineData) { 
//     points.push( new THREE.Vector3(...pointData) )
//     points.push( new THREE.Vector3(...pointData) )
//   }
//   const geometry = new THREE.BufferGeometry().setFromPoints( points );
//   const line = new THREE.Line( geometry, material );
//   scene.add( line );
// }
for (let i = 0; i < 200; i++) {
    const color = new THREE.Color(0xffffff);
    // color.setHex( Math.random() * 0xffffff );
    const material = new THREE.LineBasicMaterial({
        color
    });
    const points = [];
    points.push(new THREE.Vector3(-100, 0, -i * 10));
    points.push(new THREE.Vector3(100, 0, -i * 10));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
}
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
var animate = function () {
    requestAnimationFrame(animate);
    // controls.update()
    // camera.translateZ( -1 )
    render();
};
function render() {
    renderer.render(scene, camera);
}
animate();
