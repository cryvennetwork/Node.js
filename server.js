const express = require("express");
const app = express();

// Route utama
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Cryven Mining</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
          color: #fff;
          font-family: sans-serif;
          flex-direction: column;
        }
        canvas { display: block; }
        .overlay {
          position: absolute;
          top: 20px;
          width: 100%;
          text-align: center;
        }
        .btn {
          margin-top: 20px;
          padding: 10px 20px;
          background: #6a0dad;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 16px;
        }
      </style>
    </head>
    <body>
      <div class="overlay">
        <h1>🌍 Cryven Web Mining</h1>
        <p>Revolusi Keuangan dari Komunitas untuk Komunitas</p>
        <button class="btn" onclick="alert('Mining dimulai 🚀')">Mulai Mining</button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.min.js"></script>
      <script>
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Globe
        const geometry = new THREE.SphereGeometry(3, 32, 32);
        const texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro-react/earth.jpg");
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        camera.position.z = 7;

        function animate() {
          requestAnimationFrame(animate);
          globe.rotation.y += 0.002;
          renderer.render(scene, camera);
        }
        animate();

        // Responsif
        window.addEventListener("resize", () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      </script>
    </body>
    </html>
  `);
});

// Port (Vercel akan otomatis set PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Cryven app running on port " + PORT);
});
