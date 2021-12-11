namespace A09_2GoldenerHerbst {
    export class Cloud {
        position: Vector;
        velocity: Vector;

        constructor() {
            this.position = new Vector(0, 100);
            this.velocity = new Vector(0, 0);
            this.velocity.randomX(100, 200);
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }

        draw(_size: number): void {
            let nParticles: number = _size;
            let radiusParticle: number = 30;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.fillStyle = gradient;
            crc2.translate(this.position.x, this.position.y);

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * 150;
                let y: number = - (Math.random() * 50);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }
}