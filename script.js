const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;


// kleuren
const black = "#000000";
const red = "#FF0000";
const yellow = "#FFFF00";
const orange = "#FFA500"

class House {

    run(x, y, factor, roof, lwall, rwall) {

        const gX = canvas.width / 2;
        const gY = canvas.height / 2;

        // roof
        g.beginPath();
        g.moveTo(x + 3 * factor, y +  1 * factor);
        g.lineTo(x + 7 * factor, y +  2 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 2 * factor, y +  3 * factor);
        g.lineTo(x + 3 * factor, y +  1 * factor);

        g.fillStyle = roof;
        g.fill();
        g.closePath();

        // left wall
        g.beginPath();
        g.moveTo(x + 2 * factor, y +  3 * factor);
        
        
        g.lineTo(x + 2 * factor, y +  5 * factor);
        g.lineTo(x + 6 * factor, y +  6 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 2 * factor, y +  3 * factor);
        
        g.fillStyle = lwall;
        g.fill();
        g.closePath();

        // right wall
        g.beginPath();
        g.fillStyle = rwall;
        g.moveTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 6 * factor, y +  6 * factor);
        g.lineTo(x + 8 * factor, y +  5 * factor);
        g.lineTo(x + 8 * factor, y +  3 * factor);
        g.lineTo(x + 7 * factor, y +  2 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);

        g.closePath();
        g.stroke();
        g.fill();
    }
}

const house = new House();
house.run(100, 100, 15, black, red, orange);

const house1 = new House();
house.run(100, 10, 15, yellow, orange, red);

const house2 = new House();
house.run(300, 100, 15, red, orange, red);

const house3 = new House();
house.run(550, 330, 15, black, orange, red);

const house4 = new House();
house.run(550, 200, 15, red, red, orange);

const house5= new House();
house.run(800, 350, 15, orange, red, orange);

const house6= new House();
house.run(1000, 350, 15, black, black, red);

const house7= new House();
house.run(1000, 190, 15, red, black, red);

const house8= new House();
house.run(1180, 360, 15, red, orange, red);

const house9= new House();
house.run(800, 220, 15, black, red, orange);

const house10= new House();
house.run(300, 200, 15, red, orange, black);

const house11= new House();
house.run(1180, 200, 15, red, red, red);

const house12= new House();
house.run(800, 450, 15, red, orange, red);

const house13= new House();
house.run(800, 100, 15, red, orange, red);

const house14= new House();
house.run(800, 10, 15, red, orange, red);

const house15= new House();
house.run(800, 580, 15, red, orange, red);

const house16 = new House();
house.run(550, 90, 15, red, red, orange);

const house17 = new House();
house.run(550, 430, 15, black, orange, red);

const house18 = new House();
house.run(550, 580, 15, black, orange, red);

const house19 = new House();
house.run(550, 10, 15, black, orange, red);

const house20 = new House();
house.run(300, 330, 15, black, orange, red);

const house21 = new House();
house.run(300, 10, 15, yellow, orange, red);

const house22= new House();
house.run(300, 430, 15, red, orange, black);

const house23= new House();
house.run(300, 580, 15, red, orange, black);

const house24 = new House();
house.run(100, 200, 15, black, red, orange);

const house25 = new House();
house.run(100, 320, 15, red, red, orange);

const house26 = new House();
house.run(100, 420, 15, black, red, orange);

const house27 = new House();
house.run(100, 580, 15, black, red, orange);

const house28 = new House();
house.run(1000, 20, 15, black, red, orange);

const house29 = new House();
house.run(1000, 580, 15, black, red, orange);

const house30 = new House();
house.run(1000, 460, 15, black, red, orange);

const house31 = new House();
house.run(1180, 25, 15, red, red, orange);

const house32= new House();
house.run(1180, 590, 15, red, orange, red);

const house33= new House();
house.run(1180, 480, 15, red, orange, red);












class Tree {
    triangle(x, y, factor, color) {

        g.fillStyle = color;
        g.beginPath();
        g.moveTo(
            x - 5 * factor, 
            y
        );

        g.lineTo(
            x + 5 * factor, 
            y
        );

        g.lineTo(
            x, 
            y - 7.5 * factor
        );

        g.fill();
    }

    run(x, y, factor, size) {
        const jump = 20;

        for (let i = 0; i < size; i++) {

            this.triangle(
                x, 
                y + jump + (i * 20), 
                factor + i, 
                "green"
            )
        }
    }
}

let tree = new Tree();

        tree.run(
            275, 
            150, 
            5, 
            3
        );

        let tree1 = new Tree();

        tree.run(
            750, 
            320, 
            5, 
            3
        );

        let tree2 = new Tree();

        tree.run(
            1150, 
            300, 
            5, 
            3
        );

        let tree3 = new Tree();

        tree.run(
            750, 
            450, 
            5, 
            3
        );

        let tree4 = new Tree();

        tree.run(
            750, 
            150, 
            5, 
            3
        );

        let tree5 = new Tree();

        tree.run(
            750, 
            45, 
            5, 
            3
        );

        let tree6 = new Tree();

        tree.run(
            750, 
            600, 
            5, 
            3
        );

        let tree7 = new Tree();

        tree.run(
            275, 
            30, 
            5, 
            3
        );

        let tree8 = new Tree();

        tree.run(
            275, 
            320, 
            5, 
            3
        );

        let tree9 = new Tree();

        tree.run(
            275, 
            30, 
            5, 
            3
        );

        let tree10 = new Tree();

        tree.run(
            275, 
            460, 
            5, 
            3
        );

        let tree11 = new Tree();

        tree.run(
            275, 
            600, 
            5, 
            3
        );

        let tree12 = new Tree();

        tree.run(
            1160, 
            600, 
            5, 
            3
        );

        let tree13 = new Tree();

        tree.run(
            1160, 
            55, 
            5, 
            3
        );

        let tree14 = new Tree();

        tree.run(
            1160, 
            450, 
            5, 
            3
        );

        let tree15 = new Tree();

        tree.run(
            1160, 
            150, 
            5, 
            3
        );


    g.font = "40px Sans-Serif";  

    g.fillText("Merry Christmas!!", 600, 580)
