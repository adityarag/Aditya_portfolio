// This is a Node.js script to create a sample video for testing
// You can run this with: node create-sample-video.js

const fs = require('fs');
const path = require('path');

// Create a simple HTML5 canvas video generator
const createSampleVideoHTML = (projectName, filename) => {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>Sample Video Generator - ${projectName}</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        canvas {
            border: 2px solid white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .info {
            color: white;
            text-align: center;
            margin-top: 20px;
        }
        button {
            background: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin: 10px;
            cursor: pointer;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="1280" height="720"></canvas>
    <div class="info">
        <h2>${projectName}</h2>
        <p>Sample video for portfolio demonstration</p>
        <button onclick="startRecording()">Record Sample Video</button>
        <button onclick="downloadVideo()" id="downloadBtn" style="display:none;">Download Video</button>
    </div>

    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let mediaRecorder;
        let recordedChunks = [];

        // Animation variables
        let frame = 0;
        let animationId;

        function animate() {
            // Clear canvas
            ctx.fillStyle = 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#a855f7');
            gradient.addColorStop(1, '#ec4899');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add animated elements
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            for (let i = 0; i < 5; i++) {
                const x = (Math.sin(frame * 0.01 + i) * 200) + canvas.width / 2;
                const y = (Math.cos(frame * 0.015 + i) * 100) + canvas.height / 2;
                ctx.beginPath();
                ctx.arc(x, y, 50, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Add text
            ctx.fillStyle = 'white';
            ctx.font = 'bold 48px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('${projectName}', canvas.width / 2, canvas.height / 2 - 50);
            
            ctx.font = '24px Arial';
            ctx.fillText('Portfolio Video Sample', canvas.width / 2, canvas.height / 2 + 20);
            
            ctx.font = '18px Arial';
            ctx.fillText('Frame: ' + frame, canvas.width / 2, canvas.height / 2 + 60);
            
            frame++;
            animationId = requestAnimationFrame(animate);
        }

        function startRecording() {
            recordedChunks = [];
            const stream = canvas.captureStream(30); // 30 FPS
            mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'video/webm;codecs=vp9'
            });

            mediaRecorder.ondataavailable = function(event) {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };

            mediaRecorder.onstop = function() {
                const blob = new Blob(recordedChunks, {
                    type: 'video/webm'
                });
                const url = URL.createObjectURL(blob);
                
                // Show download button
                const downloadBtn = document.getElementById('downloadBtn');
                downloadBtn.style.display = 'inline-block';
                downloadBtn.onclick = function() {
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = '${filename}';
                    a.click();
                };
            };

            // Start animation and recording
            animate();
            mediaRecorder.start();
            
            // Record for 5 seconds
            setTimeout(() => {
                mediaRecorder.stop();
                cancelAnimationFrame(animationId);
            }, 5000);
        }

        // Start animation immediately
        animate();
    </script>
</body>
</html>`;
};

// Create sample video generators for each project
const projects = [
    { name: 'Drishti Sharma - YouTube Content', filename: 'drishti-sharma-sample.webm' },
    { name: 'Ansh Tripathi - Instagram Reels', filename: 'ansh-tripathi-sample.webm' },
    { name: 'PeerHub Startup - Brand Reels', filename: 'peerhub-sample.webm' },
    { name: 'Femora AI - Health Content', filename: 'femora-ai-sample.webm' },
    { name: 'Drishti NGO - Documentary', filename: 'drishti-ngo-sample.webm' },
    { name: 'F1 Fastline News - News Content', filename: 'f1-fastline-sample.webm' }
];

// Create the video generators directory
const generatorsDir = path.join(__dirname, 'public', 'videos', 'generators');
if (!fs.existsSync(generatorsDir)) {
    fs.mkdirSync(generatorsDir, { recursive: true });
}

// Generate HTML files for each project
projects.forEach(project => {
    const htmlContent = createSampleVideoHTML(project.name, project.filename);
    const htmlPath = path.join(generatorsDir, `${project.filename.replace('.webm', '.html')}`);
    fs.writeFileSync(htmlPath, htmlContent);
    console.log(`Created: ${htmlPath}`);
});

console.log('\n🎬 Sample video generators created!');
console.log('\n📁 Open the HTML files in public/videos/generators/ to create sample videos');
console.log('\n💡 Instructions:');
console.log('1. Open any HTML file in your browser');
console.log('2. Click "Record Sample Video" button');
console.log('3. Wait 5 seconds for recording to complete');
console.log('4. Click "Download Video" to save the file');
console.log('5. Move the downloaded file to public/videos/ directory');
console.log('6. Rename it to match the expected filename (e.g., drishti-sharma-sample.mp4)');
