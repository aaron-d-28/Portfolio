import React from "react";
import Sketch from "react-p5";

const P5Background = () => {
    let particles = [];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(p5));
        }
    };

    const draw = (p5) => {
        p5.clear(); // Ensures no unwanted background layers
        p5.background("#09E85E");
        for (let particle of particles) {
            particle.move();
            particle.bounce(p5);
            particle.display(p5);
        }
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    class Particle {
        constructor(p5) {
            this.x = p5.random(p5.width);
            this.y = p5.random(p5.height);
            this.size = p5.random(5, 20);
            this.speedX = p5.random(-2, 2);
            this.speedY = p5.random(-2, 2);
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
            p5.fill(255, 150);
            p5.ellipse(this.x, this.y, this.size);
        }
    }

    return <Sketch setup={setup} draw={draw} windowResized={windowResized} className="absolute top-0 left-0 w-full h-full z-[-1]" />;
};

export default P5Background;
