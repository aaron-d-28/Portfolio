import React from "react";
import Sketch from "react-p5";

const P5Background = () => {
    let particles = [];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth + 1, p5.windowHeight - 1).parent(canvasParentRef);
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(p5));
        }
    };

    const draw = (p5) => {
        // Clear with semi-transparent dark to create trailing effect
        p5.background(10, 15, 20, 80);

        for (let particle of particles) {
            particle.move();
            particle.bounce(p5);
            particle.display(p5);
        }
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth + 1, p5.windowHeight - 1);
    };

    class Particle {
        constructor(p5) {
            this.x = p5.random(p5.width);
            this.y = p5.random(p5.height);
            this.size = p5.random(4, 10);
            this.speedX = p5.random(-1.5, 1.5);
            this.speedY = p5.random(-1.5, 1.5);
            this.alpha = p5.random(100, 200);
        }

        move() {
            this.x += this.speedX;
            this.y += this.speedY;
        }

        bounce(p5) {
            if (this.x <= 0 || this.x >= p5.width) this.speedX *= -1;
            if (this.y <= 0 || this.y >= p5.height) this.speedY *= -1;
        }

        display(p5) {
            p5.noStroke();
            p5.fill(0, 255, 170, this.alpha); // Neon mint
            p5.ellipse(this.x, this.y, this.size);
        }
    }

    return (
        <Sketch
            setup={setup}
            draw={draw}
            windowResized={windowResized}
            className="fixed inset-0 w-full h-full z-[-1] overflow-hidden backdrop-blur-sm"
        />
    );
};

export default P5Background;
