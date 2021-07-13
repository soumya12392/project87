// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
var block_y = 1;
var block_x = 1;

var block_image_width = 350;
var block_image_height = 430;

var block_image_object= "";

function new_image(get_image) {
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);

		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == 82) { // add appropriate keycode
		// upload red ranger
		new_image("rr.png");
		console.log("Red - r - 82");
	}

	if (keyPressed == 71) {
		block_x = 250;
		// upload green ranger
		new_image("gr.png");
		console.log("Green - g - 71");
	}
	
	if (keyPressed == 89) {
		block_x = 405;
		block_y = 5
		// upload yellow ranger
		new_image("yr.png");
		console.log("Yellow - y - 89");
	}

	if (keyPressed == 80) {
		block_x = 670;
		block_y = 1;
		// upload pink ranger
		new_image("pr.png");
		console.log("Pink - p - 80");
	}

	if (keyPressed == 66) {
		block_x = 800;
		block_y = -9;
		// upload blue ranger
		new_image("br.png");
		console.log("Blue - b - 66");
	}
}