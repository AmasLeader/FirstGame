class Ground {
    constructor(maxHeight) {
        this.maxHeight = maxHeight;
        this.heights = [];
        let heigtTmp = this.maxHeight / 2;
        for (let i = 0; i < width; i++) {
            heigtTmp += random(-0.5, 0.5);
            this.heights.push(heigtTmp);
        }
    }

    show() {
        stroke('green');
        for (let i = 0; i < this.heights.length; i++) {
            line(i, height - this.heights[i], i, height);
        }
    }

    progress() {
        for (let i = 0; i < 10; i++) {
            this.heights.shift();
            let nextHeight = this.heights[this.heights.length - 1] + random(-0.5, 0.5);
            if (nextHeight < 0) {
                nextHeight = 0;
            } else if (nextHeight > this.maxHeight) {
                nextHeight = this.maxHeight;
            }
            this.heights.push(nextHeight);
        }

    }
}